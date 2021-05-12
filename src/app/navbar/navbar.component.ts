import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  public hid :any = false;

  public status1 ;
  public logged;
  public username;
  public useremail;

  constructor(private router: Router) {
    this.status1 = localStorage.getItem('status')

    if (this.status1 == "true"){
      this.username = localStorage.getItem('name');
      this.useremail = localStorage.getItem('email');
      this.logged = "LOGOUT" ;
    }
    else  {
      this.username = "Name";
      this.useremail = "Email";
      this.logged = "LOGIN";
      
    }
   }

  ngOnInit() {}

  
  showsearch(hid) {
    this.hid = ! this.hid ;
  }
  
  isloggedin(){
    if (this.status1 == "true"){
      this.username = "Name";
      this.useremail = "Email";
      localStorage.removeItem('email');
      localStorage.removeItem('name') ;
      localStorage.removeItem('status') ;
      this.logged = "LOGIN" ;
    }
    else {
      window.location.href= "http://localhost:8100/login"; 
    }

    
  }
  
}
