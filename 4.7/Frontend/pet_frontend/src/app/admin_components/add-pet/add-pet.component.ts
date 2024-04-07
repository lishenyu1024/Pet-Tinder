import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PettinderService } from 'src/app/services/pettinder.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {

  constructor(private service:PettinderService) { }

  pet= new FormGroup({
    "name":new FormControl('',Validators.required),
    "price":new FormControl('',Validators.required),
    "description":new FormControl('',Validators.required),
    "category":new FormControl('',Validators.required)
  })
  category:any
  file:File;
  petdetail:any
  
  ngOnInit(): void {
    this.service.categoryService().then(res=>res.json()).then(data=>this.category=data)
  }
  onChange(event:any) {
      this.file = event.target.files[0];
      }

  addPetFunction(){
    this.service.addPetService(this.pet.value,this.file).then(res=>res.json()).then(data=>this.petdetail=data)
    this.pet.reset()
  }

}
