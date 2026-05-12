import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tag-listas',
  imports: [],
  templateUrl: './tag-listas.html',
  styleUrl: './tag-listas.css',
})
export class TagListas {
  minhastring: string = "Paulo" // isto é uma string */
  minhalista: string[] = [ "Tony", "paulo", "samanta", "leonardo", "Priscila", "1", "false", "1", "false", this.minhastring,];

  //***Minha lista de ANY, não é comum usar any, ele desliga o typescript  */
   minhalistajsnumber: any[] = [ "Tony", "paulo", "samanta", "leonardo", "Priscila", "1", "false", 1, false ]
}

  //minha lista (Super Array) com error */
// minhalistajsnumber: number[] = [" "Tony", "paulo", "samanta", "leonardo", "Priscila", "1", "false", 1, false]

