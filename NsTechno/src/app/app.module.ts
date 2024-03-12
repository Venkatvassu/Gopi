import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cont1Component } from './cont1/cont1.component';
import { Cont2Component } from './cont2/cont2.component';
import { Cont3Component } from './cont3/cont3.component';
import { Cont4Component } from './cont4/cont4.component';
import { Cont5Component } from './cont5/cont5.component';
import { Cont6Component } from './cont6/cont6.component';
import { Cont7Component } from './cont7/cont7.component';
import { Cont8Component } from './cont8/cont8.component';
import { Cont10Component } from './cont10/cont10.component';
import { Cont9Component } from './cont9/cont9.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    Cont1Component,
    Cont2Component,
    Cont3Component,
    Cont4Component,
    Cont5Component,
    Cont6Component,
    Cont7Component,
    Cont8Component,
    Cont10Component,
    Cont9Component,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
