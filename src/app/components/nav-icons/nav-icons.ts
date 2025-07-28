import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-icons',
  imports: [],
  templateUrl: './nav-icons.html',
  styleUrl: './nav-icons.css'
})
export class NavIcons {

  @Input() color: string = '#ffffff';

}
