import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  scrollToFragment(fragment: string) {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.getElementById(fragment);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }


}
