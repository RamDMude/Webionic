import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-womens-wear',
  templateUrl: './womens-wear.page.html',
  styleUrls: ['./womens-wear.page.scss','../mens-wear/mens-wear.page.scss'],
})
export class WomensWearPage implements OnInit {

  womenswear = [];
  email;
  constructor(private http: HttpClient , private route:Router) { }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/api/womenswear/').subscribe((res : any) => {
      this.womenswear = res.womens ;
      
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
