import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule} from 'ngx-bootstrap/carousel';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {FoodService} from './food.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RouterModule ,Routes} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';


const app_routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  
  {
    path:'home',
    component: HomeComponent
  },
  {
    path: 'Foodiespace',
    component: AboutComponent
  },
  {
    path:'contact',
    component: ContactComponent
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(app_routes),
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  

    BsDropdownModule.forRoot(),
    CarouselModule.forRoot()      // For carousel
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
