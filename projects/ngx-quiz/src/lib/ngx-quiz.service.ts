import { Injectable } from '@angular/core';

import { BehaviorSubject, take, tap } from 'rxjs';

import { Quiz, QuizStatus } from './shared/models/quiz';
import { Report } from './shared/models/report';
import { AnswerData } from './shared/models/answer';
import { QuestionDirection } from './shared/models/question';

@Injectable()
export class NgxQuizService {
  private quiz: Quiz;
  quizReport: Report = {};

  quizStatus$ = new BehaviorSubject<QuizStatus>(QuizStatus.Started);
  index$ = new BehaviorSubject<number>(0);

  constructor() {}

  initQuiz(quiz: Quiz): void {
    if (!quiz) {
      console.error('You need to provide the quiz object');
      return;
    }

    this.quiz = quiz;
    this.overrideInitialStage();
  }

  overrideInitialStage(): void {
    if (!this.quiz.startScreen) {
      this.quizStatus$.next(QuizStatus.OnGoing);
    }
  }

  manageQuestionIndex(direction: QuestionDirection): void {
    this.index$
      .pipe(
        take(1),
        tap((index: number) => {
          let newIndex: number;
          if (direction === 'prev') {
            newIndex = index <= 0 ? 0 : index - 1;
          } else {
            newIndex = index + 1;
          }

          if (newIndex >= this.quiz.questions.length) {
            this.quizStatus$.next(QuizStatus.Finished);
            return;
          }

          this.index$.next(newIndex);
        })
      )
      .subscribe();
  }

  previousQuestion(): void {
    this.manageQuestionIndex('prev');
  }

  nextQuestion(): void {
    this.manageQuestionIndex('next');
  }

  answerQuestion(answerData: AnswerData): void {
    this.saveProgress(answerData);

    const isLastQuestion = answerData.questionIndex === this.quiz.questions.length - 1;
    if (this.quiz.automaticAdvance && isLastQuestion) {
      this.quizStatus$.next(QuizStatus.Finished);
    } else if (this.quiz.automaticAdvance) {
      this.nextQuestion();
    }
  }

  startQuiz(): void {
    this.quizStatus$.next(QuizStatus.OnGoing);
  }

  restartQuiz(): void {
    this.quizReport = {};
    this.index$.next(0);
    this.quizStatus$.next(this.quiz!.startScreen ? QuizStatus.Started : QuizStatus.OnGoing);
  }

  saveProgress(answerData: AnswerData): void {
    this.quizReport[`question_${answerData.questionIndex}`] = {
      title: answerData.question.title,
      type: answerData.question.type,
      answer: answerData.question.answers![answerData.answerIndex].displayText,
      value: answerData.question.answers![answerData.answerIndex].value
    };
  }
}
