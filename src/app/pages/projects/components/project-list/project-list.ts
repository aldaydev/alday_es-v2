import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Projects } from '../../../../types/projects.type';
import { ProjectCard } from '../../../../components/project-card/project-card';

@Component({
  selector: 'project-list',
  imports: [ProjectCard],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css'
})
export class ProjectList implements OnInit {

  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);

  isLoading: boolean = true;
  projectList? : Projects;
  order : string = 'ascendente';

  ngOnInit(): void {
    this.http
      .get<Projects>('assets/data/projects-data.json')
      .subscribe((data) => {
        this.projectList = data.sort((a, b) => b.year - a.year);
        this.isLoading = false;
        this.cdr.detectChanges();
      })
  }

  changeOrder() : void {
    if(this.projectList){
      if(this.order === 'ascendente'){
        this.projectList = this.projectList.sort((a,b) => a.year - b.year);
        this.order = 'descendente';
      }else{
        this.projectList = this.projectList.sort((a,b) => b.year - a.year);
        this.order = 'ascendente';
      }
    }
  }

}
