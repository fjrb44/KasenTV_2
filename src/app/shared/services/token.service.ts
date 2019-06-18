import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private iss = {
    login: "http://localhost:8000/api/login",
    signup: "http://localhost:8000/api/signup"
  }
  constructor() { }

  handle(token){
    this.set(token);
  }

  setId(id){
    localStorage.setItem('id', id);
  }

  getId(){
    return localStorage.getItem('id');
  }

  removeId(){
    localStorage.removeItem('id');
  }

  setUsername(username){
    localStorage.setItem('username', username);
  }

  getUsername(){
    return localStorage.getItem('username');
  }

  removeUsername(){
    localStorage.removeItem('username');
  }

  set(token){
    localStorage.setItem('token', token);
  }

  get(){
    return localStorage.getItem('token');
  }

  remove(){
    localStorage.removeItem('token');
  }

  isValid(): boolean{
    const token = this.get();

    if(token){
      const payload = this.payload(token);

      if(payload){
        return (Object.values(this.iss).indexOf(payload.iss) > -1) ? true : false;
      }
    }

    return false;
  }

  payload(token){
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload){
    return JSON.parse(atob(payload));
  }

  loggedIn(){
    return this.isValid();
  }

  getUserId(){
    const token = this.get();

    if(token){
      const payload = this.payload(token);

      if(payload){
        return (Object.values(this.iss).indexOf(payload.iss) > -1) ? true : false;
      }
    }

    return false;
  }

  logout(){
    this.remove();
    this.removeId();
    this.removeUsername();
  }
}
