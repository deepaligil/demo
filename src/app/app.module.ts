import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { JoinnowComponent } from './joinnow/joinnow.component';
import { DetailService } from './detail.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    AboutusComponent,
    JoinnowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
