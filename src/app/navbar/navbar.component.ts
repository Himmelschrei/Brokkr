import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularHelpComponent } from '../angular-help/angular-help.component';
import { ProjectApplicationComponent } from '../project-application/project-application.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    AngularHelpComponent,
    ProjectApplicationComponent,
  ],
  templateUrl: 'navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private showLinks = false;

  constructor() {}

  handleClick() {
    const navLinks = document.getElementById('menu1');
    navLinks?.classList.toggle("hidden");
  }

  handleClick2() {
    const menu = document.getElementById("menutest");
    menu?.classList.toggle("hidden");
  }
}
