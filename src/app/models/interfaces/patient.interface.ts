import { PatientDTO } from '../dtos/patient.dto';

export interface IPatientService {
  addPatient(patient: PatientDTO): void;
  getPatients(): PatientDTO[];
}
