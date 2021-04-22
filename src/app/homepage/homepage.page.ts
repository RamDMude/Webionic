import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

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
        }
        
  
      ]

    }
  }

}
