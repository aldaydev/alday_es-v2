import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Videos } from './pages/videos/videos';
import { Bio } from './pages/bio/bio';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'trabajos', component: Projects},
    {path: 'videos', component: Videos},
    {path: 'bio', component: Bio},
    {path: '**', component: NotFound}
];
