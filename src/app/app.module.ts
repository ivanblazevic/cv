import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

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
import { BoxComponent } from './shared/components/box/box.component';
import { SocialComponent } from './about/social/social.component';

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
    CodeComponent,
    BoxComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
