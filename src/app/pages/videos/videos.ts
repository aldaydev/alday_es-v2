import { Component } from '@angular/core';
import { VideosSpotlight } from "./components/videos-spotlight/videos-spotlight";
import { VideoList } from "./components/video-list/video-list";

@Component({
  selector: 'app-videos',
  imports: [VideosSpotlight, VideoList],
  templateUrl: './videos.html',
  styleUrl: './videos.css'
})
export class Videos {

}
