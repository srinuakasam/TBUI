import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackRecordComponent } from './track-record.component';

describe('TrackRecordComponent', () => {
  let component: TrackRecordComponent;
  let fixture: ComponentFixture<TrackRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
