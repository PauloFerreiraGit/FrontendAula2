import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Estruturas } from "./estruturas/estruturas";
import { Tabelas } from "./tabelas/tabelas";
import { Formularios } from "./formularios/formularios";
import { Links } from "./links/links";
import { Imagens } from "./imagens/imagens";
import { Listas } from "./listas/listas";
import { Paragrafo } from "./paragrafo/paragrafo";
import { Texto } from "./texto/texto";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Estruturas, Tabelas, Formularios, Links, Imagens, Listas, Paragrafo, Texto],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exercicos');
}
