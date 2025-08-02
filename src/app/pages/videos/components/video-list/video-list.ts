import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Projects } from '../../../../types/projects.type';
import { Videos } from '../../../../types/videos.type';
import { VideoIframe } from '../../../../components/video-iframe/video-iframe';

@Component({
  selector: 'video-list',
  imports: [VideoIframe],
  templateUrl: './video-list.html',
  styleUrl: './video-list.css'
})
export class VideoList implements OnInit {

  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);

  isLoading: boolean = true;
  projectList : string[] = [];
  yearList : number[] = [];
  videoList! : Videos;
  filteredVideos! : Videos;

  ngOnInit(): void {
    this.getFormOptions();
    this.getVideoList();
  }

  getFormOptions () : void {
    this.http
      .get<Projects>('assets/data/projects-data.json')
      .subscribe((data) => {
        data.forEach((project) => {
          this.projectList.push(project.name);
          this.yearList.push(project.year);
        })
      })
    this.cdr.detectChanges();
  }

  getVideoList() : void {
    this.http
      .get<Videos>('assets/data/videos-data.json')
      .subscribe((data) => {
        this.videoList = data.sort((a, b) => b.id - a.id);
        this.filteredVideos = this.videoList;
      })
    this.cdr.detectChanges();
  }

  sortByProject(event: Event) : void {
    if (!this.videoList || this.videoList.length === 0) {
      console.warn('Video list no cargada aún');
      return;
    }
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    console.log('Selected:', selectedValue);
    console.log('Todos los project de los vídeos:', this.videoList.map(v => v.project));

    if(selectedValue !== "Todos"){
      this.filteredVideos = this.videoList.filter((video) => video.project.toLowerCase().trim() === selectedValue.toLowerCase().trim());
      this.cdr.detectChanges();
    }else{
      this.filteredVideos = this.videoList;
      this.cdr.detectChanges();
    }
    
    

  }

}
