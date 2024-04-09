import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PettinderService } from 'src/app/services/pettinder.service';
import {} from 'src/app/components/home/home.component'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category:any
  pets:any
  constructor(private service:PettinderService,private router:Router,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.activeroute.snapshot.paramMap.get("id")
    this.service.categoryDetailService(id).then(res=>res.json()).then(data=>{this.category=data,
      this.pets=this.category.pets
      })
    
  }
  fetchId(id:any){
    this.service.petDetailService(id).then(res=>res.json()).then(data=>console.log(data))
    this.router.navigate(['pet/',id])
  }
  addtolikesCategoryFunction(id:any){
    this.service.addToLikesService(id).then(res=>res.json()).then(data=>console.log(data))
    this.router.navigateByUrl('likes')
  }

}
