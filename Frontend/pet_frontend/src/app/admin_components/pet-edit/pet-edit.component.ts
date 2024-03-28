import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PettinderService } from 'src/app/services/pettinder.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

  constructor(private service:PettinderService,private activeroute:ActivatedRoute,private formBuilder: FormBuilder) { }
  pet= new FormGroup({
    "name":new FormControl('',),
    "price":new FormControl('',),
    "description":new FormControl('',),
    "category":new FormControl('',)
  })
  file:File
  petdetail:any
  category:any
  ngOnInit(): void {
    let id=this.activeroute.snapshot.paramMap.get("id")
    this.service.petDetailService(id).then(res=>res.json()).then(data=>this.petdetail=data)
    this.service.categoryService().then(res=>res.json()).then(data=>this.category=data)
  }
  onChange(event:any) {
    this.file = event.target.files[0];
    }
    editPetFunction(id:any){
      this.service.petEditService(id,this.pet.value,this.file).then(res=>res.json()).then(data=>this.petdetail=data)
    }
}
