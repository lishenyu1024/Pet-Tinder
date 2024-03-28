import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router) { }
  title = 'frontend';
  username:any
  jwt:any
  ngOnInit(): void {
    this.username=localStorage.getItem("user")
    this.jwt=localStorage.getItem('jwt')
  }

  logoutFunction(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    localStorage.removeItem("id")
    localStorage.removeItem("jwt")
    setTimeout(window.location.href="/signin",500)
  }

  function ($:any) {
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover',
                 function () {
                    $('.dropdown-toggle').trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle').trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
  }
  likes(){
    if(localStorage.getItem('token') && localStorage.getItem('jwt') ){
      this.router.navigateByUrl('likes')
    }
    else{
      this.router.navigateByUrl('signin')
    }
  }
  activity(){
    if(localStorage.getItem('token') && localStorage.getItem('jwt') ){
      this.router.navigateByUrl('activity')
    }
    else{
      this.router.navigateByUrl('signin')
    }
  }

}