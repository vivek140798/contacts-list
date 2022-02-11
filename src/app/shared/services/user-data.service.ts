import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userId:any = null;
  constructor() { }

  setUserId(id){
    this.userId = id;
  }

  getUserId(){
    return this.userId;
  }
}
