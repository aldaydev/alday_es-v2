import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Projects } from '../../../../types/projects.type';
import { Videos } from '../../../../types/videos.type';

@Component({
  selector: 'video-list',
  imports: [],
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
  }

  getVideoList() : void {
    this.http
      .get<Videos>('assets/data/videos-data.json')
      .subscribe((data) => {
        this.videoList = data.sort((a, b) => b.id - a.id);
      })
  }

}
