import { TestBed } from '@angular/core/testing';

import { NgxQuizService } from './ngx-quiz.service';

describe('NgxQuizService', () => {
  let service: NgxQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
