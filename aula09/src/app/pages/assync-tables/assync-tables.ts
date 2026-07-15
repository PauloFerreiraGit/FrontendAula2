import { FakeBack } from './../../service/fake-back';
import { IUtilizador } from './../../shared/i-utilizador';
import { Component } from '@angular/core';

import { catchError, Observable, of, switchMap, take } from 'rxjs';
import { CommonModule } from '@angular/common';

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
  localUserAsyncPromise: IUtilizador[] = [];

  /// utilizador com Observable
  localUserObservable$: Observable<IUtilizador[]>;

  localUserSubscription: IUtilizador[] = [];

  /// criação das variaveis de erro
  ErrorPromise: localError = { errorAsync: false, errorNome: '' };
  ErrorAsyncAwaitPromisse: localError = { errorAsync: false, errorNome: '' };
  ErrorObservable: localError = { errorAsync: false, errorNome: '' };

  ///falaremos sobre DI ou Injeção de Dependência

  constructor(protected fakebBack: FakeBack) {
    this.localUserObservable$ = fakebBack.getUtilizadoresObservable();

    ///invocando o método promise
    this.carregarPromisse();

    ////invocando o 2º metodo de promise
    this.carregarAsyncAwaitPromise();

    ///invocando o metodo de Observable
    this.carregarObservable();

    /// this.cdr.detectChanges();
  }

  carregarPromisse = () => {
    this.fakebBack
      .getUtilizadorPromise()
      .then((res: IUtilizador[]) => {
        // console.log("Nosso Result: " , res)
        return (this.localUserPromise = res);
      })
      .catch((e) => {
        // console.error("Nosso Error: " , e);
        this.ErrorPromise = { errorAsync: true, errorNome: 'Error no carregarPromise(): ' + e };
        this.localUserPromise = [];
      });
  };
  /// ASYNC & AWAIT

  carregarAsyncAwaitPromise() {
    this.fakebBack
      .getUtilizadoresAsync()
      .then((res: IUtilizador[]) => {
        console.log('Nosso Result em carregarAsyncAwaitPromise()', res);
        this.localUserAsyncPromise = res;
      })
      .catch((error) => {
        console.error('Nosso Error em carregarAsyncAwaitPromise():', error);
        this.localUserPromise = [];
        this.ErrorAsyncAwaitPromisse = {
          errorAsync: true,
          errorNome: ' Error no carregarAsyncAwaitPromise(): ' + error,
        };
      });
  }
  carregarObservable = () => {
    /// falar um pouco sobre RxJS
    ///operador take(1), esse cara faz com que apos 1 subscrição o canal de dados seja fechado
    this.fakebBack
      .getUtilizadoresObservable()
      .pipe(
        take(1),
        switchMap((res: IUtilizador[]) => {
          console.log('Nosso Result em carregarObservable():', res);
          return this.localUserSubscription;
        }),
        catchError((error) => {
          console.error('Nosso Error em caerragrAsyncAwaitPromise(): ', error);
          this.ErrorObservable = {
            errorAsync: true,
            errorNome: 'Erro no metodo carregarObservable: ' + error,
          };
          return of([]);
        }),
      )
      .subscribe();
  };
  carregarObservableComSubscribeObjeto() {
    /// falar um pouco sobre RxJS
    ///operador take(1), esse cara faz com que apos 1 subscrição o canal de dados seja fechado
    this.fakebBack
      .getUtilizadoresObservable()
      .pipe(
        take(1),
        switchMap((res: IUtilizador[]) => {
          console.log('Nosso Result em carregarObservable():', res);
          return res;
        }),
      )
      .subscribe({
        next: (result) => {
          console.log('nosso dado: ', result);
        },
        error: (e) =>
          console.log('nosso Erro no metodo carregarObservableComSubscribeObjeto() ' + e),
        complete: () => console.log('nosso complete, terminou o Observable'),
      });
  }
} /// endclass
