import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient ) {}

  users=[] ;
  email ;
  firstname ;
  lastname ;
  number ;
  password ;
  message ;

  register(){
    this.http.post('http://127.0.0.1:8000/users/', {email: this.email , firstname : this.firstname ,lastname:this.lastname , number:this.number ,password : this.password}).subscribe((res : any) => {
      this.users = res.users ;
      this.message = "Account Created Successfully"
    } )
  }



}
