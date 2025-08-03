import { Component, OnInit } from '@angular/core';
import { VideosSpotlight } from "./components/videos-spotlight/videos-spotlight";
import { VideoList } from "./components/video-list/video-list";
import { SeoService } from '../../services/seo.services/seo-service';

@Component({
  selector: 'app-videos',
  imports: [VideosSpotlight, VideoList],
  templateUrl: './videos.html',
  styleUrl: './videos.css'
})
export class Videos implements OnInit {
  constructor(private seo: SeoService) {}
  
    ngOnInit(): void {
      this.seo.updateTags({
        title: 'Alday - Vídeos',
        description: 'Videoclips y Lyric videos de Alday',
        image: 'https://alday.es/assets/images/captures/videos_capture_1200px.webp',
        url: 'https://alday.es/',
        keywords: 'Alday, videoclips, lyric videos, música, indie, artista',
      });
    }
}
