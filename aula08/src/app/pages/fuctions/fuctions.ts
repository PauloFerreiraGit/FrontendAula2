import { Component } from '@angular/core';
import { saudacoes } from './Tipo de Functions/fuct_declaracao_comum';
import { saudacoes02 } from './Tipo de Functions/fuct_expressao';
import { somar } from './Tipo de Functions/fuct_arrow_functions';
import { processar } from './Tipo de Functions/fuct_call_back';

@Component({
  selector: 'app-fuctions',
  imports: [],
  templateUrl: './fuctions.html',
  styleUrl: './fuctions.css',
})
export class Fuctions {
  LocalSomar() {
    return console.log ("nossa soma: ", 10 + 99)

  }

   constructor() {
    const localMessage = saudacoes("Tony");

    console.log("Minha invocação de função de declaração comum: na linha 22 " + localMessage);
    console.log("Minha invocação de função de Expressão comum: na linha 23 " + saudacoes02());
    console.log("Minha invocação da Arrow Function Sem Bloco na linha 24: " + somar(10,20));
    console.log("Minha invocação da Arrow Function com Bloco na linha 25: " + somar(100,20));
    console.log("Minha invocação da Função CallBack na linha 26: " + processar(10, () => 20));
    console.log("Sobre o THIS na linha 27: " + this.LocalSomar());





  
}
}