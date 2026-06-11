import { CommonModule } from '@angular/common';
import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { Observable, of } from 'rxjs';

type meuObjeto = { nome: string; endereco: string; numero: number; admin: boolean };
@Component({
  selector: 'app-tipo-de-dados',
  imports: [CommonModule],
  templateUrl: './tipo-de-dados.html',
  styleUrl: './tipo-de-dados.css',
})
export class TipoDeDados implements OnInit {
  localString: string = 'meu texto'; ///tipo stirng/// tipo char'y'
  localNumber: number = 100; //// tipo number /// long, biglong, int, inteiro....
  localBoolean: boolean = false; /// tipo boolean
  localArray: string[] = ['Leo', 'Evaldina', 'Paulo', 'Rafael', 'Monica', 'Samara', 'false'];
  localArray2: number[] = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
  localNull: null = null;
  localNull2!: null;
  localUndefined?: undefined;
  localObjecto = { nome: 'tony', endereco: 'rua....', numero: 10, admin: false, lado: 'esquerdo'};
  localObjecto2: meuObjeto = { nome: 'tony', endereco: 'rua....', numero: 10, admin: false, };

  /**tipo de dados assyncronos */
  localPromise: Promise<string> = new Promise<string>((resolve, reject) => {
    if (resolve) {
      resolve('Aula de assincronos em promisse');
    }
    reject('Error Http 400');
  });

  localObservable$ = new Observable((a) => a.next('Aula de Assincronos Observables'));
  localObservable2$: Observable<string> = of('Aula de Assincronos Observables2');

  /**construtor do JS */
  constructor() {
    this.localPromise.then((result) =>
      console.log('*******minha variavel de promisse com then ', result),
    );
    console.log('minha variavel de string: ' + this.localString);
    console.log('minha variavel de number: ' + this.localNumber);
    console.log('minha variavel de boolean: ' + this.localBoolean);
    console.log('minha variavel de array: ' + this.localArray);
    console.log('minha variavel de Null: ' + this.localNull);
    console.log('minha variavel de Undefined: ' + this.localUndefined);
    console.log('minha variavel de promisse sem Pending: ' + this.localPromise);
    console.log('minha variavel de observable sem subscribe: ' + this.localObservable$);
    console.log('minha variavel do tipo Objeto:' , this.localObjecto2);
    console.log('minha variavel do tipo Objeto:' , this.localObjecto2.nome);
    console.log('minha variavel do tipo Objeto:' , this.localObjecto2['endereco']);
    console.log('minha variavel do tipo Objeto:' , this.localObjecto2.numero);
    console.log('minha variavel do tipo ObjetoAdmin:' , this.localObjecto2['admin']);
  }

  ngOnInit(): void {
    this.localObservable$.subscribe((data) =>
      console.log('minha variavel de observable com Subscribe', data as string),
    );

    this.localObservable2$.subscribe({
      next: (result) => console.log('Nosso 2º Observable: ' + result),
      error: (e) => console.error('Error do Observable' + e),
      complete: () => console.log('Observable completo'),
    });
  }
}
