import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.page.html',
  styleUrls: ['./productpage.page.scss'],
})
export class ProductpagePage implements OnInit {

  productname;
  price ;
  picture ;
  stock ;
  color ;
  sleeve ;
  fit;
  material ;
  suitable ;

  constructor(private activatedRoute: ActivatedRoute , private http: HttpClient) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.productname = params.productname;
    })

    this.http.post('http://127.0.0.1:8000/mensproduct/' ,{productname :this.productname }).subscribe((res : any) => {
      this.picture = res.photo ;
      this.price = res.price ;
      this.stock = res.stock ;
      this.color = res.color ;
      this.sleeve = res.sleeve ;
      this.fit = res.fit ;
      this.material = res.material ;
      this.suitable = res.suitable ;
      
    })
  }





}
