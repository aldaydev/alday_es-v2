import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-iframe',
  standalone: true,
  imports: [],
  templateUrl: './video-iframe.html',
  styleUrl: './video-iframe.css'
})
export class VideoIframe implements OnInit {
  @Input() videoUrl!: string;
  safeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}


  ngOnInit(){
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }
}
