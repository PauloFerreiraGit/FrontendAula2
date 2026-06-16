import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-operadores',
  imports: [CommonModule],
  templateUrl: './operadores.html',
  styleUrl: './operadores.css',
})
export class Operadores {
  /// Operadores aritmeticos
  /// soma, subtração, multiplicação, divisão e resto
  localAritmeticos: String = ' +, -, *, /, % ';

  ///Operadores de Comparação
  /// comparação dem tipagem, comparação com tipagem, diferente sem tipagem,
  //  diferente com tipagem, maior, menor, maior&igual, menor&igual.

  localComparacao: string = '==, ===, !=, !==, >, <, >=, <=';

  exemploOperador = '3'; /// se usar == o compilador vai falar que é if( 3 == exemploOperador); true
  exemploOperador3Iguais = '3'; /// se usar === o compilador vai falar que é if( 3 === exemploOperador); false

  /// Operadores Lógicos
  /// & o E é 100% true
  /// || o Ou pode ter 1 true
  /// ?? coalescência nula , ou um e outro, substitui o if e else;
  localLogicos: string = '&&, || , ?? ';

  ///operador de Atribuição
  /**Obs: em outras linguagens pode aparecer assim: =+ */
   localAtribuicao: string = " = , +=, -= ";

   /// Operador Ternario
   /// cursos
   localTernario: string = "localName = this.cursos ? 'curso de java' : 'curso de JS' ";

  construtor() {
    let exemploNumber = 10;  //aqui tenho 10
    /// quanto tem na variavel exemploNumber ????
    exemploNumber += 20; //aqui tenho 30
/* ternario permite fazer pre checagem, exemplo abaixo onde se na variavel 
for igual ao valor 30, eu faço a atribuição do valor 50 senão eu atribuo 100*/

    let localTernario = exemploNumber  ? 50 : 100;
    let localTernario2 = exemploNumber === 30 ? 50 : 100;
  }
}
