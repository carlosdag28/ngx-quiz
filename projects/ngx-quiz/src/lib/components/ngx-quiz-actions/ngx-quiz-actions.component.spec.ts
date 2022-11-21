import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxQuizActionsComponent } from './ngx-quiz-actions.component';

describe('NgxQuizActionsComponent', () => {
  let component: NgxQuizActionsComponent;
  let fixture: ComponentFixture<NgxQuizActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxQuizActionsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NgxQuizActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
