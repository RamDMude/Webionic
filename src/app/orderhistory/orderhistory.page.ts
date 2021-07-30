import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.page.html',
  styleUrls: ['./orderhistory.page.scss'],
})
export class OrderhistoryPage implements OnInit {

  public data:any;
  constructor(private http: HttpClient , private route:Router) { }

  status ;
  email;
  prods;
  productinfo=[]; 
  productinfo1=[]; 

  ngOnInit(): void {

    this.status = localStorage.getItem('status')
    
    
    if (this.status == "true"){
      this.email = localStorage.getItem('email');
      this.http.post('http://127.0.0.1:8000/api/orders/' ,{email :this.email }).subscribe((res : any) => {
      this.prods = res.orderprod ;

      for (var i = this.prods.length - 1; i >= 0; i--) {
        this.productinfo1.push(this.prods[i]);
      }

        for (const products of this.productinfo1) {
        
          this.http.post('http://127.0.0.1:8000/api/mensproduct/' ,{productid : products }).subscribe((res : any) => {
            this.productinfo.push(res) ;
          })
          
          this.http.post('http://127.0.0.1:8000/api/womensproduct/' ,{productid : products }).subscribe((res : any) => {
            this.productinfo.push(res) ;
          })
          
          this.http.post('http://127.0.0.1:8000/api/watchesproduct/' ,{productid : products }).subscribe((res : any) => {
            this.productinfo.push(res) ;
          })
          
        }
        
      })
       
    }
    else  {
      alert("Login to view your Orders");
      this.route.navigateByUrl("home");
    }




    // this.data ={
    //   result:status,
    //   orderList:[
    //     {
    //       "picture":"/assets/Images/image1.jpg",
    //       "name":"T-Shirts"
    //     },
    //     {
    //       "picture":"/assets/Images/image2.jpg",
    //       "name":"T-shirts"
    //     },
    //     {
    //       "picture":"/assets/Images/image3.jpg",
    //       "name":"XYZ"
    //     },
    //     {
    //       "picture":"/assets/Images/image4.jpg",
    //       "name":"XYZ"
    //     }
    //   ]

    // }
  }
  addcart(productid){
    this.email = localStorage.getItem('email')
    this.http.post('http://127.0.0.1:8000/api/addtocart/' ,{productid :productid , email:this.email }).subscribe((res : any) => {
      this.route.navigateByUrl("cart") 
    })
  }

}
