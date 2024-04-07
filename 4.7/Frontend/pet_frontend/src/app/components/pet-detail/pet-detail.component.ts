import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PettinderService } from 'src/app/services/pettinder.service';
import { FormGroup,Validators,FormControl } from '@angular/forms'

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {

  constructor(private service:PettinderService,private activerouter:ActivatedRoute,private router:Router) { }

  reviewform=new FormGroup({
    "description":new FormControl('',Validators.required),
    "rating":new FormControl('',Validators.required),
    "title": new FormControl('')
  })

  pet:any
  reviews:any

  ngOnInit(): void {
    let id=this.activerouter.snapshot.paramMap.get("id")
    this.service.petDetailService(id).then(res=>res.json()).then(data=>{this.pet=data ,console.log(data) 
      this.reviews=this.pet.reviews
  })
  }

  addToLikesFunction(id:any){
    
    let token=localStorage.getItem("token")
    if(token){
      this.service.addToLikesService(id).then(res=>res.json()).then(data=>console.log(data))
      setTimeout(window.location.href='likes',1000)
    }
    else{
      this.router.navigateByUrl('signin')
    }
    
  }
  placeactivityFunction(id:any){
    let token=localStorage.getItem("token")
    if(token){
    localStorage.setItem("id",id)
    this.router.navigateByUrl('activity')
    }
    else{
      this.router.navigateByUrl('signin')
    }
  }


  addReviewFunction(id:any){
    let token=localStorage.getItem("token")
    if(token){
    this.service.addReviewService(id,this.reviewform.value).then(res=>res.json()).then(data=>data)
    setTimeout(location.reload.bind(location), 1000)
    }
    else{
      this.router.navigateByUrl('signin')
    }
  }
}

