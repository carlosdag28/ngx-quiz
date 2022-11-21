import { Directive, EventEmitter, Output } from '@angular/core';
import { Report } from '../models/report';

@Directive()
export abstract class AbstractQuizEmitterDirective {
  @Output() ngx_quiz_ready = new EventEmitter<any>();
  @Output() ngx_quiz_started = new EventEmitter<any>();
  @Output() ngx_quiz_restarted = new EventEmitter<any>();
  @Output() ngx_quiz_finished = new EventEmitter<any>();

  @Output() ngx_quiz_prevQuestion = new EventEmitter<any>();
  @Output() ngx_quiz_nextQuestion = new EventEmitter<any>();
  @Output() ngx_quiz_questionAnswered = new EventEmitter<any>();
  @Output() ngx_quiz_report = new EventEmitter<Report>();

  protected quizReady(): void {
    this.ngx_quiz_ready.emit();
  }

  protected quizStarted(): void {
    this.ngx_quiz_started.emit();
  }

  protected quizRestarted(): void {
    this.ngx_quiz_restarted.emit();
  }

  protected quizFinished(report: any): void {
    this.ngx_quiz_finished.emit();
    this.ngx_quiz_report.emit(report);
  }

  protected questionBack(): void {
    this.ngx_quiz_prevQuestion.emit();
  }

  protected questionNext(): void {
    this.ngx_quiz_nextQuestion.emit();
  }

  protected questionAnswered(): void {
    this.ngx_quiz_questionAnswered.emit();
  }
}
