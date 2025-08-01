import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scrollToFragment(fragment: string) {
  const el = document.getElementById(fragment);
  if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
}
