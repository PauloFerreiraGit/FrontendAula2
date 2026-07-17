import { AuthFacadeService } from './service/auth-facade.service';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { AuthStateService } from './service/auth-state';

@Component({
  selector: 'app-root',
  imports: [ Header, Main, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  

  constructor (private AuthStateService: AuthStateService) {

  }

  
  ngOnInit(): void {
    this.AuthStateService.initAuthListener();
    
  }


  
    
  } 

  


