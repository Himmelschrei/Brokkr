import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  currentDate: string = '';

  constructor() { }

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
}
