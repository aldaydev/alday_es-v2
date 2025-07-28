
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { Observable } from 'rxjs';
import { AsyncPipe, isPlatformBrowser } from '@angular/common';
import { NavIcons } from '../nav-icons/nav-icons';
import { Logo } from "../logo/logo";

@Component({
  selector: 'app-header',
  imports: [RouterModule, AsyncPipe, NavIcons, Logo],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header implements OnInit, OnDestroy {

  menuOpen$!: Observable<boolean>;
  isCollapsed$!: Observable<boolean>;

  bgColor: string = 'transparent';
  elementsColor: string = '#ffffffff';

  private resizeObserver = () => {
    if (isPlatformBrowser(this.platformId)) {
      const shouldCollpase = window.innerWidth < 1024;
      this.menuService.setCollapsed(shouldCollpase);
      this.menuService.closeMenu();
    }
  }

  private scrollObserver = () => {
    if (isPlatformBrowser(this.platformId)) {
      const shouldChange = window.scrollY > 0;
      if(shouldChange){
        this.menuService.closeMenu();
        if(this.menuOpen$){
          this.scrolledColor();
        }
      }else{
        this.menuService.closeMenu();
        this.initialColor();
      }
    }
  }


  constructor(
    private menuService: MenuService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.menuOpen$ = this.menuService.menuState$;
    this.isCollapsed$ = this.menuService.isCollapsed$;
  }

  toggleMenu() {
    this.menuService.toggleMenu();
    if(this.menuOpen$){
      this.scrolledColor();
    }
  }

  closeMenu() {
    this.menuService.closeMenu();
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
    }
  }

  scrolledColor() {
    this.elementsColor = '#000000';
    this.bgColor = '#ffffff';
  }

  initialColor() {
    this.bgColor = 'transparent';
    this.elementsColor = '#ffffff';
  }

}
