/// funções callbacks são funções que retornam outra função.

export function processar(valor: number, callback: (n: number) => void) {
    callback(valor);

}

processar(10, (n) => console.log('valor processado: $(n)'));