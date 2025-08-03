import { Component } from '@angular/core';
import { BioSpotlight } from './components/bio-spotlight/bio-spotlight';
import { BioInfo } from "./components/bio-info/bio-info";

@Component({
  selector: 'app-bio',
  imports: [BioSpotlight, BioInfo],
  templateUrl: './bio.html',
  styleUrl: './bio.css'
})
export class Bio {

}
