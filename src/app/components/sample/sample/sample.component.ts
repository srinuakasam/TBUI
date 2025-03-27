import { Component, OnInit } from '@angular/core';
import { SampleService } from '../../../services/sample.service/sample.service';
import { SampleDto } from '../../../models/dtos/sample.dto/sample.dto';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sample',
  imports: [MatTableModule, MatCardModule, CommonModule],
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
  standalone: true,
  providers:[SampleService]
})
export class SampleComponent implements OnInit {
  dataSource = new MatTableDataSource<SampleDto>([]);
  displayedColumns: string[] = ['id', 'name', 'username', 'address', 'phone', 'website', 'company', 'details', 'userInfo'];

  constructor(private sampleService: SampleService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers(): void {
      this.sampleService.getAllUsers().subscribe((data: SampleDto[]) => {
        console.log(data); // Log the data to the console
        this.dataSource.data = data;
      });
  }
}
