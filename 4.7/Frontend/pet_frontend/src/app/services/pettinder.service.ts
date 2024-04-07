import { Injectable } from '@angular/core';



const signupURL='http://127.0.0.1:8000/api/signup';
const signinURL='http://127.0.0.1:8000/api/signin';
const petsURL='http://127.0.0.1:8000/api/pets';
@Injectable({
  providedIn: 'root'
})

export class PettinderService {
  
  
  constructor() { }
  
  fetchToken(){
    return localStorage.getItem('token')
  }
  registrationService(data:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let options={
      method:"POST",
      headers:header,
      body:JSON.stringify(data)
    }
    return fetch(signupURL,options)
  }
  
  signinService(data:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let options={
      method:"POST",
      body:JSON.stringify(data),
      headers:header
    }
    return fetch(signinURL,options)
  }
  PetsService(){
    let header=new Headers
    header.append('Content-Type','application/json')
    let options={
      method:"GET",
      headers:header
    }
    return fetch(petsURL,options)
  }
  petDetailService(id:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let options={
      method:"GET",
      headers:header
    }
    return fetch(`http://127.0.0.1:8000/api/pets/${id}`,options)
  }
  addToLikesService(id:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"POST",
      headers:header
    }
    return fetch(`http://127.0.0.1:8000/api/pets/${id}/add_to_likes`,options)
  }
  likesListservice(){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"GET",
      headers:header
    }
    return fetch(`http://127.0.0.1:8000/api/likes`,options)
  }
  placeActivityService(id:any,data:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"POST",
      headers:header,
      body:JSON.stringify(data)
    }
    return fetch(`http://127.0.0.1:8000/api/pets/${id}/place_activity`,options)
  }
  ActivityListService(){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"GET",
      headers:header
    }
    return fetch(`http://127.0.0.1:8000/api/activitys`,options)
  }
  activityCancelservice(id:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"PUT",
      headers:header
    }
    return fetch(`http://127.0.0.1:8000/api/activitys/${id}/cancel`,options)
  }
  removeFromLikesService(id:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"DELETE",
      headers:header
    }
    return fetch(`http://127.0.0.1:8000/api/likes/${id}`,options)
  }
  categoryService(){
    let header=new Headers
    header.append('Content-Type','application/json')
    let options={
      method:"GET",
      headers:header
    }
    return fetch(`http://127.0.0.1:8000/api/category`,options)
  }
  categoryDetailService(id:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let options={
      method:"GET",
      headers:header
    }
    return fetch(`http://127.0.0.1:8000/api/category/${id}`,options)
  }
  addReviewService(id:any,data:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"POST",
      headers:header,
      body:JSON.stringify(data)
    }
    return fetch(`http://127.0.0.1:8000/api/pets/${id}/add_review`,options)
  }
  addPetService(data:any,file:any){
   

    var formdata=new FormData()
    for ( const key of Object.keys(data) ) {
      var value = data[key];
      formdata.append(key,value);
      }
    formdata.append("image", file, file.name);
    let header=new Headers
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    
    let options={
      method:"POST",
      headers:header,
      body:formdata
    }
    return fetch(`http://127.0.0.1:8000/api/pets/add`,options)
  }
  petRemoveService(id:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"DELETE",
      headers:header
    }
    return fetch(`http://127.0.0.1:8000/api/pets/${id}/remove`,options)
  }
  petEditService(id:any,data:any,file:any){
    let header=new Headers
    
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    var formdata=new FormData()
    for ( const key of Object.keys(data) ) {
      var value = data[key];
      formdata.append(key,value);
      }
    formdata.append("image", file, file.name);
    let options={
      method:"PUT",
      headers:header,
      body:formdata
    }
    return fetch(`http://127.0.0.1:8000/api/pets/${id}/edit`,options)
  }

  categoryAddService(data:any,file:any){
    let header=new Headers
    
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    var formdata=new FormData()
    for ( const key of Object.keys(data) ) {
      var value = data[key];
      formdata.append(key,value);
      }
    formdata.append("icon", file, file.name);
    let options={
      method:"POST",
      headers:header,
      body:formdata
    }
    return fetch(`http://127.0.0.1:8000/api/category/add`,options)
  }
  categoryRemoveService(id:any){
    let header=new Headers
    header.append('Content-Type','application/json')
    let token =this.fetchToken()
    if(token){
      header.append('Authorization',token)
    }
    let options={
      method:"DELETE",
      headers:header
    }
    return fetch(`http://127.0.0.1:8000/api/category/${id}/remove`,options)
  }
}
