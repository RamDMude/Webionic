import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private http: HttpClient , private route:Router) { }
  email ;
  password ;
  status:string ;
  icon = "far fa-eye-slash" ;
  atttype = "password" ;
  token;
  ngOnInit() {
  }

  

  toggle(){
    
    if (this.icon == "far fa-eye-slash" ) {
      this.atttype = "text" ;
      this.icon = "far fa-eye" ;
    }
    else {
      this.atttype = "password" ;
      this.icon = "far fa-eye-slash" ;
    }
  }

  login(){
    
    this.http.post('http://127.0.0.1:8000/api/login/', {email: this.email , password : this.password}).subscribe((res : any) => {
      this.status = res.status ;
      this.token = res.token ;
    if (this.status == "true") 
    {
      alert(res.message)
      localStorage.setItem('status', res.status)
      localStorage.setItem('name', res.name )
      localStorage.setItem('email', this.email )
      localStorage.setItem('token', this.token)
      this.route.navigateByUrl("home")
      
      // window.location.href= "http://localhost:8100/home"; 
    }
    else {
      alert(res.message);
    }
    } )
  }
}
