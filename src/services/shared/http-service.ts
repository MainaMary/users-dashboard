import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl:string = "https://jsonplaceholder.typicode.com";
  constructor(private http: HttpClient) {}

  get<T>(url:string):Observable<T>{
    return this.http.get<T>(`${this.baseUrl}/${url}`);
  }

  put<T>(url:string,body:Object):Observable<T>{
    return this.http.put<T>(`${this.baseUrl}/${url}`,body);
  }

  delete<T>(url:string):Observable<T>{
    return this.http.delete<T>(`${this.baseUrl}/${url}`);
  }

  post<T>(url:string,body:Object):Observable<T>{
    return this.http.post<T>(`${this.baseUrl}/${url}`,body);
  }

  patch<T>(url:string,body?: Object):Observable<T>{
    return this.http.patch<T>(`${this.baseUrl}/${url}`,body);
  }
}