import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectApplicationForm } from '../project-application-form';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-project-application',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './project-application.component.html',
  styleUrls: ['./project-application.component.css']
})
export class ProjectApplicationComponent {
  currentDate: string = '';

  constructor() {  }

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
  
  submitted = false;

  onSubmit() { this.submitted = true; }
}
