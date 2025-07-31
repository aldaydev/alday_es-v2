import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Videos } from '../../../../types/videos.type';
import { VideoIframe } from "../../../../components/video-iframe/video-iframe";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home-video',
  imports: [VideoIframe, RouterModule],
  templateUrl: './video.html',
  styleUrl: './video.css'
})
export class Video implements OnInit {

  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);
  highlightedVideoUrl?: string;

  ngOnInit(): void {
    this.http
      .get<Videos>('assets/data/videos-data.json')
      .subscribe((data) => {
        this.highlightedVideoUrl = data.filter(video => video.highlight)[0].url;
        this.cdr.detectChanges();
      })

  }

  // ngOnInit(): void {
  //     this.http
  //       .get<Projects>('assets/data/projects-data.json')
  //       .subscribe((data) => {
  //         const getNewerProject: Project = data.reduce((prev, curr) => {
  //           return prev.year < curr.year ? curr : prev;
  //         });
  //         console.log('LLAMADA PARA OBTENER ULTIMO PROYECTO');
  
  //         this.lastProject = getNewerProject;
  //         this.isLoading = false;
  //         this.cdr.detectChanges();
  //       });
  //   }

}
