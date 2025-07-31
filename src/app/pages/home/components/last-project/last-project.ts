import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Project, Projects } from '../../../../types/projects.type';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home-last-project',
  imports: [RouterModule],
  templateUrl: './last-project.html',
  styleUrl: './last-project.css',
})
export class LastProject implements OnInit {
  private http = inject(HttpClient);
  private cdr = inject(ChangeDetectorRef);

  lastProject?: Project;

  isLoading: boolean = true;

  ngOnInit(): void {
    this.http
      .get<Projects>('assets/data/projects-data.json')
      .subscribe((data) => {
        const getNewerProject: Project = data.reduce((prev, curr) => {
          return prev.year < curr.year ? curr : prev;
        });
        console.log('LLAMADA PARA OBTENER ULTIMO PROYECTO');

        this.lastProject = getNewerProject;
        this.isLoading = false;
        this.cdr.detectChanges();
      });
  }
}
