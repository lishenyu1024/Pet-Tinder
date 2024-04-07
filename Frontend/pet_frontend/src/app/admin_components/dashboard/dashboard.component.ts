import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PettinderService } from 'src/app/services/pettinder.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private service:PettinderService,private router:Router) { }

 
  category:any
  ngOnInit(): void {
    this.service.categoryService().then(res=>res.json()).then(data=>this.category=data)

  }
  addPetFunction(){
    this.router.navigateByUrl('admin/dashboard/pet')
  }
  categoryDetail(id:any){
    this.router.navigate(['admin/dashboard/category/',id])
  }
  categoryAddFunction(){
    this.router.navigateByUrl('admin/dashboard/category_new')
  }
}
