import { TestBed } from '@angular/core/testing';

import { TrackRecordService } from './track-record.service';

describe('TrackRecordService', () => {
  let service: TrackRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
