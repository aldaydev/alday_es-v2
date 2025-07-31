import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project, Projects } from '../../types/projects.type';
import { RouterModule } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { Spotlight } from './components/spotlight/spotlight';
import { LastProject } from './components/last-project/last-project';

@Component({
  selector: 'app-home',
  imports: [RouterModule, Spotlight, LastProject],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  
}
