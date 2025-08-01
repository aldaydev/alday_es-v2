import { Component } from '@angular/core';
import { AnimatedLogo } from '../../../../components/animated-logo/animated-logo';
import { ScrollService } from '../../../../services/scroll.service/scroll.service';

@Component({
  selector: 'home-spotlight',
  imports: [AnimatedLogo],
  templateUrl: './spotlight.html',
  styleUrl: './spotlight.css'
})
export class Spotlight {

  constructor(private scrollService: ScrollService){}

  goToSection(section : string): void {
    this.scrollService.scrollToFragment(section);
  }

  // scrollToFragment(fragment: string) {
  // const el = document.getElementById(fragment);
  // if (el) {
  //     el.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }

}
