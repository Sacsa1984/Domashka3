import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MYfileComponent } from './myfile/myfile.component';
import { MylinkComponent } from './mylink/mylink.component';

@NgModule({
  declarations: [
    AppComponent,
    MYfileComponent,
    MylinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
