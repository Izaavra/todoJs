import { Todo } from "./index";

export class TodoList {
    constructor() {
        // this.hock = [];    //se crea el arreglo
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.hock.push(todo);  //se agrega la Tarea al arreglo
        this.guardarLocalStorage();
    }

    eliminarTodo(id){

        this.hock = this.hock.filter(todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado(id){

        for(const todo of this.hock){
            
            if( todo.id == id ){
                todo.completado = !todo.completado;
            
                this.guardarLocalStorage();
            
                break;
            }
        }

    }

    borrarCompletados(){
        this.hock = this.hock.filter( todo => !todo.completado );
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        
        localStorage.setItem('todo', JSON.stringify(this.hock));

    }

    cargarLocalStorage(){

        // (localStorage.getItem('todo')) ? this.hock = JSON.parse( localStorage.getItem('todo') ) : this.hock = [];
        this.hock = (localStorage.getItem('todo')) ? JSON.parse( localStorage.getItem('todo') ) : [];

        this.hock = this.hock.map(Todo.fromJson);
        /* 
            his.hock = this.hock.map(obj => Todo.fromJson(obj));
          
            this.hock = this.hock.map(function(obj) {
                return Todo.fromJson(obj);
            });
            ---+++++++++++---
            ***ES LO MISMO***
            
        */
    }
}