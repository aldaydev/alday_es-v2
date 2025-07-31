import { Component, inject, OnInit } from '@angular/core';
import { AnimatedLogo } from '../../components/animated-logo/animated-logo';
import projectsData from '../../../assets/data/projects-data.json';
import { HttpClient } from '@angular/common/http';
import { Project, Projects } from '../../types/projects.type';
import { RouterModule } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [AnimatedLogo, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);

  lastProject? : Project;

  isLoading: boolean = true;

  ngOnInit(): void {
    this.http.get<Projects>('assets/data/projects-data.json').subscribe(data => {
      const getNewerProject : Project = data.reduce((prev, curr) => {
        return (prev.year < curr.year) ? curr : prev;
      });
      console.log('LLAMADA PARA OBTENER ULTIMO PROYECTO');

      this.lastProject = getNewerProject;
      this.isLoading = false;
      this.cdr.detectChanges();
    })
    
  }

  scrollToFragment(fragment: string) {
  const el = document.getElementById(fragment);
  if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
