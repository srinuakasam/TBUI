import { Routes } from '@angular/router';
import { PatientDemographicsComponent } from './components/patient/patient-demographics/patient-demographics.component';
import { PatientDashboardComponent } from './components/patient/patient-dashboard/patient-dashboard.component';
import { SampleComponent } from './components/sample/sample/sample.component';
import { TrackRecordComponent } from './components/track-record/track-record/track-record.component';
import { PractitionerDashboardComponent } from './components/practitioner-dashboard/practitioner-dashboard/practitioner-dashboard.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/patient-dashboard',
        pathMatch: 'full'
    },
    {
        path: 'patient-demographics',
        component: PatientDemographicsComponent     
    },
    {
        path: 'patient-dashboard',
        component: PatientDashboardComponent     
    },
    {
        path: 'sample',
        component: SampleComponent
    },
    {
        path: 'track-record',
        component: TrackRecordComponent
    },
    {
        path: 'pa-record',
        component: TrackRecordComponent
    },
    {
        path: 'practitioner-dashboard',
        component: PractitionerDashboardComponent
    }
];
