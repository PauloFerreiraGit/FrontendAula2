
import { BehaviorSubject, catchError, from, Observable, tap,throwError} from 'rxjs';
import { FirebaseService } from './firebase';
import { EnvironmentInjector,inject,Inject, Injectable, runInInjectionContext } from '@angular/core';
import { User,AuthError, GoogleAuthProvider,onAuthStateChanged,signInWithPopup } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthStateService {
  getUser: any;
  setUser(arg0: null) {
    throw new Error('Method not implemented.');
  }
  setuser(arg0: any) {
    throw new Error('Method not implemented.');
  }

  private auth = inject(FirebaseService).auth;
  private EnvironmentInjector = inject(EnvironmentInjector);
  private routes = inject(Router);
  /// este é um observable do tipo Hot
  private user$ = new BehaviorSubject<User | null>(null);

  /** O método initAuthListener() serve para monitorizar o estado de autenticação do utilizador em tempo real e atualizar 
   * Aqui está o que ele faz em detalhe:
   * O que acontece na prática?
   * Escuta o Firebase: A funcção onAuthStateChanged liga um "ouvinte" (listener) ao Firebase Auth.
   * Deteta mudanças: O Firebase avisa esse método sempre que o utilizador faz login, faz logout ou quando a sessão é restaurada
   * Atualiza a aplicação: Quando o Firebase deteta o utilizador, o método envia esses dados para user$
   * Reatividade: Todos od componentes que subscrevem o getUser() recebem o novo estado do utilizador instantaneamente.
   * Para que serve o runUnjectionContext?
   * Contexto do Angular: Garante que o codigo do Firebase corre dentro do contexto de injeção de dependências do Angular.
   * Segurança: Impede erros de ciclo de vida do Angular se o Firebase disparar o evento antes do serviço estar totalmente pronto.
  */

  /** Como o Firebase gere a sessão 
   * 
presistência automatica: Por padrão, o SDK do Firebase salva o token de autenticação e os dados do utilizador 
Recuperação automatica: Quando o utilizador fecha a aba e volta ao site no dia seguinte, o Firebase vai ler esse armazenamento
O papel do onAuthStateChanged: Assim que o Firebase termina de ler os dados armazenados
A única coisa que precisa garantir
Para que isto funcione perfeitamente ao abrir o site, você só precisa de garantir que o método iniAuhListener() é chamado
O local ideal para chamar o initAuthListener() é no ngOnInit do seu AppComponent ou através de um APP_INITIALIZER no Angular */

 initAuthListener(): void {
  runInInjectionContext(this.EnvironmentInjector, () =>{
    onAuthStateChanged(this.auth, (user: User | null) => {
      this.user$.next(user);
    });
  });
 }
 getuser(): Observable<User | null> {
  return this.user$.asObservable();
 }
 isAuthenticated = (): boolean => {
  return this.user$.value !== null;
 };
 loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  return from(signInWithPopup(this.auth, provider)).pipe(
    tap(() => {
      this.routes.navigate(['/about']);
    }),
    catchError((e: AuthError) => {
      return throwError(() => new Error(e.message || ' Erro desconhecido tente mais tarde'));
    }),
  );
 };
} // fim do service

  




