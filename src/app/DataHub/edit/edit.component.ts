import { Component, OnInit } from '@angular/core';
import { Data, ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  dataHubForm: Data = {
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

  }

}
