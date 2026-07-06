/// Arrow Functions

/// Quando eu não tenho {....} o JS ja coloca um retorno invisivel para nós
export const somar = (a: number, b: number) => a+ b;

/* Quando eu tenho o bloco {....} eu posso trer mais de uma execução e retornar o que eu quero*/
export const somarComBlococERetorno = (a: number, b: number) => {
    console.log("antes da soma variavel a: " + a );
    console.log("antes da soma variavel b: " + b );
    return a+b;
};


    
