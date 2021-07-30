import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute ,private http: HttpClient , private route:Router) { }


  status;
  status1;
  email;
  firstname ;
  lastname;
  number;

  deffirstname ;
  deflastname;
  defnumber;

  ngOnInit() {

    this.status = localStorage.getItem('status')
    
    
    if (this.status == "true"){
      this.email = localStorage.getItem('email');  
    }
    else  {
      alert("Login to Update your Details");
      this.route.navigateByUrl("home");
    }

    this.http.post('http://127.0.0.1:8000/api/fetchdetails/' ,{email :this.email}).subscribe((res : any) => {
      this.deffirstname = res.firstname ;
      this.deflastname = res.lastname ;
      this.defnumber = res.number ;
      
    })

  }
  
  updatedetails(){
    this.http.post('http://127.0.0.1:8000/api/changedetails/' ,{email :this.email ,firstname:this.firstname , lastname:this.lastname , number:this.number}).subscribe((res : any) => {
      this.status1 = res.status ;
      localStorage.removeItem('name');
      localStorage.setItem('name', this.firstname )
      if (this.status1 == "True"){
        alert("Details Changed Successfully");
      }
      else{
        alert("Error from the server");
      }
    })
    
    this.route.navigateByUrl("home");
  }
  

}
