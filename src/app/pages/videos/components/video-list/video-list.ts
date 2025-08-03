import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Projects } from '../../../../types/projects.type';
import { Videos } from '../../../../types/videos.type';
import { VideoIframe } from '../../../../components/video-iframe/video-iframe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'video-list',
  standalone: true,
  imports: [VideoIframe, FormsModule],
  templateUrl: './video-list.html',
  styleUrl: './video-list.css'
})
export class VideoList implements OnInit {

  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);

  isLoading: boolean = true;
  projectList : string[] = [];
  yearList : number[] = [2017, 2018, 2021, 2022, 2023, 2024];
  videoList! : Videos;
  filteredVideos! : Videos;

  selectedProject : string = 'Todos';
  selectedDate: number | string = 'Todos';

  filteringByProject : boolean = false;
  filteringByDate : boolean = false;

  ngOnInit(): void {
    this.getFormOptions();
    this.getVideoList();
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  getFormOptions () : void {
    this.http
      .get<Projects>('assets/data/projects-data.json')
      .subscribe((data) => {
        data.forEach((project) => {
          this.projectList.push(project.name);
          // this.yearList.push(project.year);
          this.cdr.detectChanges();
        })
      })
    
  }

  getVideoList() : void {
    this.http
      .get<Videos>('assets/data/videos-data.json')
      .subscribe((data) => {
        this.videoList = data.sort((a, b) => b.id - a.id);
        this.filteredVideos = this.videoList;
        this.cdr.detectChanges();
      })
    
  }

  sortByProject(event: Event) : void {
    if (!this.videoList || this.videoList.length === 0) {
      console.warn('Video list no cargada aún');
      return;
    }
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    if(selectedValue !== "Todos"){
      this.filteredVideos = this.videoList.filter((video) => video.project.toLowerCase().trim() === selectedValue.toLowerCase().trim());
      this.cdr.detectChanges();
    }else{
      this.filteredVideos = this.videoList;
      this.cdr.detectChanges();
    }

    const dateSelect = document.getElementById('date-select') as HTMLSelectElement;

    if(dateSelect.value !== 'Todos'){
      dateSelect.value = "Todos"
    }

  }

  sortByDate(event: Event) : void {
    if (!this.videoList || this.videoList.length === 0) {
      console.warn('Video list no cargada aún');
      return;
    }
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    if(selectedValue !== "Todos"){
      this.filteredVideos = this.videoList.filter((video) => {
        const videoYear = new Date(video.date).getFullYear();
        return videoYear === Number(selectedValue);
      });
      this.cdr.detectChanges();
    }else{
      this.filteredVideos = this.videoList;
      this.cdr.detectChanges();
    }

    const projectSelect = document.getElementById('project-select') as HTMLSelectElement;

    if(projectSelect.value !== 'Todos'){
      projectSelect.value = "Todos"
    }
  }

}
