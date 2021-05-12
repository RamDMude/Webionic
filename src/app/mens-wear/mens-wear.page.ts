import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mens-wear',
  templateUrl: './mens-wear.page.html',
  styleUrls: ['./mens-wear.page.scss'],
})
export class MensWearPage implements OnInit {

  public data:any;
  menswear = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/menswear/').subscribe((res : any) => {
      this.menswear = res.mens ;
    })
  } 
  
}
