import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.page.html',
  styleUrls: ['./productpage.page.scss'],
})
export class ProductpagePage implements OnInit {

  productname;
  productid;
  price ;
  oldp ;
  picture ;
  stock ;
  color ;
  sleeve ;
  fit;
  material ;
  suitable ;
  email ;
  status ;

  constructor(private activatedRoute: ActivatedRoute , private http: HttpClient , private route:Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.productid = params.productid;
      
    })

    this.http.post('http://127.0.0.1:8000/api/mensproduct/' ,{productid :this.productid }).subscribe((res : any) => {
      this.productname = res.name ;
      this.picture = res.photo ;
      this.price = res.price ;
      this.oldp = res.oldp ;
      this.stock = res.stock ;
      this.color = res.color ;
      this.sleeve = res.sleeve ;
      this.fit = res.fit ;
      this.material = res.material ;
      this.suitable = res.suitable ;
      
     
    })

    this.http.post('http://127.0.0.1:8000/api/womensproduct/' ,{productid :this.productid }).subscribe((res : any) => {
      this.productname = res.name ;
      this.picture = res.photo ;
      this.price = res.price ;
      this.oldp = res.oldp ;
      this.stock = res.stock ;
      this.color = res.color ;
      this.sleeve = res.sleeve ;
      this.fit = res.fit ;
      this.material = res.material ;
      this.suitable = res.suitable ;
      
    })

    this.http.post('http://127.0.0.1:8000/api/watchesproduct/' ,{productid :this.productid }).subscribe((res : any) => {
      this.productname = res.name ;
      this.picture = res.photo ;
      this.price = res.price ;
      this.oldp = res.oldp ;
      this.stock = res.stock ;
      this.color = res.color ;
      this.sleeve = res.sleeve ;
      this.fit = res.fit ;
      this.material = res.material ;
      this.suitable = res.suitable ;
      
    })
    
  }

  addcart(){
    this.email = localStorage.getItem('email')
    this.http.post('http://127.0.0.1:8000/api/addtocart/' ,{productid :this.productid , email:this.email }).subscribe((res : any) => {
      this.route.navigateByUrl("cart") 
    })
  }





}
