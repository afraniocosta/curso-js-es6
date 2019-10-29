class List{
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data); 
    }

}


class TodoList extends List {
    // constructor(){
    //     this.todos = [];
    // }

    // addTodo() {
    //     this.todos.push('Novo todo');   
    //     console.log(this.todos); 
    // }

    // qdo definimos o metodo contructor numa classe que herda outra classe é importante chamar o metodo constructor do pai através do super

    constructor(){
        super(); // aqui estou chamando o constructor da classe pai
        this.usuario = 'Diego';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }

}

// variável criada para armazenar a nova lista
var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();
