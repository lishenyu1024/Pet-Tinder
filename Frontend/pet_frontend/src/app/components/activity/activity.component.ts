import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PettinderService } from 'src/app/services/pettinder.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
activitys:any
  constructor(private service:PettinderService,private activerouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.service.ActivityListService().then(res=>res.json()).then(data=>this.activitys=data)
  }
 activityCancelFunction(id:any){
  this.service.activityCancelservice(id).then(res=>res.json()).then(data=>console.log(data))
  window.location.reload()
}
}
