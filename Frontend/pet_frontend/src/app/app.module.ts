import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PetDetailComponent } from './components/pet-detail/pet-detail.component';
import { LikesComponent } from './components/likes/likes.component';
import { ActivityComponent } from './components/activity/activity.component';
import { PlaceActivityComponent } from './components/place-activity/place-activity.component';
import { CategoryComponent } from './components/category/category.component';
import { DashboardComponent } from './admin_components/dashboard/dashboard.component';
import { AddPetComponent } from './admin_components/add-pet/add-pet.component';
import { AdminpetsComponent } from './admin_components/adminpets/adminpets.component';
import { PetEditComponent } from './admin_components/pet-edit/pet-edit.component';
import { NewcategoryComponent } from './admin_components/newcategory/newcategory.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    PetDetailComponent,
    LikesComponent,
    ActivityComponent,
    PlaceActivityComponent,
    CategoryComponent,
    DashboardComponent,
    AddPetComponent,
    AdminpetsComponent,
    PetEditComponent,
    NewcategoryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
