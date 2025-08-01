import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../types/projects.type';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css'
})
export class ProjectCard implements OnInit {
  @Input() project! : Project;

  linksArr : {key: string, value: string}[] = [];

  ngOnInit(): void {
    if(this.project.links){
      this.linksArr = Object.entries(this.project.links).map(([key, value]) => ({key, value}))
    }
  }


}
