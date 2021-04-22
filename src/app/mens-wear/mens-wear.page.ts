import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mens-wear',
  templateUrl: './mens-wear.page.html',
  styleUrls: ['./mens-wear.page.scss'],
})
export class MensWearPage implements OnInit {

  public data:any;
  constructor() { }

  ngOnInit() {
    this.data={
      result:status,
      productList:[
        {
          "price":"$ 50",
          "picture":"/assets/Images/image1.jpg",
          "name":"XYZ",
          "oldprice":"$ 100"
        },
        {
          "price":"$ 50",
          "picture":"/assets/Images/image2.jpg",
          "name":"XYZ",
          "oldprice":"$ 100"
        },
        {
          "price":"$ 50",
          "picture":"/assets/Images/image3.jpg",
          "name":"XYZ",
          "oldprice":"$ 100"
        },
        {
          "price":"$ 50",
          "picture":"/assets/Images/image4.jpg",
          "name":"XYZ",
          "oldprice":"$ 100"
        },
        {
          "price":"$ 50",
          "picture":"/assets/Images/image5.jpg",
          "name":"XYZ",
          "oldprice":"$ 100"
        },
        {
          "price":"$ 50",
          "picture":"/assets/Images/image6.jpg",
          "name":"XYZ",
          "oldprice":"$ 100"
        },
        {
          "price":"$ 50",
          "picture":"/assets/Images/image7.jpg",
          "name":"XYZ",
          "oldprice":"$ 100"
        },
        {
          "price":"$ 50",
          "picture":"/assets/Images/image8.jpg",
          "name":"XYZ",
          "oldprice":"$ 100"
        },
        {
          "price":"$ 50",
          "picture":"/assets/Images/image9.jpg",
          "name":"XYZ",
          "oldprice":"$ 100"
        },
        {
          "price":"$ 50",
          "picture":"/assets/Images/image13.jpg",
          "name":"XYZ",
          "oldprice":"$ 100"
        },
        {
          "price":"$ 50",
          "picture":"/assets/Images/image14.jpg",
          "name":"XYZ",
          "oldprice":"$ 100"
        },
        {
          "price":"$ 50",
          "picture":"/assets/Images/image15.jpg",
          "name":"XYZ",
          "oldprice":"$ 100"
        }
  
      ]

    }
  }

}
