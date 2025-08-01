import { Component } from '@angular/core';
import { ScrollService } from '../../../../services/scroll.service/scroll.service';

@Component({
  selector: 'videos-spotlight',
  imports: [],
  templateUrl: './videos-spotlight.html',
  styleUrl: './videos-spotlight.css'
})
export class VideosSpotlight {

  constructor(private scrollService: ScrollService) {}

  goToSection(section: string){
    this.scrollService.scrollToFragment(section)
  }

}
