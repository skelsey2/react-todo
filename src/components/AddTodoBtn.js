import React from 'react'

export default class AddTodoBtn extends React.Component {
    render() {
        return <button onClick={(e) => this.handleAddTodo(e)}>Add Todo</button>;
    }


    handleAddTodo(e) {
        console.log('clicked');
        this.props.boo();
    }
}

