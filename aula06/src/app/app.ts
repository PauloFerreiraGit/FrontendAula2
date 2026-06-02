import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Avatar } from "./components/avatar/avatar";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";

@Component({
  selector: 'app-root',
  imports: [ Header, Main, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ExercicioAula5');
}
