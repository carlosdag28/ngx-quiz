import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxQuizProgressBarComponent } from './ngx-quiz-progress-bar.component';

describe('NgxQuizProgressBarComponent', () => {
  let component: NgxQuizProgressBarComponent;
  let fixture: ComponentFixture<NgxQuizProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxQuizProgressBarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NgxQuizProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
