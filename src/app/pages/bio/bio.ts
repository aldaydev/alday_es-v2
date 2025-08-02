import { Component } from '@angular/core';
import { BioSpotlight } from './components/bio-spotlight/bio-spotlight';

@Component({
  selector: 'app-bio',
  imports: [BioSpotlight],
  templateUrl: './bio.html',
  styleUrl: './bio.css'
})
export class Bio {

}
