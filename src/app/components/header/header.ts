import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, AsyncPipe],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {

  menuOpen$!: Observable<boolean>;

  constructor(private menuService: MenuService) {
    this.menuOpen$ = this.menuService.menuState$;
  }

  toggleMenu() {
    this.menuService.toggleMenu(); // Llama al método del servicio
  }

}
