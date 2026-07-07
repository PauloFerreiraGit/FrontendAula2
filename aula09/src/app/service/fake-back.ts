import { Injectable } from '@angular/core';
import { IUtilizador } from '../shared/i-utilizador';
import { DataDummy } from './dummy/sand-box';
import { catchError, delay, from, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeBack {
  private localUtilizador: IUtilizador[] = DataDummy; /// isto vem de uma SQL ou de um NoSQL

  /** 1º é a Promise */
  //==============================================================
  // MÉTODO 1 - PROMISE
  //==============================================================
  // Este médtodo retorna uma promise
  // Ideal para ensinar .then() e .catch()
  //==============================================================

  getUtilizadorPromise(): Promise<IUtilizador[]> {
    return new Promise((resolve, reject) => {
      // simular um http ou requisição de uma API usaremos o setTimeout()
      setTimeout(() => {
        // para simular um error criaremos uma variavel
        const sucesso = Math.random() > 0.5;
        if (sucesso) {
          /// se fosse uma API retornaria nossos dados, um Json, uma Stream... etc
          resolve(this.localUtilizador);
        } else {
          reject('Error http 500');
        }
      }, 2000);
    });
  }

  //================================================================
  // MÉTODO 2 - ASYNC / AWAIT
  //================================================================
  // Este médtodo também retorn Promise
  // Mas utiliza async/await
  //================================================================

  async getUtilizadoresAsync(): Promise<IUtilizador[]> {
    try {
      const data = await this.getUtilizadorPromise();
      return data;
    } catch (error) {
      console.log('nosso metodo getUtilizadoresAsync() ', error);
      throw error;
    }
  }

  //================================================================
  // MÉTODO 3 - OBSERVABLE
  //================================================================
  // Observable é muito utilizado no Angular
  // HttpClient retorna Observable
  // as vezes temos que converter uma Promise para trabalhar com Observable
  //================================================================

  getUtilizadoresObservable(): Observable<IUtilizador[]> {
    // simula sucesso ou erro
    const sucesso = Math.random() > 0.5;
    if (!sucesso) {
      return throwError(() => new Error('Erro http 404'));
    }

    // FROM() este operador transforma uma promise em Observable
    // OF() este operador transforma um List ou Array ou Objeto em Observable
    const locoalPromise: Promise<IUtilizador[]> = this.getUtilizadorPromise();
    return from(locoalPromise).pipe(
      delay(2000),
      catchError((error) => {
        console.error('Erro no Observable', error);
        throw error;
      }),
    );
  }
} //end class
