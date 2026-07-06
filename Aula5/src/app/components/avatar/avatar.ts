 import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css',
})
export class Avatar {
  
  localnome:string = "Paulo";
  localImage!:string ;
  //nome2:string = `20`;
  //nome3 = "true";
  
  logout() {
  //throw new Error('Method not implemented.');
  console.log("deslogou");

  
  }

}
