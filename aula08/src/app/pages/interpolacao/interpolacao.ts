import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacao',
  imports: [],
  templateUrl: './interpolacao.html',
  styleUrl: './interpolacao.css',
})
export class Interpolacao {
  /// template literal
  nome: string = 'Tony';
  idade: number = 42;

  construtor() {
    const mensagem = `Ola, meu nome é ${this.nome} e tenho a idade de  $ {this.idade}`;
    const mensagemSemInterpolacao =
      'Ola, meu nome é' + this.nome + 'e tenho a idade de' + this.idade;

    console.log('Minha Interpolação:', mensagem);
  }
}
