import { Component, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { PatientService } from '../../../services/patient.service/patient.service';
import { PatientDTO } from '../../../models/dtos/patient.dto';
import { MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-patient-demographics',
  templateUrl: './patient-demographics.component.html',
  styleUrls: ['./patient-demographics.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule
  ]
})
export class PatientDemographicsComponent {
  title = 'Patient Demographics';
  patientForm: FormGroup;
  displayedColumns: string[] = ['firstName', 'lastName', 'dob', 'age', 'gender', 'contact', 'address', 'actions'];
  dataSource = new MatTableDataSource<PatientDTO>([]);

  constructor(private fb: FormBuilder, private patientService: PatientService, private cdr: ChangeDetectorRef) {
    this.patientForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      gender: ['', Validators.required],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['']
    });
  }

  onSubmit() {
    if (this.patientForm.valid) {
      const patientData: PatientDTO = this.patientForm.value;
      patientData.dob = new Date(patientData.dob);
      this.patientService.addPatient(patientData);
      this.dataSource.data = [...this.dataSource.data, patientData];
      console.log('Patient Data:', patientData);
    }
  }

  deletePatient(patient: PatientDTO) {
    this.dataSource.data = this.dataSource.data.filter(p => p !== patient);
    this.patientService.deletePatient(patient);
    this.cdr.detectChanges();
  }

  editPatient(patient: PatientDTO) {
    this.patientForm.setValue({
        firstName: patient.firstName,
        middleName: patient.middleName,
        lastName: patient.lastName,
        dob: patient.dob,
        age: patient.age,
        gender: patient.gender,
        contact: patient.contact,
        address: patient.address
    });
    this.deletePatient(patient);
  }
}
