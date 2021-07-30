import { Component, OnInit ,ViewChild} from '@angular/core';
import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-offerpage',
  templateUrl: './offerpage.page.html',
  styleUrls: ['./offerpage.page.scss'],
})
export class OfferpagePage implements OnInit {
  @ViewChild(NgxWheelComponent, { static: false }) wheel;

  seed = [...Array(12).keys()]
  idToLandOn: any;
  items: any[];
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL
  textAlignment: TextAlignment = TextAlignment.OUTER
  constructor(private route:Router){}
  status;

  ngOnInit(){

    this.status = localStorage.getItem('status')
    
    
    if (this.status != "true"){
      alert("Login to Spin the Wheel");
      this.route.navigateByUrl("home");
    }
    

    this.idToLandOn = this.seed[Math.floor(Math.random() * this.seed.length)];
    const colors = ['#FF0000', '#FF7F00' , '#FFFF00' , '#00FF00' , '#0000FF' , '#4B0082']
    this.items = this.seed.map((value) => ({
      fillStyle: colors[value % 6],
      text: `Prize ${value}`,
      id: value,
      textFillStyle: 'black',
      textFontSize: '16'
    }))
  }
  reset() {
    this.wheel.reset()
  }
  // before() {
  //   alert('Your wheel is about to spin')
  // }
  getValue ;
  value ;
  async spin() {
    
    // var valueList = ["100","110","40","80","10","120","30","70"];
    // var getValue = valueList[Math.floor(Math.random() * valueList.length)];
    
    this.getValue = this.seed[Math.floor(Math.random() * this.seed.length)];
     this.idToLandOn = this.getValue;
    await new Promise(resolve => setTimeout(resolve, 0));
    this.wheel.spin()
  }

  after() {
    var valueList = ["5","10","8","1","40","3","15","13","24","9","21","17"];
    this.value = valueList[this.getValue];
    alert("Congratulations , you received $"+this.value+" off on your first order !!");
    localStorage.setItem('offer',this.value);
    console.log(this.value);
    this.route.navigateByUrl("cart");

  }
  // constructor() { }

  // ngOnInit() {
  //   // document.getElementById('spinbutton').onclick = function() {
  //   //   //disable
  //   //   this.disabled = true;
  
  //   //   //do some validation stuff
  //   // }
    
    
  // }
  // // spinfunc(){
  // //   var x = 1024 ;
  // //   var y = 9999 ;
  // //   var deg = Math.floor(Math.random()* (x-y)) + y ;
  // //   document.getElementById('box').style.transform = "rotate("+deg+"deg)" ;
  
  // //   var element = document.getElementById('mainbox');
  // //   element.classList.remove('animate');
  // //   setTimeout(function(){
  // //     var valueList = ["100","110","40","80","10","120","30","70"];
  // //     var getValue = valueList[Math.floor(Math.random() * valueList.length)];
  // //     alert(getValue); 
  // //     localStorage.setItem('off',getValue)
  // //    }, 5000);
    
    
  // //   // setTimeout(function(){
  // //   //   element.classList.add('animate');
  // //   // },5000);
  // // }
  
  
}
