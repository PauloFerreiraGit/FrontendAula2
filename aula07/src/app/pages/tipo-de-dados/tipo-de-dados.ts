import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tipo-de-dados',
  imports: [CommonModule],
  templateUrl: './tipo-de-dados.html',
  styleUrl: './tipo-de-dados.css',
})
export class TipoDeDados {

localString: string = "meu texto"; ///tipo stirng/// tipo char'y'
localNumber: number = 100; //// tipo number /// long, biglong, int, inteiro....
localBoolean: boolean = false; /// tipo boolean
localArray: string [] = []; 

}
