import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientDemographicsComponent } from './patient-demographics.component';
import { MatTableModule } from '@angular/material/table';

describe('PatientDemographicsComponent', () => {
  let component: PatientDemographicsComponent;
  let fixture: ComponentFixture<PatientDemographicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientDemographicsComponent, MatTableModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientDemographicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a valid form', () => {
    component.patientForm.setValue({
      fullName: {
        firstName: 'John',
        middleName: 'A',
        lastName: 'Doe'
      },
      dateOfBirth: '1990-01-01',
      gender: 'male',
      ssn: '123-45-6789',
      address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zipCode: '12345'
      },
      phoneNumber: '555-555-5555',
      emailAddress: 'john.doe@example.com',
      insurance: {
        provider: 'Provider',
        policyNumber: '123456'
      },
      emergencyContact: 'Jane Doe',
      raceEthnicity: 'Caucasian',
      primaryCarePhysician: 'Dr. Smith'
    });
    expect(component.patientForm.valid).toBeTruthy();
  });

  it('should display submitted data in the table', () => {
    component.patientForm.setValue({
      firstName: 'John',
      middleName: 'A',
      lastName: 'Doe',
      dob: '1990-01-01',
      age: 30,
      gender: 'male',
      contact: '5555555555',
      address: '123 Main St'
    });
    component.onSubmit();
    fixture.detectChanges();
    const tableRows = fixture.nativeElement.querySelectorAll('tr.mat-row');
    expect(tableRows.length).toBe(1);
    const rowCells = tableRows[0].querySelectorAll('td.mat-cell');
    expect(rowCells[0].textContent).toContain('John');
    expect(rowCells[1].textContent).toContain('Doe');
  });

  it('should delete a patient from the table', () => {
    component.patientForm.setValue({
        firstName: 'John',
        middleName: 'A',
        lastName: 'Doe',
        dob: '1990-01-01',
        age: 30,
        gender: 'male',
        contact: '5555555555',
        address: '123 Main St'
    });
    component.onSubmit();
    fixture.detectChanges();
    let tableRows = fixture.nativeElement.querySelectorAll('tr.mat-row');
    expect(tableRows.length).toBe(1);

    component.deletePatient(component.dataSource.data[0]);
    fixture.detectChanges();
    tableRows = fixture.nativeElement.querySelectorAll('tr.mat-row');
    expect(tableRows.length).toBe(0);
  });

  it('should edit a patient in the table', () => {
    component.patientForm.setValue({
        firstName: 'John',
        middleName: 'A',
        lastName: 'Doe',
        dob: '1990-01-01',
        age: 30,
        gender: 'male',
        contact: '5555555555',
        address: '123 Main St'
    });
    component.onSubmit();
    fixture.detectChanges();
    let tableRows = fixture.nativeElement.querySelectorAll('tr.mat-row');
    expect(tableRows.length).toBe(1);

    const patient = component.dataSource.data[0];
    component.editPatient(patient);
    fixture.detectChanges();
    tableRows = fixture.nativeElement.querySelectorAll('tr.mat-row');
    expect(tableRows.length).toBe(0);

    component.onSubmit();
    fixture.detectChanges();
    tableRows = fixture.nativeElement.querySelectorAll('tr.mat-row');
    expect(tableRows.length).toBe(1);
    const rowCells = tableRows[0].querySelectorAll('td.mat-cell');
    expect(rowCells[0].textContent).toContain('John');
    expect(rowCells[1].textContent).toContain('Doe');
  });
});
