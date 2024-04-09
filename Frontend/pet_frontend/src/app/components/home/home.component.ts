import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PettinderService } from 'src/app/services/pettinder.service';
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   pets: any;
   categories: any;
   weatherData: any;

   constructor(
     private geolocationService: GeolocationService,
     private service: PettinderService,
     private router: Router
   ) { }

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

     // Get pet list and category
     this.service.PetsService().then(res => res.json()).then(data => this.pets = data);
     this.service.categoryService().then(res => res.json()).then(data => this.categories = data);
   }

   fetchId(id: any): void {
     this.service.petDetailService(id).then(res => res.json()).then(data => console.log(data));
     this.router.navigate(['pet/', id]);
   }

   addtolikesHomeFunction(id: any): void {
     let token = localStorage.getItem('token');
     if (token) {
       this.service.addToLikesService(id).then(res => res.json()).then(data => console.log(data));
       this.router.navigateByUrl('likes');
     } else {
       this.router.navigateByUrl('signin');
     }
   }

   navigateToCategoryFunction(id: any): void {
     this.service.categoryDetailService(id).then(res => res.json()).then(data => data);
     this.router.navigate(['category/', id]);
   }
}

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { PettinderService } from 'src/app/services/pettinder.service';
// import { GeolocationService } from 'src/app/services/geolocation.service';//add
//
// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//   pets: any;
//   categories: any;
//
//   constructor(private geolocationService: GeolocationService, private service: PettinderService, private router: Router) { }
//
//   ngOnInit(): void {
//     // add geolocation
//     this.geolocationService.getCurrentPosition().subscribe(
//       (position: GeolocationPosition) => {
//         console.log('Latitude: ', position.coords.latitude);
//         console.log('Longitude: ', position.coords.longitude);
//         // Do something with the position
//       },
//       (error: any) => {
//         console.error('Error getting geolocation: ', error);
//         // Handle error
//       }
//     );
//
//     // add other service
//     this.service.PetsService().then(res => res.json()).then(data => this.pets = data);
//     this.service.categoryService().then(res => res.json()).then(data => this.categories = data);
//   }
//
//   fetchId(id: any): void {
//     this.service.petDetailService(id).then(res => res.json()).then(data => console.log(data));
//     this.router.navigate(['pet/', id]);
//   }
//
//   addtolikesHomeFunction(id: any): void {
//     let token = localStorage.getItem('token');
//     if (token) {
//       this.service.addToLikesService(id).then(res => res.json()).then(data => console.log(data));
//       this.router.navigateByUrl('likes');
//     } else {
//       this.router.navigateByUrl('signin');
//     }
//   }
//
//   navigateToCategoryFunction(id: any): void {
//     this.service.categoryDetailService(id).then(res => res.json()).then(data => data);
//     this.router.navigate(['category/', id]);
//   }
// }
