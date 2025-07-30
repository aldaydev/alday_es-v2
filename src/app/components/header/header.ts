
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { isPlatformBrowser } from '@angular/common';
import { NavIcons } from '../nav-icons/nav-icons';
import { Logo } from "../logo/logo";

@Component({
  selector: 'app-header',
  imports: [RouterModule, NavIcons, Logo],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit, OnDestroy {

  // this.menuService.menuStateSignal();
  // menuOpen$!: Observable<boolean>;
  // isCollapsed$!: Observable<boolean>;

  // isOnTop: boolean = true;

  isOnTop = signal<boolean>(true);

  bgColor = signal<string>('transparent');
  elementsColor = signal<string>('#ffffff');

  private resizeObserver = () => {
    if (isPlatformBrowser(this.platformId)) {
      const shouldCollpase = window.innerWidth < 1024;
      this.menuService.setCollapsed(shouldCollpase);
      this.menuService.closeMenu();
      this.initialColor();
    }
  }

  scrollObserver = () => {
    if (isPlatformBrowser(this.platformId)) {
      this.isOnTop.set(!(window.scrollY > 0));
      if(!this.isOnTop()){
        this.scrolledColor();
        this.menuService.closeMenu();
        console.log('is NOT on top');
      }else{
        this.initialColor();
        this.menuService.closeMenu();
        console.log('is on top');
      }
    }
  }


  constructor(
    public menuService: MenuService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  toggleMenu() {
    this.menuService.toggleMenu();
    if(this.menuService.menuStateSignal()){
      this.scrolledColor();
    }else if(this.isOnTop()){
      this.initialColor();
    }
  }

  closeMenu() {
    this.menuService.closeMenu();
    if(!this.isOnTop()){
      this.initialColor();
    }

  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.resizeObserver(); // Ejecutar una vez al inicio
      this.scrollObserver();
      window.addEventListener('resize', this.resizeObserver);
      window.addEventListener('scroll', this.scrollObserver);
    }
  }


  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.resizeObserver);
      window.removeEventListener('scroll', this.scrollObserver);
    }
  }

  scrolledColor() {
    this.elementsColor.set('#000000');
    this.bgColor.set('#ffffff');
  }

  initialColor() {
    this.bgColor.set('transparent');
    this.elementsColor.set('#ffffff');
  }

}
