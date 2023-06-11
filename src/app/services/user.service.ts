import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  invalidUserAUth=new EventEmitter<boolean>(false)

  constructor(private http:HttpClient,private router:Router) { }
}
