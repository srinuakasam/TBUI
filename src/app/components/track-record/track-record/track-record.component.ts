import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { TrackRecordService } from '../../../services/track-record.service/track-record.service';
import { TrackRecordDto } from '../../../models/dtos/track-record.dto/track-record.dto';

@Component({
  selector: 'app-track-record',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatPaginatorModule],
  templateUrl: './track-record.component.html',
  styleUrls: ['./track-record.component.css'],
  providers: [TrackRecordService]
})
export class TrackRecordComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'dateOfBirth', 'age', 'gender', 'medicalRecordNumber'];
  dataSource: MatTableDataSource<TrackRecordDto> = new MatTableDataSource<TrackRecordDto>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private trackRecordService: TrackRecordService) {}

  ngOnInit(): void {
    this.loadTrackRecords();
  }

  loadTrackRecords(): void {
    this.trackRecordService.getAllTrackRecords().subscribe((data: TrackRecordDto[]) => {
      console.log(data);
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }
}
