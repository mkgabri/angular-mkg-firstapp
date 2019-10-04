import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HelloWorld } from './primerComponente/primer.component';
import { ListVector } from './segundoComponente/segundo.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HelloWorld, ListVector ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
