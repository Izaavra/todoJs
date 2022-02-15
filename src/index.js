import './styles.css';

import {Todo, TodoList} from './classes/index'
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();


todoList.hock.forEach(ob => crearTodoHtml(ob)); //todo, task, etc, es solo una formalidad, una variable local para identificar cada elemnto del arreglo
//todoList.hock.forEach(crearTodoHtml); tambien funciona


console.log('todoList: ', todoList.hock);
