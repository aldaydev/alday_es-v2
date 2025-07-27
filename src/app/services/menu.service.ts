import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuState = new BehaviorSubject<boolean>(false);
  public menuState$ = this.menuState.asObservable();

  private isCollapsed = new BehaviorSubject<boolean>(true);
  public isCollapsed$ = this.isCollapsed.asObservable();

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

  setCollapsed(collapseState: boolean) {
    this.isCollapsed.next(collapseState)
  }
}
