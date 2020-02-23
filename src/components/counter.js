import React from 'react';
import {connect} from 'react-redux';
// import {increment} from '../actions/operations';
import {INCREMENT} from "../constants/actionTypes";
// Map the state of the store to the props to be passed
// to the container component.
const mapStateToProps = (state) => ({
    count: state.count
});

// Map actions to properties in the container
const mapDispatchToProps = (dispatch) => ({
    // onClick: () => dispatch(increment()) this is where you be invoking the operations.js file
    onClick: () => dispatch({
        type: 'INCREMENT'
    })
});

// function-style component (also called "functional component"?)
// const Counter = ({
// //                      count,
// //                      onClick,
// //                  }) => (
// //     <div>
// //         <div>{count}</div>
// //         <button onClick={onClick}>Increment</button>
// //     </div>
// // );

// class-based component/"class component"
class Counter extends React.Component {
    render() {
        return (
            <div>
                <div>{this.props.count}</div>
                <button onClick={this.props.onClick}>Increment</button>
            </div>
        );
    }
}

export const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
