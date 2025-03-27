import { Observable } from "rxjs";
import { SampleDto } from "../dtos/sample.dto/sample.dto";

export interface ISampleService {
  getAllUsers(): Observable<SampleDto[]>;
}
