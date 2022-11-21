import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxQuizAnswerCardComponent } from './ngx-quiz-answer-card.component';

describe('NgxQuizAnswerCardComponent', () => {
  let component: NgxQuizAnswerCardComponent;
  let fixture: ComponentFixture<NgxQuizAnswerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxQuizAnswerCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NgxQuizAnswerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
