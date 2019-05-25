import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { CodeComponent } from './open-source/code/code.component';
import { LibrariesComponent } from './open-source/libraries/libraries.component';
import { OpenSourceComponent } from './open-source/open-source.component';

const routes: Routes = [
  { path: '', redirectTo: 'experience', pathMatch: 'full' },
  {
    path: 'experience',
    component: ExperienceComponent,
    data: {
      animation: 'Experience'
    }
  },
  {
    path: 'open-source',
    component: OpenSourceComponent,
    data: {
      animation: 'OpenSource'
    },
    children: [
      { path: '', redirectTo: 'libraries', pathMatch: 'full' },
      {
        path: 'libraries',
        component: LibrariesComponent,
      },
      {
        path: 'code',
        component: CodeComponent,
      }
    ]
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      animation: 'About'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
