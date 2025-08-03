import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Spotlight } from './components/spotlight/spotlight';
import { LastProject } from './components/last-project/last-project';
import { Video } from './components/video/video';
import { SeoService } from '../../services/seo.services/seo-service';

@Component({
  selector: 'app-home',
  imports: [RouterModule, Spotlight, LastProject, Video],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.updateTags({
      title: 'Alday - Música',
      description: 'Explora el universo musical de Alday: escucha sus canciones y entérate de las últimas novedades.',
      image: 'https://alday.es/assets/images/captures/home_capture_1200px.webp',
      url: 'https://alday.es/',
      keywords: 'Alday, música, indie, artista',
    });
  }
}
