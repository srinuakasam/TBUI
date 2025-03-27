import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PatientDemographicsComponent } from './components/patient/patient-demographics/patient-demographics.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PatientDashboardComponent } from './components/patient/patient-dashboard/patient-dashboard.component';
import { appRoutes } from './app.routes';
import { DatePipe } from '@angular/common';
import { SampleComponent } from './components/sample/sample/sample.component';
import { MatCardModule } from '@angular/material/card';
import { SampleService } from './services/sample.service/sample.service';
import { MatTableModule } from '@angular/material/table';
import { TrackRecordComponent } from './components/track-record/track-record/track-record.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientDemographicsComponent,
    PatientDashboardComponent,
    NavBarComponent, 
    SampleComponent,
    TrackRecordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes),
    MatTableModule
  ],
  providers: [DatePipe, SampleService, DataService],
  bootstrap: [AppComponent],
  exports: [
    NavBarComponent
  ]
})
export class AppModule { }
