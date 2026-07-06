import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  imports: [],
  templateUrl: './typescript.html',
  styleUrl: './typescript.css',
})
export class Typescript implements OnInit {
  /// quando temos mais de um tipo, temos que fazer o CASTING
  numeroDaCasa: number | string | undefined | null;
  numeroDaLoja: string | undefined;

  construtor() {
    this.numeroDaCasa = 1;
    this.numeroDaLoja = '1';
  }

  ngOnInit(): void {
    /// este aqui recebe somente 1 tipo de dado e precisa fazer o cast
    const localNumber: Number = this.numeroDaCasa as number;
    ///posso fazer casting pelo operador Diamante
    const localNumber2: Number = <number>this.numeroDaCasa;
    ///este aqui recebe os 4 tipo de dados
    this.numeroDaCasa = this.numeroDaLoja;

    console.log('Nosso numero: ' + localNumber, 'Nosso outro numero; ' + localNumber2);
  }

meuNumeroDeCasa (): number {
  const LocalNome = "Tony";
    console.log('Nosso numero: ' + this.meuNumeroDeCasa, 'Nosso outro numero; ' + this.numeroDaLoja);
    console.log("Minha string" + LocalNome);
    return this.numeroDaCasa as number;
}

meuNome (): string {
  const LocalNome = "Tony";
    console.log('Nosso numero: ' + this.meuNumeroDeCasa, 'Nosso outro numero; ' + this.numeroDaLoja);
    console.log("Minha string" + LocalNome);
    return "Meu nome é Tony";
  ///  return undefined;

}
meuNome2 = () => {
  const LocalNome = 'Tony';
  console.log(
    'Nosso numero:' + this.meuNumeroDeCasa,
    'Nosso outor numero: ' + this.numeroDaLoja,
  );
console.log('Mina string' + LocalNome);
return 'Meu nome é Tony';



};



}



