import React from 'react';
import AddTodoInput from './AddTodoInput'; //default
import AddTodoBtn from "./AddTodoBtn";
import TodoItem from "./TodoItem";   //non-default requires { }; cannot have more than 1 default
import uuid from "uuid";
import {CounterContainer} from "./counter";

export default class AddTodoBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoText: '',
            todos: [{id: uuid.v4(), text: 'first'}]

        };

        this.handleTodoTextChange = this.handleTodoTextChange.bind(this);
        this.handleAddTodoClick = this.handleAddTodoClick.bind(this);
        this.handleTodoDeleteClick = this.handleTodoDeleteClick.bind(this);
        this.handleTodoEdit = this.handleTodoEdit.bind(this);
    }

    handleAddTodoClick() {
        console.log('AddTodoBar - click');
        const newTodo = {
            id: uuid.v4(),
            text: this.state.todoText
        }
        this.setState({
            todos: [...this.state.todos, newTodo],
            todoText: ''
            // todos: this.state.todos.concat([this.state.todoText])
        }, () => {
            console.log(this.state.todos);
        });
    }

    handleTodoTextChange(text) {
        // handling in the parent from AddTodoInput
        console.log('AddTodoBar - handleTodoTextChange');
        console.log(text);
        this.setState({
            todoText: text
        });
    }

    handleTodoEdit(id, todoText) {
        console.log('handleTodoEdit - click', id, todoText);
        const newTodos = this.state.todos.map(element => {
            if (element.id === id) {
                return {
                    id: element.id,
                    text: todoText
                };
            }
            return element;
        });
        this.setState({
            todos: newTodos
        });
    }

    handleTodoDeleteClick(todoID) {
        // return with true/false, if true keeps, false removes
        const fiteredTodos = this.state.todos.filter(todo => todo.id !== todoID);
        this.setState({
            todos: fiteredTodos
        })
    }

    render() {
        const divWrappedTodos = this.getDivWrappedTodos();

        return (
            <React.Fragment>
                {/*prop examples foo, addTodoInputText */}
                <AddTodoInput foo={this.handleTodoTextChange} addTodoInputText={this.state.todoText}/>
                <AddTodoBtn boo={this.handleAddTodoClick}/>

                <br/>
                {divWrappedTodos}
                <CounterContainer/>
            </React.Fragment>
        );
    }

    getDivWrappedTodos() {
        return this.state.todos.map(todo => <TodoItem todoSaveClick={this.handleTodoEdit}
                                                      todoDeleteClick={this.handleTodoDeleteClick}
                                                      todo={todo} key={todo.id}/>);
    }
}

