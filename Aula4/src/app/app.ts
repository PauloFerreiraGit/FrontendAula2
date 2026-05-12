import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TagFormatacao } from "./tag-formatacao/tag-formatacao";
import { TagLinks } from "./tag-links/tag-links";
import { TagListas } from "./tag-listas/tag-listas";
import { TagParagrafo } from "./tag-paragrafo/tag-paragrafo";
import { TagsH } from "./tags-h/tags-h";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TagFormatacao, TagLinks, TagListas, TagParagrafo, TagsH],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Aula4');
}
