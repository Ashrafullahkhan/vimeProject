import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { VimeModule } from '@vime/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, VimeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
