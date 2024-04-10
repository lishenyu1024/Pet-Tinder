import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PettinderService } from 'src/app/services/pettinder.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
  likes:any
  pet:any
  constructor(private service:PettinderService,private router:Router) { }

  ngOnInit(): void {
    
    this.service.likesListservice().then(res=>res.json()).then(data=>{this.likes=data,console.log(data),this.pet=data.pet
    })
  }
  placeActivityLikesFunction(id:any){
    localStorage.setItem("id",id)
    this.router.navigateByUrl('place-activity')
  }
  removeFromLikesFunction(id:any){
    this.service.removeFromLikesService(id).then(res=>res.json()).then(data=>console.log(data))
    setTimeout(location.reload.bind(location), 1000)
  }
}
