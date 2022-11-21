import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxQuizComponent } from './ngx-quiz.component';

describe('NgxQuizLibComponent', () => {
  let component: NgxQuizComponent;
  let fixture: ComponentFixture<NgxQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxQuizComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NgxQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
