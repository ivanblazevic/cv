import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExperienceComponent } from './experience/experience.component';
import { OpenSourceComponent } from './open-source/open-source.component';
import { AboutComponent } from './about/about.component';
import { ExperienceItemComponent } from './experience/experience-item/experience-item.component';
import { OpenSourceItemComponent } from './open-source/open-source-item/open-source-item.component';
import { LibrariesComponent } from './open-source/libraries/libraries.component';
import { CodeComponent } from './open-source/code/code.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExperienceComponent,
    OpenSourceComponent,
    AboutComponent,
    ExperienceItemComponent,
    OpenSourceItemComponent,
    LibrariesComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
