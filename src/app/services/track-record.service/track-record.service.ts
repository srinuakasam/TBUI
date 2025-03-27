import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackRecordDto } from '../../models/dtos/track-record.dto/track-record.dto';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrackRecordService {

  constructor(private httpClient: HttpClient) { }
  private jsonUrl = 'https://localhost:44390/api/patients';
  getAllTrackRecords(): Observable<TrackRecordDto[]> {
    return this.httpClient.get<TrackRecordDto[]>(this.jsonUrl).pipe(
      map((data: TrackRecordDto[]) => {
        return data.map(item => new TrackRecordDto(
          item.id,
          item.firstName,
          item.lastName,
          item.dateOfBirth,
          item.age,
          item.gender,
          item.medicalRecordNumber
        ));
      })
    );
  }
}
