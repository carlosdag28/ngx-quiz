import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { Quiz } from '../../shared/models/quiz';
import { Question } from '../../shared/models/question';

@Component({
  selector: 'ngx-quiz-on-going',
  templateUrl: './on-going.component.html',
  styleUrls: ['./on-going.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnGoingComponent implements OnInit, OnChanges {
  @Input() quiz: Quiz;
  @Input() index: number;

  @Output() ev_answerClicked = new EventEmitter<any>();
  @Output() ev_prevQuestion = new EventEmitter<void>();
  @Output() ev_nextQuestion = new EventEmitter<void>();

  questionHasBeenAnswered = false;
  answerClickedIndex: number | null;
  question: Question;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges | any): void {
    this.question = this.quiz.questions[changes.index?.currentValue];
    this.questionHasBeenAnswered = false;
    this.answerClickedIndex = null;
  }

  answerClicked(question: Question, answerIndex: number): void {
    this.questionHasBeenAnswered = true;
    this.answerClickedIndex = answerIndex;
    this.ev_answerClicked.emit({ question, questionIndex: this.index, answerIndex });
  }

  previousQuestion(): void {
    this.ev_prevQuestion.emit();
  }

  nextQuestion(): void {
    this.answerClickedIndex = null;
    this.ev_nextQuestion.emit();
  }
}
