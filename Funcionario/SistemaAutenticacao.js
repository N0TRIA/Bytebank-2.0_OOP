/* Ser autenticável significa ter o método autenticar */

import { Funcionario } from "./Funcionario.js";

export class SistemaAutenticacao extends Funcionario{
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha);
    }
}