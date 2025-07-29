import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuState = signal<boolean>(false);
  public menuStateSignal = this.menuState;

  private isCollapsed = signal<boolean>(true);
  public isCollapsedSignal = this.isCollapsed;

  openMenu() {
    this.menuState.set(true);
  }

  closeMenu() {
    this.menuState.set(false);
  }

  toggleMenu() {
    this.menuState.update((current) => !current);
  }

  setCollapsed(collapseState: boolean) {
    this.isCollapsed.set(collapseState);
  }
}
