import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { OpenSourceComponent } from './open-source/open-source.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'experience',
    component: ExperienceComponent,
  },
  {
    path: 'open-source',
    component: OpenSourceComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
