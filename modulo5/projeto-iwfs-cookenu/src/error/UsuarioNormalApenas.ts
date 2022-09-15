import { BaseError } from "./BaseError";

export class UsuarioNormalApenas extends BaseError {
    constructor() {
        super("Apenas usuários com role 'normal' podem acessar essa funcionalidade.", 422)
    }
}