/* Ser autenticável significa ter o método autenticar */

import { Funcionario } from "./Funcionario.js";

export class SistemaAutenticacao extends Funcionario {
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehautenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehautenticavel(autenticavel) {
        return 'autenticar' in autenticavel &&
        autenticavel.autenticar instanceof Function
    }
}