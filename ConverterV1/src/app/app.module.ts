import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {BuilderModule} from "@builder.io/angular";
import {RouterModule} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BarraAnnunciComponent } from './barra-annunci/barra-annunci.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    BarraAnnunciComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BuilderModule.forRoot('4b25bfd6421c498389fe5a29f2c51a3b  '),
    RouterModule.forRoot([
      {
        path: '**',
        component: LandingPageComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
