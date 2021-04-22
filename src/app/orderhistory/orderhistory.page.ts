import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.page.html',
  styleUrls: ['./orderhistory.page.scss'],
})
export class OrderhistoryPage implements OnInit {

  public data:any;
  constructor() { }

  ngOnInit(): void {
    this.data ={
      result:status,
      orderList:[
        {
          "picture":"/assets/Images/image1.jpg",
          "name":"T-Shirts"
        },
        {
          "picture":"/assets/Images/image2.jpg",
          "name":"T-shirts"
        },
        {
          "picture":"/assets/Images/image3.jpg",
          "name":"XYZ"
        },
        {
          "picture":"/assets/Images/image4.jpg",
          "name":"XYZ"
        }
      ]

    }
  }

}
