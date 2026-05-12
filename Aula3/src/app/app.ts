import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TagH } from "./tag-h/tag-h";
import { TagFormatacao } from "./tag-formatacao/tag-formatacao";
import { TagLinks } from "./tag-links/tag-links";
import { TagParagrafo } from "./tag-paragrafo/tag-paragrafo";
import { TagListas } from "./tag-listas/tag-listas";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TagH, TagFormatacao, TagLinks, TagParagrafo, TagListas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Aula3');
}
