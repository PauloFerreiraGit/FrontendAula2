import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tabelas } from "./tabelas/tabelas";
import { Formularios } from "./formularios/formularios";
import { Links } from "./links/links";
import { Imagens } from "./imagens/imagens";
import { Listas } from "./listas/listas";
import { Paragrafo } from "./paragrafo/paragrafo";
import { Texto } from "./texto/texto";
import { Videos } from "./videos/videos";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tabelas, Formularios, Links, Imagens, Listas, Paragrafo, Texto, Videos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('exercicos');
}
