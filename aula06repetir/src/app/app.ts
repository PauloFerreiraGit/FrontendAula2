import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from "./components/main/main";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Main, Footer, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula06repetir');
}
