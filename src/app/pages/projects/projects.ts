import { Component, OnInit } from '@angular/core';
import { ProjectsSpotlight } from './components/spotlight/projects-spotlight';
import { ProjectList } from './components/project-list/project-list';
import { SeoService } from '../../services/seo.services/seo-service';

@Component({
  selector: 'app-projects',
  imports: [ProjectsSpotlight, ProjectList],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateTags({
      title: 'Alday - Trabajos',
      description: 'Explora los trabajos musicales de Alday.',
      image: 'https://alday.es/assets/images/captures/projects_capture_1200px.webp',
      url: 'https://alday.es/',
      keywords: 'Alday, música, indie, artista',
    });
  }
}
