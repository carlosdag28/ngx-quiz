import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxQuizHeaderComponent } from './ngx-quiz-header.component';

describe('NgxQuizHeaderComponent', () => {
  let component: NgxQuizHeaderComponent;
  let fixture: ComponentFixture<NgxQuizHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxQuizHeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NgxQuizHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
