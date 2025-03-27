import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PractitionerDashboardComponent } from './practitioner-dashboard.component';

describe('PractitionerDashboardComponent', () => {
  let component: PractitionerDashboardComponent;
  let fixture: ComponentFixture<PractitionerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PractitionerDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PractitionerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
