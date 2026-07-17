import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthStateService } from '../../service/auth-state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  /**um novo módulo - o módulo para formulários - ReactiveFormsModule */
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css',
})
export class Forms {

  /**Variavel para receber criar Formulario e capturar os dados */
  protected signInForms: UntypedFormGroup;
path: any;

  

  constructor(
    protected authService: AuthStateService,
    protected router: Router,
    private fb: UntypedFormBuilder,
  ) {
    this.signInForms = this.fb.nonNullable.group({
      email: ["",[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
    });
     /** O controls é a api do form que controla os validators e tb os dados */
    console.log("nosso controls: ", this.signInForms.controls);
  } //end construtor


onSubmit() {
if(!this.signInForms.valid){
  this.signInForms.pending;
  /**Aprendendo a mudar a rota pelo TS(typescript) */
  this.router.navigateByUrl("/");
}

const localFormEmail = this.signInForms.get("email")?.value;
const localFormPassword = this.signInForms.get("password")?.value;
const localFormsComplete = this.signInForms.value;
console.log(`Dados do formulário passados individualmente: Email: ${localFormEmail} e Password: ${localFormPassword}`);
console.log(`Objeto: formulário completo ${JSON.stringify(localFormsComplete)}`);

}//end onsubmit


goBack = () => {
  this.signInForms.reset();
   /**Aprendendo a mudar a rota pelo TS(typescript) */
  this.router.navigateByUrl("./");

} //end goback

} //end class
