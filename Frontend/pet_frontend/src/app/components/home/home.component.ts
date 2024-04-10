import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PettinderService } from 'src/app/services/pettinder.service';
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
pets:any
categories:any
weatherData: any
  constructor(private service:PettinderService,private router:Router,private geolocationService: GeolocationService) { }

  ngOnInit(): void {
    // Get current location
    this.geolocationService.getCurrentPosition().subscribe(
      (position: GeolocationPosition) => {
        console.log('Latitude: ', position.coords.latitude);
        console.log('Longitude: ', position.coords.longitude);



        this.geolocationService.getWeather(position.coords.latitude, position.coords.longitude).subscribe(
          (weatherData: any) => {
            console.log('Weather data: ', weatherData);
            this.weatherData = weatherData;
            // Process weather data here
          },
          (error: any) => {
            console.error('Error getting weather data: ', error);
            // Handle errors
          }
        );
      },
      (error: any) => {
        console.error('Error getting geolocation: ', error);
        // Handle errors
      }
    );
    this.service.PetsService().then(res=>res.json()).then(data=>this.pets=data)
    this.service.categoryService().then(res=>res.json()).then(data=>this.categories=data)
  }

  fetchId(id:any){
    this.service.petDetailService(id).then(res=>res.json()).then(data=>console.log(data))
    this.router.navigate(['pet/',id])
  }
  addtolikesHomeFunction(id:any){
    let token=localStorage.getItem('token')
    if(token){
      this.service.addToLikesService(id).then(res=>res.json()).then(data=>console.log(data))
      this.router.navigateByUrl('likes')
    }
    else{
      this.router.navigateByUrl('signin')
    }
  }
  navigateToCategoryFunction(id:any){
    this.service.categoryDetailService(id).then(res=>res.json()).then(data=>data)
    this.router.navigate(['category/',id])
  }  
}
