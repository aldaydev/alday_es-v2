import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  inject,
  Input,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-iframe',
  standalone: true,
  imports: [],
  templateUrl: './video-iframe.html',
  styleUrl: './video-iframe.css',
})
export class VideoIframe implements OnInit {
  @Input() videoUrl!: string;
  safeUrl!: SafeResourceUrl;
  private cdr = inject(ChangeDetectorRef);
  loading = true;
  visible = false;
  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef, 
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log('VISIBLE', this.videoUrl);
        this.visible = true;
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.videoUrl
        );
        this.cdr.detectChanges();
        this.observer?.disconnect();
      }
    });
    this.observer.observe(this.el.nativeElement);
    }
    
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  onLoad() {
    console.log('IFRAME LOADED', this.videoUrl);
    this.loading = false;
  }
}
