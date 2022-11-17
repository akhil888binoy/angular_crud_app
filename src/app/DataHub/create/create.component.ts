import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Data } from '../data';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  dataFormHub: Data = {
    id: 0,
    Name:'',
    Mobile:0,
    email:'',
    channel:'',
    courses:'',
    rating: 0
  }
  constructor(private ds:DataService , private router: Router) { }
  ngOnInit(): void {
  }
  postData(){
    this.ds.createData(this.dataFormHub).subscribe({
     next:(res)=>{
      this.router.navigate(["/Datahub/home"]);
    },
    error:(err)=>{
      console.log(err);
    }
  })
 }
}
