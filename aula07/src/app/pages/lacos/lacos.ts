import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lacos',
  imports: [CommonModule],
  templateUrl: './lacos.html',
  styleUrl: './lacos.css',
})
export class Lacos {
minhaCores: string[] = ["azul","vermelho","roxo","verde", "preto"];

constructor() {
  this.minhaCores[0];
  this.minhaCores[1];
  this.minhaCores[2];
  this.minhaCores[3];
  this.minhaCores[4];
 // this.minhaCores[5]; no java e error 
this.exemploForTradicional();
/// for off
this.exemploForOf();
///For Each
this.exemploForEach();
 

}
/// for tradicional
exemploForTradicional = () => {
/// for tradicional
 for (let i = 0; i < this.minhaCores.length; i++) {
  const element = this.minhaCores[i];
  console.log("Nosso Array: ", element, " meu andar do predio de cores: " + i);
 }

};

 /// For Of
exemploForOf () {
   for (const data of this.minhaCores) {
    console.log("Nosso Array For Of: ", data,);
   }
}
/// for each 
 exemploForEach = () => {
  this.minhaCores.forEach((element) => {
    console.log("Nosso Array ForEach: ", element);
    
  });


 }


}/// Fim da classe
