import { Component } from '@angular/core';
import { ScrollService } from '../../../../services/scroll.service/scroll.service';

@Component({
  selector: 'projects-spotlight',
  imports: [],
  templateUrl: './projects-spotlight.html',
  styleUrl: './projects-spotlight.css'
})
export class ProjectsSpotlight {

  constructor(private scrollService: ScrollService) {}

  goToSection( section: string) : void {
    this.scrollService.scrollToFragment(section);
  }

}
