class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'Diego';

    }
    mostrausuario() {
        console.log(this.usuario);
    }
}



   
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.addTodo();
}
