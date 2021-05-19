import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.page.html',
  styleUrls: ['./watches.page.scss'],
})
export class WatchesPage implements OnInit {

  watches=[]
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://127.0.0.1:8000/watches/').subscribe((res : any) => {
      this.watches = res.watches ;
      
    })
  }

}
