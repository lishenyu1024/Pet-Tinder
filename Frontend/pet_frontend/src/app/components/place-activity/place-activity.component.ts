import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validator, Validators,FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PettinderService } from 'src/app/services/pettinder.service';

@Component({
  selector: 'app-place-activity',
  templateUrl: './place-activity.component.html',
  styleUrls: ['./place-activity.component.css']
})
export class PlaceActivityComponent implements OnInit {
  activity=new FormGroup({
    "leave_comment":new FormControl('',Validators.required),
    "multiple_choice":new FormControl('',Validators.required)
  })
  constructor(private service:PettinderService,private activeroute:ActivatedRoute,private router:Router) { }
  pet:any
  pet_id:any=localStorage.getItem("id")
  ngOnInit(): void {
    this.service.petDetailService(this.pet_id).then(res=>res.json()).then(data=>this.pet=data)
  }

  activityform(){
    console.log(this.activity.value);
    let id=localStorage.getItem("id")
    this.service.placeActivityService(id,this.activity.value).then(res=>res.json()).then(data=>console.log(data))
    if(this.activity.valid){
      this.router.navigateByUrl('activity')
    }
  }


}
