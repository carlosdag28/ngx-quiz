import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Quiz } from '../../shared/models/quiz';
import { Question } from '../../shared/models/question';
import { Report } from '../../shared/models/report';
import { NgxQuizService } from '../../ngx-quiz.service';

@Component({
  selector: 'ngx-quiz-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EndComponent implements OnInit {
  @Input() quiz: Quiz;

  @Output() ev_restart = new EventEmitter<void>();
  @Output() ev_emitReport = new EventEmitter<Report>();

  score: number = 0;
  totalStars = 5;
  achievedStars = 0;

  constructor(private quizService: NgxQuizService) {}

  ngOnInit(): void {
    this.score = this.getScore();
    this.achievedStars = this.getAchievedStars();

    if (this.quiz.emitReport) {
      this.ev_emitReport.emit(this.quizService.quizReport);
    }
  }

  restartQuiz(): void {
    this.ev_restart.emit();
  }

  private getScore(): number {
    return Object.entries(this.quizService.quizReport).reduce((acc: number, item: any) => acc + item[1].value, 0);
  }

  private getAchievedStars(): number {
    let highestScorePossible = 0;
    [...this.quiz.questions].forEach((question: Question) => {
      const answersValues = question.answers.map((v) => v.value);
      const maxQuestionScore = Math.max(...answersValues);
      highestScorePossible += maxQuestionScore;
    });
    return Math.ceil((this.totalStars * this.score) / highestScorePossible);
  }
}
