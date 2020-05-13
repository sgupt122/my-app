import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  baseUrl: string = "https://5ebad27a3f97140016992da7.mockapi.io/meetings";
 //Get All Products
 getUsers() {
  return this.http.get<User[]>(this.baseUrl);
}
}
