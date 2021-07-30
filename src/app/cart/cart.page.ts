import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router'; 



@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  // @ViewChild('pro') pro ;
  
  constructor(private activatedRoute: ActivatedRoute ,private http: HttpClient , private route:Router) { }

  status ;
  email;
  prods =[]; 
  cartproductinfo=[];
  cartproductinfo1=[];
  item;
  items;
  reruns ;
  price ;
  oldprice ;
  productname ;
  pro = document.getElementById('pro');
  peroff;
  totalworth ;
  oldtotalworth ;
  totalworths ;
  oldtotalworths ;
  offer ;
  offer1 ;
  discountworth ;
  discountworths ;
  offerworth ;
  
  ngOnInit() {
    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.productname = params.productname;
      
    // })
    
    
    this.status = localStorage.getItem('status')
    this.offer1 = localStorage.getItem('offer')
    if (this.offer1== undefined){
      this.offer = 0
    }
    else{
      this.offer = this.offer1
    }
    
    if (this.status == "true"){
      this.email = localStorage.getItem('email');
      this.http.post('http://127.0.0.1:8000/api/cart/' ,{email :this.email }).subscribe((res : any) => {
      this.prods = res.cartprods ;
      // this.peroff = (((this.oldprice - this.price)/this.oldprice)*100);
      
      [this.cartproductinfo1 ,this.items ,this.totalworths ,this.oldtotalworths] = this.cartp();
      
      

      if (this.items == 0) {
        console.log(this.items)
        alert("Your Cart is Empty");
        this.route.navigateByUrl("home");
      }
      })
      
       
    }
    
    else  {
      alert("Login to view the items in your Cart");
      this.route.navigateByUrl("home");
    }
    
  }

  cartp=()=>{
    this.item = 0;
    this.totalworth=0;
    this.oldtotalworth=0;
    for (const products of this.prods) {
      
      this.http.post('http://127.0.0.1:8000/api/mensproduct/' ,{productid : products }).subscribe((res : any) => {
        this.cartproductinfo.push(res) ;
        this.totalworth = this.totalworth + res.price;
        this.oldtotalworth = this.oldtotalworth + res.oldp ;
      })
      
      this.http.post('http://127.0.0.1:8000/api/womensproduct/' ,{productid : products }).subscribe((res : any) => {
        this.cartproductinfo.push(res) ;
        this.totalworth = this.totalworth + res.price;
        this.oldtotalworth = this.oldtotalworth + res.oldp ;
      })
      
      this.http.post('http://127.0.0.1:8000/api/watchesproduct/' ,{productid : products }).subscribe((res : any) => {
        this.cartproductinfo.push(res) ;
        this.totalworth = this.totalworth + res.price;
        this.oldtotalworth = this.oldtotalworth + res.oldp ;
        
      })
      
      this.item++;
     
    }
    
    // console.log(this.cartproductinfo)
    return[this.cartproductinfo,this.item,this.totalworth,this.oldtotalworth];
  }

  removecart(productid2){
    
    this.email = localStorage.getItem('email')
    
    this.http.post('http://127.0.0.1:8000/api/removefromcart/' ,{productid :productid2, email:this.email }).subscribe((res : any) => {
      window.location.reload();
    })
    
  }
  
  orderfunc(){
    this.email = localStorage.getItem('email')
    this.http.post('http://127.0.0.1:8000/api/orderhist/' ,{email:this.email}).subscribe((res : any) => {
      
    })
    
    this.route.onSameUrlNavigation="reload";
    alert("Your Order has been placed successfully");
    this.route.navigateByUrl("orderhistory");
    
  }
}

