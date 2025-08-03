import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoData {
  title: string;
  description: string;
  image?: string;
  url?: string;
  keywords?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(private titleService: Title, private metaService: Meta) {}

  updateTags({ title, description, image, url, keywords }: SeoData): void {
    this.titleService.setTitle(title);

    if (keywords) {
      this.metaService.updateTag({ name: 'keywords', content: keywords });
    }

    // Standard meta
    this.metaService.updateTag({ name: 'description', content: description });

    // Open Graph
    this.metaService.updateTag({ property: 'og:title', content: title });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'og:type', content: 'website' });

    if (image) {
      this.metaService.updateTag({ property: 'og:image', content: image });
      this.metaService.updateTag({ name: 'twitter:image', content: image });
    }

    if (url) {
      this.metaService.updateTag({ property: 'og:url', content: url });
    }

    // Twitter
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: title });
    this.metaService.updateTag({ name: 'twitter:description', content: description });
  }
}
