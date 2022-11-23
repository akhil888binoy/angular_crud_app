import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Data } from '../data';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  dataFormHub: Data = {
    id: 0,
    Name:'',
    Mobile:0,
    email:'',
    channel:'',
    courses:'',
    rating: 0

  }
  constructor(private activatedRoute: ActivatedRoute,
     private router: Router, private ds:DataService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      var id=Number(param.get('id'));
      this.getDatabyId(id);
    })
  }
  getDatabyId(id: number){
    this.ds.getDatabyId(id).subscribe((data)=>{
      this.dataFormHub = data;
    })
  }
  update(){
      this.ds.updateData(this.dataFormHub).subscribe({next:(data)=>{
        this.router.navigate(["/Datahub/home"])
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
