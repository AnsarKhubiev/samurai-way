import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {GlobalStyle} from "./styles/Global.styled";
import {StateType, store} from "./redux/State";


const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <GlobalStyle/>
            <App store={store} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );

}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)