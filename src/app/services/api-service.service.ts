import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient:HttpClient) { }

  // to get the API and to show to the display page
  getComments():Observable<any>{
    return this.httpClient.get('http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students');
  }

  // to delete the details of a specific row
  deleteAPI(id):Observable<any>{
    return this.httpClient.delete(`http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/${id}`);
  }

  // to edit the row
  addstudentAPI1(data,id):Observable<any>{
    const headers =new HttpHeaders({
        "Content-Type": "application/json",
      });
    return this.httpClient.put(`http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students/${id}`, data,{headers})
}

addstudentAPI(data):Observable<any>{
  const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
  return this.httpClient.post("http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students", data,{headers})
}
}
