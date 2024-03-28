import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPetComponent } from './admin_components/add-pet/add-pet.component';
import { AdminpetsComponent } from './admin_components/adminpets/adminpets.component';
import { DashboardComponent } from './admin_components/dashboard/dashboard.component';
import { NewcategoryComponent } from './admin_components/newcategory/newcategory.component';
import { PetEditComponent } from './admin_components/pet-edit/pet-edit.component';
import { LikesComponent } from './components/likes/likes.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ActivityComponent } from './components/activity/activity.component';
import { PlaceActivityComponent } from './components/place-activity/place-activity.component';
import { PetDetailComponent } from './components/pet-detail/pet-detail.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:"signup",component:RegisterComponent},
  {path:"signin",component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'pet/:id',component:PetDetailComponent},
  {path:'likes',component:LikesComponent},
  {path:'activity',component:ActivityComponent},
  {path:'place-activity',component:PlaceActivityComponent},
  {path:'category/:id',component:CategoryComponent},
  {path:'admin/dashboard',component:DashboardComponent},
  {path:'admin/dashboard/pet',component:AddPetComponent},
  {path:'admin/dashboard/category/:id',component:AdminpetsComponent},
  {path:'admin/dashboard/pet/:id',component:PetEditComponent},
  {path:'admin/dashboard/category_new',component:NewcategoryComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
