import { Component } from '@angular/core';
import { ProjectsSpotlight } from "./components/spotlight/projects-spotlight";

@Component({
  selector: 'app-projects',
  imports: [ProjectsSpotlight],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

}
