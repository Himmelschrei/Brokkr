import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterLink, RouterOutlet, RouterModule } from '@angular/router';
import { AngularHelpComponent } from './angular-help/angular-help.component';
import { ProjectApplicationComponent } from './project-application/project-application.component';
import { FeedbackComponent } from './feedback/feedback.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    RouterLink,
    RouterOutlet,
    RouterModule,
    ProjectApplicationComponent,
    AngularHelpComponent,
    FeedbackComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Brokkr';
}

