import { NgModule, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {
    path:'profile',component:ProfileComponent,

  },
  {
    path:'settings',component:SettingsComponent,

  },
  {
    path:'**',component:PageNotFoundComponent,

  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
