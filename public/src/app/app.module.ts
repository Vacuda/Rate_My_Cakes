import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './task.service';
import { FormsModule } from '@angular/forms';
import { ShowComponent } from './show/show.component';
import { RateComponent } from './rate/rate.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    RateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppComponent, TaskService],
//   providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }


