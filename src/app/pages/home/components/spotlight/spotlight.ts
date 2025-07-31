import { Component } from '@angular/core';
import { AnimatedLogo } from '../../../../components/animated-logo/animated-logo';

@Component({
  selector: 'home-spotlight',
  imports: [AnimatedLogo],
  templateUrl: './spotlight.html',
  styleUrl: './spotlight.css'
})
export class Spotlight {

  scrollToFragment(fragment: string) {
  const el = document.getElementById(fragment);
  if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
