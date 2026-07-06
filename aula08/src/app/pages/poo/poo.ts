import { IAnimal } from './../../shared/i-animal';
import { Component } from '@angular/core';

@Component({
  selector: 'app-poo',
  imports: [],
  templateUrl: './poo.html',
  styleUrl: './poo.css',
})
export class Poo implements IAnimal {
  nome!: string;

  makeSound(): void {
    console.log('ja tenho som');
  }

  construtor () {
    this.nome = 'tony';
  }

   ngOnInit(): void {
   }
}
