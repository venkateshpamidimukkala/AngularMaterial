import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { AdminComponent } from './admin/admin.component';
import { PackagesComponent } from './packages/packages.component';
import { ReportsComponent } from './reports/reports.component';
import { SchoolComponent } from './school/school.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CalenderViewComponent } from './calender-view/calender-view.component';
import { TrainingListComponent } from './training-list/training-list.component';
import { TrainingStatusComponent } from './training-status/training-status.component';
import { ScheduleTrainingComponent } from './schedule-training/schedule-training.component';

const routes: Routes = [
  {
    path:'admin',
    component:AdminComponent
  },
{
  path :'content',
  component:ContentComponent
},
{
  path:'deployment',
  component:DeploymentComponent
},
{
  path:'helpdesk',
  component:HelpdeskComponent
},
{
  path :'login',
  component:LoginComponent
},
{
  path:'packages',
  component:PackagesComponent
},
{
  path:'reports',
  component:ReportsComponent
},
{
  path:'school',
  component:SchoolComponent
},
{
  path:'trainings',
  component:TrainingsComponent
},
{ 
  path:'main-nav',
  component:MainNavComponent

},
{
  path:'calender-view',
  component:CalenderViewComponent
},
{
  path:'training-list',
  component:TrainingListComponent,
},
{
  path:'training-status',
  component:TrainingStatusComponent
},
{
  path:'schedule-training',
  component:ScheduleTrainingComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
