import { Routes } from '@angular/router';
import { AngularHelpComponent } from './angular-help/angular-help.component';
import { ProjectApplicationComponent } from './project-application/project-application.component';

const routeConfig: Routes = [
    {
        path: 'angular-help/angular-help.component.html',
        component: AngularHelpComponent,
        title: 'Angular Help'
    },
    {
        path: 'project-application/project-application.component.html',
        component: ProjectApplicationComponent,
        title: 'Project Application'
    }
];

export default routeConfig;