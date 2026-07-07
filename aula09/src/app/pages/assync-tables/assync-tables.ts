import { Component } from '@angular/core';
import { IUtilizador } from '../../shared/i-utilizador';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FakeBack } from '../../service/fake-back';

type localError = { errorAsync: boolean; errorNome: string };

@Component({
  selector: 'app-assync-tables',
  imports: [CommonModule],
  templateUrl: './assync-tables.html',
  styleUrl: './assync-tables.css',
})
export class AssyncTables {
  /// utilizador Promise/then&catch
  localUserPromise: IUtilizador[] = [];

  /// utilizador com async await
  localUserAsync: IUtilizador[] = [];

  /// utilizador com Observable
  localUserObservable$!: Observable<IUtilizador[]>;

  /// criação das variaveis de erro
  ErrorPromise: localError = { errorAsync: false, errorNome: '' };
  ErrorAsyncAwaitPromisse: localError = { errorAsync: false, errorNome: '' };
  ErrorObservable: localError = { errorAsync: false, errorNome: '' };

  ///falaremos sobre DI ou Injeção de Dependência

  constructor(protected fakebBack: FakeBack) {
    this.localUserObservable$ = fakebBack.getUtilizadoresObservable();

    ///invocando o método promise
    this.carregarPromisse();
  }

  carregarPromisse = () =>{
this.fakebBack.getUtilizadorPromise().then((res: IUtilizador[]) => {
  console.log("Nosso Result: " , res)
  return (this.localUserPromise = res);
})
.catch((e) => {
  console.error("Nosso Error: " , e);
  this.ErrorPromise = {errorAsync: true, errorNome: "Error no carregarPromise(): " + e};
});
  }
  carregarAsyncAwaitPromise() {

  }
  carregarObservable = () => {

  }

  /// endclass
}
