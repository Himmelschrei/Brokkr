import { Component } from '@angular/core';
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
  model = new ProjectApplicationForm('Test Application', 
  new Date('2023-07-27'), 
  'Carlos Pineda', 
  'Softwareentwicklung', 
  new Date('01.01.2024'), 
  new Date('01.02.2024'), 
  'This is just a test description for the project.', 
  'Capability test description', 
  'Schedule test description', 
  'Contact Person', 
  'Miscellanous string'
  );

  submitted = false;

  onSubmit() { this.submitted = true; }
}
