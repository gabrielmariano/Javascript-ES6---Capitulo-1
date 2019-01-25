class Usuario {
    constructor() {
        var User1 = new Usuario('email@teste.com', 'senha123');
        var Adm1 = new Admin('email@teste.com', 'senha123');
    }
}

class Admin extends Usuario {
    constructor() {
        super();
        this.Usuario = User1
        this.Adm1
    }
}