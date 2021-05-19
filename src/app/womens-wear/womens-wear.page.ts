import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-womens-wear',
  templateUrl: './womens-wear.page.html',
  styleUrls: ['./womens-wear.page.scss'],
})
export class WomensWearPage implements OnInit {

  womenswear = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/womenswear/').subscribe((res : any) => {
      this.womenswear = res.womens ;
      
    })
  } 

}
