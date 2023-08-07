import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectApplicationForm } from '../project-application-form';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-project-application',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
  ],
  templateUrl: './project-application.component.html',
  styleUrls: ['./project-application.component.css']
})
export class ProjectApplicationComponent {
  currentDate: string = '';
  minDate: Date;
  minEndDate: Date

  constructor() {
    this.minDate = new Date(Date());
    this.minEndDate = new Date;
    console.log("This is the value of startDate: " + document.getElementById('startDate'));
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

  updateMinEndDate(startDate: Date) {
    if (startDate) {
      this.minEndDate = startDate;
    } else {
      this.minEndDate = new Date();
    }
  }
  
  submitted = false;

  onSubmit() { this.submitted = true; }
}
