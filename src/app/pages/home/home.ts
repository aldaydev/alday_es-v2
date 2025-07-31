import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project, Projects } from '../../types/projects.type';
import { RouterModule } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { Spotlight } from './components/spotlight/spotlight';
import { LastProject } from './components/last-project/last-project';
import { Video } from "./components/video/video";

@Component({
  selector: 'app-home',
  imports: [RouterModule, Spotlight, LastProject, Video],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  
}
