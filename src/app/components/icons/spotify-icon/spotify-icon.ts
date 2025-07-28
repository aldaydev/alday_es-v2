import { Component, Input } from '@angular/core';

@Component({
  selector: 'spotify-icon',
  imports: [],
  templateUrl: './spotify-icon.html',
  styleUrl: './spotify-icon.css'
})
export class SpotifyIcon {
  @Input() color: string = 'white';
}
