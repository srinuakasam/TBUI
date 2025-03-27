import { Injectable } from '@angular/core';
import { PatientDTO } from '../../models/dtos/patient.dto';
import { IPatientService } from '../../models/interfaces/patient.interface';

@Injectable({
  providedIn: 'root'
})
export class PatientService implements IPatientService {
  private patients: PatientDTO[] = [];

  addPatient(patient: PatientDTO): void {
    this.patients.push(patient);
  }

  getPatients(): PatientDTO[] {
    return this.patients;
  }

  deletePatient(patient: PatientDTO): void {
    this.patients = this.patients.filter(p => p !== patient);
  }
}
