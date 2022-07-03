import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VimeModule } from '@vime/angular';
import { VideouploadComponent } from './videoupload/videoupload.component';

@NgModule({
  declarations: [AppComponent, VideouploadComponent],
  imports: [
    BrowserModule,
    VimeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
