import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioStatico } from "./formulario-statico/formulario-statico";
import { TabelaStaticas01 } from "./tabela-staticas01/tabela-staticas01";
import { TabelaStaticas02 } from "./tabela-staticas02/tabela-staticas02";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormularioStatico, TabelaStaticas01, TabelaStaticas02],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula4');
}
