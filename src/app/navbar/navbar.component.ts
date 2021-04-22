import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  public hid :any = false;

  public status :any = true ;
  public logged: any = "LOGIN";
  public username:any = "Name";
  public useremail:any = "Email";

  constructor() { }

  ngOnInit() {}

  showsearch(hid) {
    this.hid = ! this.hid ;
  }

  isloggedin(status){
    this.status = !this.status ;

    if (this.status){
      this.username = "Prerna Patil";
      this.useremail = "prernapatil@gmail.com";
      this.logged = "LOGOUT" ;
    }
    else {
      this.username = "Name";
      this.useremail = "Email";
      this.logged = "LOGIN";
    }
  }
  
}
