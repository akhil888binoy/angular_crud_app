import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private ds:DataService , private router: Router) { }
  ngOnInit(): void {
  }

}
