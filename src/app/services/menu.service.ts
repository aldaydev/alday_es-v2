import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuState = new BehaviorSubject<boolean>(false);

  public menuState$ = this.menuState.asObservable();

  openMenu() {
    this.menuState.next(true);
  }

  closeMenu() {
    this.menuState.next(false);
  }

  toggleMenu() {
    const currentState = this.menuState.getValue();
    this.menuState.next(!currentState);
  }
}
