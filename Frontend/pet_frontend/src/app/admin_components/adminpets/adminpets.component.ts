import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PettinderService } from 'src/app/services/pettinder.service';

@Component({
  selector: 'app-adminpets',
  templateUrl: './adminpets.component.html',
  styleUrls: ['./adminpets.component.css']
})
export class AdminpetsComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute,private service:PettinderService,private router:Router) { }
  category:any
  pets:any
  ngOnInit(): void {
    let id=this.activeroute.snapshot.paramMap.get("id")
    this.service.categoryDetailService(id).then(res=>res.json()).then(data=>{this.category=data,
      this.pets=this.category.pets
      })
  }
  
  petRemoveFunction(id:any){
    console.log(id);
    this.service.petRemoveService(id).then(res=>res.json()).then(data=>console.log(data))
    setTimeout(location.reload.bind(location), 1000)
  }
  editPet(id:any){
    this.router.navigate(['admin/dashboard/pet/',id])
  }
}
