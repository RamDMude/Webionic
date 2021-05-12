import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.page.html',
  styleUrls: ['./createaccount.page.scss'],
})
export class CreateaccountPage implements OnInit {

  constructor(private http: HttpClient ) {}

  ngOnInit() {
  }

  
  email ;
  firstname ;
  lastname ;
  number ;
  password ;
  status ;

  register(){
    if ((this.firstname ==null && this.lastname ==null) && (this.number ==null && this.password ==null)){
      alert("Fill all the Details");
    }
    else{
      this.http.post('http://127.0.0.1:8000/users/', {email: this.email , firstname : this.firstname ,lastname:this.lastname , number:this.number ,password : this.password}).subscribe((res : any) => {
      alert(res.message);
    } )
    }
    
    
    
  }

  
}
