import { Component, Input, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Quiz, QuizStatus } from './shared/models/quiz';
import { AnswerData } from './shared/models/answer';
import { NgxQuizService } from './ngx-quiz.service';
import { AbstractQuizEmitterDirective } from './shared/directives/abstract-quiz-emitter.directive';
import { Report } from './shared/models/report';

@Component({
  selector: 'ngx-quiz',
  templateUrl: 'ngx-quiz.component.html',
  styleUrls: ['ngx-quiz.component.scss'],
  providers: [NgxQuizService]
})
export class NgxQuizComponent extends AbstractQuizEmitterDirective implements OnInit {
  @Input() quiz: Quiz;

  quizStatus$: Observable<QuizStatus>;
  index$: Observable<number>;

  // Status
  started = QuizStatus.Started;
  ongoing = QuizStatus.OnGoing;
  finished = QuizStatus.Finished;

  constructor(private quizService: NgxQuizService) {
    super();
  }

  ngOnInit(): void {
    this.quizStatus$ = this.quizService.quizStatus$.asObservable();
    this.index$ = this.quizService.index$.asObservable();
    this.quizService.initQuiz(this.quiz);
    super.quizReady();
  }

  startQuiz(): void {
    this.quizService.startQuiz();
    super.quizStarted();
  }

  restartQuiz(): void {
    this.quizService.restartQuiz();
    super.quizRestarted();
  }

  finishQuiz(report: Report): void {
    super.quizFinished(report);
  }

  previousQuestion(): void {
    this.quizService.previousQuestion();
    super.questionBack();
  }

  nextQuestion(): void {
    this.quizService.nextQuestion();
    super.questionNext();
  }

  answerClicked(answerData: AnswerData): void {
    this.quizService.answerQuestion(answerData);
    super.questionAnswered();
  }
}
