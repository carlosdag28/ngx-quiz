import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxQuizActionButtonComponent } from './ngx-quiz-action-button.component';

describe('NgxQuizActionButtonComponent', () => {
  let component: NgxQuizActionButtonComponent;
  let fixture: ComponentFixture<NgxQuizActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxQuizActionButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NgxQuizActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
