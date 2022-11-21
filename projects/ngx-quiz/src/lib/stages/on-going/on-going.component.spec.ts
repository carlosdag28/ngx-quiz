import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnGoingComponent } from './on-going.component';

describe('StartedComponent', () => {
  let component: OnGoingComponent;
  let fixture: ComponentFixture<OnGoingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnGoingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OnGoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
