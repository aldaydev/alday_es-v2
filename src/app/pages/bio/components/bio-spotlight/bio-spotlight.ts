import { Component } from '@angular/core';
import { ScrollService } from '../../../../services/scroll.service/scroll.service';

@Component({
  selector: 'bio-spotlight',
  imports: [],
  templateUrl: './bio-spotlight.html',
  styleUrl: './bio-spotlight.css'
})
export class BioSpotlight {
  constructor(private scrollService: ScrollService) {}
  
    goToSection( section: string) : void {
      this.scrollService.scrollToFragment(section);
    }
}
