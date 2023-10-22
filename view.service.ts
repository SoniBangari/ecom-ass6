import { Injectable } from '@angular/core';
interface User{
  id? : number,
  firstName : string,
  lastName : string,
  contact : number,
  gender : string,
  emailAdderss : string,
  age : number,
}

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  view: User = 
    {
      id : 1,
      firstName : "Soni",
      lastName : "Bangari",
      contact : 8555978078,
      gender : 'FeMale',
      emailAdderss : "soni@gmail.com",
      age : 20,
    }

  constructor() { }
  
}
