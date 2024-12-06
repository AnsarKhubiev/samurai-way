import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyle} from "./styles/Global.styled";
import {BrowserRouter} from "react-router-dom";
import state from './redux/State'

export type MessageType = {
    message: string
    id: string
}
export type DialogItemType = {
    name: string
    id: string
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type FriendType = {
    id: string
    name: string
    surname: string
    link: string
}



ReactDOM.render(
    <BrowserRouter>
        <GlobalStyle/>
        <App state={state} />
    </BrowserRouter>,
    document.getElementById('root')
);