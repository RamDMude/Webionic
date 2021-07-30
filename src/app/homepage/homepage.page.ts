import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  public data:any;
  menswear = [];
  womenswear =[];
  watches =[];
  topStories: any;

  slideOpts = {
    
    speed: 400,
    loop: true,
    autoplay: {
      delay: 3000,
      
    },
    pagination : {
      el: '.swiper-pagination',
      clickable: true
    }
  };
  email;
  constructor(private http: HttpClient , private route : Router) { 
    this.topStories = [
      {picture: "http://127.0.0.1:8000/Images/banner3.jpg"},
      {picture: "http://127.0.0.1:8000/Images/banner1.jpg"},
      {picture: "http://127.0.0.1:8000/Images/banner4.jpg"},
      { picture: "http://127.0.0.1:8000/Images/banner5.jpg"}
    ]
  }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/api/menswear/').subscribe((res : any) => {
      this.menswear = res.mens ;
    })

    this.http.get('http://127.0.0.1:8000/api/womenswear/').subscribe((res : any) => {
      this.womenswear = res.womens ;
    })

    this.http.get('http://127.0.0.1:8000/api/watches/').subscribe((res : any) => {
      this.watches = res.watches ;
    })
  } 
  
  addcart(productid){
    this.email = localStorage.getItem('email')
    this.http.post('http://127.0.0.1:8000/api/addtocart/' ,{productid :productid , email:this.email }).subscribe((res : any) => {
      this.route.navigateByUrl("cart") 
    })
  }
  
  allimages = [{
    'src' : 'http://127.0.0.1:8000/Images/banner1.jpg'
    }, {
    'src' : 'http://127.0.0.1:8000/Images/banner1.jpg'
    }, {
    'src' : 'http://127.0.0.1:8000/Images/banner1.jpg'
    },{
    'src' : 'http://127.0.0.1:8000/Images/banner1.jpg'
    }];
  }
