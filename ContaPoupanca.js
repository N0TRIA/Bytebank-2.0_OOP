import { Conta } from './Conta.js'

export class ContaPoupanca extends Conta{
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia);
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }
}