import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SchoolComponent } from './school/school.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { AdminComponent } from './admin/admin.component';
import { ReportsComponent } from './reports/reports.component';
import { PackagesComponent } from './packages/packages.component';
import { ContentComponent } from './content/content.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DataService } from './data.service';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { CustomPipePipe } from './custom-pipe.pipe';
import "hammerjs";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatStepperModule} from '@angular/material/stepper';
import * as jsPDF from 'jspdf';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CalenderViewComponent } from './calender-view/calender-view.component';
import { TrainingListComponent } from './training-list/training-list.component';
import { ScheduleTrainingComponent } from './schedule-training/schedule-training.component';
import { TrainingStatusComponent } from './training-status/training-status.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SchoolComponent,
    TrainingsComponent,
    HelpdeskComponent,
    AdminComponent,
    ReportsComponent,
    PackagesComponent,
    ContentComponent,
    DeploymentComponent,
    MainNavComponent,
    CustomPipePipe,
    CalenderViewComponent,
    TrainingListComponent,
    ScheduleTrainingComponent,
    TrainingStatusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    LayoutModule,MatSelectModule,
    MatToolbarModule,MatFormFieldModule,
    MatButtonModule,MatStepperModule,MatDatepickerModule,
    MatSidenavModule,MatPaginatorModule,MatProgressBarModule,
    MatIconModule,MatIconModule,MatMenuModule,MatInputModule,
    MatListModule,MatCardModule,MatTableModule,MatFormFieldModule
    
  ],          
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
