import { TestBed } from '@angular/core/testing';

import { ToDoDataService } from './todo-data.service';

describe('TotoDataService', () => {
  let service: ToDoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
