import React from 'react';


export default class TodoItem extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            inEditMode: false,
            editModeTodoText: this.props.todo.text
        }
    }

    render() {
        const itemDisplayedContent = this.getItemDisplayedContent();

        return (
            <div className="todoItem">
                {itemDisplayedContent}
                <span onClick={e => this.handleDeleteClick(e)}> X</span>
            </div>
        );
    }

    handleSaveClick() {
        this.setState({
                inEditMode: false
            },
            () => this.props.todoSaveClick(this.props.todo.id, this.state.editModeTodoText)
        );
    }

    handleOnChange(event) {
        this.setState({editModeTodoText: event.target.value});
    }

    handleDeleteClick() {
        console.log('delete click', this);
        this.props.todoDeleteClick(this.props.todo.id);
    }

    handleEditClick() {
        this.setState({
            inEditMode: true
        });
    }

    getItemDisplayedContent() {
        const {editModeTodoText, inEditMode} = this.state;
        const {todo} = this.props;

        let content = <span onClick={ () => this.handleEditClick()}>
                        {todo.text}
                      </span>;

        if (inEditMode) {
            content = <>
                <input onChange={event => this.handleOnChange(event)} value={editModeTodoText}/>
                <button onClick={() => this.handleSaveClick()}>Save</button>
            </>
        }
        
        return content;
    }
}