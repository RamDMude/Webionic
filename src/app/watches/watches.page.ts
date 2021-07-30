import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.page.html',
  styleUrls: ['./watches.page.scss','../mens-wear/mens-wear.page.scss'],
})
export class WatchesPage implements OnInit {

  watches=[];
  email;
  constructor(private http: HttpClient , private route :Router) { }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/api/watches/').subscribe((res : any) => {
      this.watches = res.watches ;
      
    })
  }
  addcart(productid){
    this.email = localStorage.getItem('email')
    this.http.post('http://127.0.0.1:8000/api/addtocart/' ,{productid :productid , email:this.email }).subscribe((res : any) => {
      this.route.navigateByUrl("cart") 
    })
  }

  showdiv(){
    document.getElementById('showd').style.display = "block";
    document.getElementById('showd').style.textAlign = "center" ;
  }

}
