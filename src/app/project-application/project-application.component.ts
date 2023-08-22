import { Component, OnInit } from '@angular/core';
import { CommonModule, FormatWidth } from '@angular/common';
import { ProjectApplicationForm } from '../project-application-form';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, DateAdapter } from '@angular/material/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-project-application',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  templateUrl: './project-application.component.html',
  styleUrls: ['./project-application.component.css']
})
export class ProjectApplicationComponent {
  projectApplicationForm = new FormGroup({
    projectTitle: new FormControl(''),
    applicantName: new FormControl(''),
    applicantEMail: new FormControl(''),
    department: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    projectDescription: new FormControl(''),
    capabilityPlanning: new FormControl(''),
    schedule: new FormControl(''),
    contactPerson: new FormControl(''),
    miscellaneous: new FormControl(''),
  })

  currentDate: string = '';
  minDate: Date;
  minEndDate: Date;
  startDate: Date | null;
  endDate: Date;
  

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('de');
    this.minDate = new Date(Date());
    this.minEndDate = new Date();
    this.startDate = null;
    this.endDate = new Date();
    console.log("This is the value of startDate: " + document.getElementById('startDate'));
    console.log("Start date: " + document.getElementById('startDate'));
    console.log("End date: " + document.getElementById('endDate'))
  }

  ngOnInit(): void {
    this.setCurrentDate();
  }

  setCurrentDate(): void {
    const currentDateInput = document.getElementById('currentDate') as HTMLInputElement;
    const now = new Date();
    const day = this.formatNumber(now.getDate());
    const month = this.formatNumber(now.getMonth() + 1); //Months are zero-based
    const year = now.getFullYear();

    this.currentDate = `${day}.${month}.${year}`;
  }

  private formatNumber(number: number): string {
    return number < 10 ? `0${number}` : `${number}`;
  }

  submitApplication() {
    this.printApplication(
      this.projectApplicationForm.value.projectTitle ?? '',
      this.projectApplicationForm.value.applicantName ?? '',
      this.projectApplicationForm.value.applicantEMail ?? '',
      this.projectApplicationForm.value.department ?? '',
      this.projectApplicationForm.value.startDate ?? '',
      this.projectApplicationForm.value.endDate ?? '',
      this.projectApplicationForm.value.projectDescription ?? '',
      this.projectApplicationForm.value.capabilityPlanning ?? '',
      this.projectApplicationForm.value.schedule ?? '', 
      this.projectApplicationForm.value.contactPerson ?? '', 
      this.projectApplicationForm.value.miscellaneous ?? '', 
    )
  }

  printApplication(projectTitle: string, applicantName: string, applicantEMail: string, department: string, startDate: string, endDate: string, projectDescription: string, capabilityPlanning: string, schedule: string, contactPerson: string, miscellaneous: string) {
    console.log("Project title: " + projectTitle);
    console.log("Projektgeber: " + applicantName + ". Projektgeber E-Mail: " + applicantEMail);
    console.log("Abteilung: " + department + ". Startdatum: " + startDate + ". Enddatum: " + endDate);
  }


  updateMinEndDate(startDate: Date) {
    if (startDate && this.minEndDate < startDate) {
      console.log("Opción 1");
      this.minEndDate = startDate;
    } else {
      console.log("Opción 2");
      this.minEndDate = new Date();
    }
    this.updateEndDate(startDate);
    console.log("Start date: " + startDate);
  }

  updateEndDate(startDate: Date) {
    // Update end date if start date is set after current end date
    if (startDate && startDate.getTime() > this.endDate.getTime()) {
      const newEndDate = new Date(startDate);
      newEndDate.setDate(newEndDate.getDate() + 1);
      this.endDate = newEndDate;
      console.log("End date: " + this.endDate);
      console.log("New end date: " + newEndDate);
    }
  }
  
  submitted = false;

  onSubmit() { this.submitted = true; }
}
