import { Component } from '@angular/core';

@Component({
  selector: 'app-variaveis',
  imports: [],
  templateUrl: './variaveis.html',
  styleUrl: './variaveis.css',
})
export class Variaveis {
  nome = 'tony';
  localObjecto = { nome: 'tony', endereco: 'rua....', numero: 10, admin: false, lado: 'esquerdo' };

  constructor() {
    console.log('Minha variavel global Objeto:', this.localObjecto);
    //invocar no construtor
    this.metodoTestConst();
    this.metodoTestLet();
    this.metodoTestConst2();
    this.metodoTestLet2();
  }

  metodoTestLet() {
    console.log('Minha variavel global Objeto no metodoTestLet():', this.localObjecto);
    this.nome = 'Rafael';
    console.log('Minha variavel global nome metodoTestLet():', this.localObjecto);
  }
  metodoTestConst() {
    console.log('Minha variavel global Objeto no metodoTestConst():', this.localObjecto);
    this.nome = 'Paulo';
    console.log('Minha variavel global Objeto no metodoTesConst():', this.nome);
  }

  metodoTestConst2 = () => {
    // var nome = 'tony';
    // escopo local Não usa this.
    const LocalNome = ' tony filho';
    const LocalNomeObjecto = {};
    const localNomeArray = [];
    console.log('Minha variavel Const LocalNome no metodoTestConst(): ', LocalNome);
  };
  metodoTestLet2 = () => {
    // var nome = 'tony';
    // escopo local Não usa this.
    let LocalNome = 'tony filho';
    console.log('Minha variavel Const LocalNome no metodoTestLet2(): ', LocalNome);
    LocalNome = 'Monica';
    console.log(' Minha variavel Const LocalNome no MetodoTestLet2: ', LocalNome);
  };
}
