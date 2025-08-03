import { Component } from '@angular/core';
import { BioSpotlight } from './components/bio-spotlight/bio-spotlight';
import { BioInfo } from "./components/bio-info/bio-info";
import { SeoService } from '../../services/seo.services/seo-service';

@Component({
  selector: 'app-bio',
  imports: [BioSpotlight, BioInfo],
  templateUrl: './bio.html',
  styleUrl: './bio.css'
})
export class Bio {
  constructor(private seo: SeoService) {}
  
    ngOnInit(): void {
      this.seo.updateTags({
        title: 'Alday - Biografía',
        description: 'Biografía musical de Alday',
        image: 'https://alday.es/assets/images/captures/bio_capture_1200px.webp',
        url: 'https://alday.es/',
        keywords: 'Alday, música, indie, artista',
      });
    }
}
