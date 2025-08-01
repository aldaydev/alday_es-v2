import { Component } from '@angular/core';
import { ProjectsSpotlight } from "./components/spotlight/projects-spotlight";
import { ProjectList } from "./components/project-list/project-list";

@Component({
  selector: 'app-projects',
  imports: [ProjectsSpotlight, ProjectList],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

}
