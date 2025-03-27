import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SampleDto } from '../../models/dtos/sample.dto/sample.dto';
import { ISampleService } from '../../models/interfaces/sample.interface';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<SampleDto[]> {
    return this.http.get<SampleDto[]>(this.apiUrl).pipe(
      map(data => data.map(item => new SampleDto(
        item.id,
        item.name,
        item.username,
        item.address,
        item.phone,
        item.website,
        item.company
      )))
    );
  }
}
