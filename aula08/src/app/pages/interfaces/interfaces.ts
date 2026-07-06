import { IUser } from './../../shared/i-user';
import { Component } from '@angular/core';


type IUserLocal = { id: number, nome: string, email: string }; 

@Component({
  selector: 'app-interfaces',
  imports: [],
  templateUrl: './interfaces.html',
  styleUrl: './interfaces.css',
})
export class Interfaces {

  user: IUser = {id: 1, nome: "tony", email: "tonyfilho777@gmail.com"};

  user02: IUserLocal = {id: 1, nome: "tony", email: "tonyfilho777@gmail.com"};

  constructor() {
console.log("minhas Interfaces: ", this.user);
console.log('minhas Interfaces ${this.user02}');


  }


}
