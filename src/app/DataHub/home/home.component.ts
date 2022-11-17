import { Component, OnInit } from '@angular/core';
import {Data} from '../data';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allData:Data[]=[];
  constructor(private ds: DataService) { }

  ngOnInit(): void {
  }
get(){

  this.ds.getData().subscribe((res)=>{
    this.allData=res;
  })
}
}
