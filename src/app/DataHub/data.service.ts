import { Injectable } from '@angular/core';
import {HttpCient} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpCient) { }
}
