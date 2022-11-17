import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  //Get All Data from Database
  getData(){
    return this.http.get<Data[]>("http://localhost:3000/DataHub");
  }
  //Create Data
  createData(data: Data){
    return this.http.post<Data>("http://localhost:3000/DataHub", data)


  }
  //get single data by ID
  getDatabyId(id:number){
    return this.http.get<Data>(`http://localhost:3000/DataHub/${id}`)

  }
  //Update data
  updateData(data:Data){
    return this.http.put<Data>( `http://localhost:3000/DataHub/${data.id}`, data)

  }
}
