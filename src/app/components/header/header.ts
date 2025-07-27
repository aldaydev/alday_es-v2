
import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { Observable } from 'rxjs';
import { AsyncPipe, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule, AsyncPipe],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header implements OnInit, OnDestroy {

  menuOpen$!: Observable<boolean>;
  isCollapsed$!: Observable<boolean>;


  private resizeObserver = () => {
    if (isPlatformBrowser(this.platformId)) {
      const shouldCollpase = window.innerWidth < 800;
      this.menuService.setCollapsed(shouldCollpase);
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
    this.menuService.toggleMenu(); // Llama al método del servicio
  }


  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.resizeObserver(); // Ejecutar una vez al inicio
      window.addEventListener('resize', this.resizeObserver);
    }
  }


  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.resizeObserver);
    }
  }

}
