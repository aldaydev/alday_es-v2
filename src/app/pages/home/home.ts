import { Component, inject, OnInit } from '@angular/core';
import { AnimatedLogo } from '../../components/animated-logo/animated-logo';
import projectsData from '../../../assets/data/projects-data.json';
import { HttpClient } from '@angular/common/http';
import { Project, Projects } from '../../types/projects.type';

@Component({
  selector: 'app-home',
  imports: [AnimatedLogo],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  
  private http = inject(HttpClient);

  lastProject? : Project;

  ngOnInit(): void {
    this.http.get<Projects>('assets/data/projects-data.json').subscribe(data => {
      const getNewerProject : Project = data.reduce((prev, curr) => {
        return (prev.year < curr.year) ? curr : prev;
      });
      console.log(getNewerProject);
      this.lastProject = getNewerProject;
    })
    
  }

}
