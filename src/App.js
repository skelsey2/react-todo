import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodoBar from "./components/AddTodoBar";
import {configureStore} from "./configureStore";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {increment} from "./reducers";

const store = createStore(increment, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
    return (
        <Provider store={store}>
            <div className="appjs">
                <AddTodoBar/>
            </div>
        </Provider>
    );
}

export default App;
