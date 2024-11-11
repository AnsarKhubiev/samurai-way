import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyle} from "./styles/Global.styled";
import {BrowserRouter} from "react-router-dom";

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

const posts = [
    {id: '1', message: 'Hi, how are you?', likesCount: 5},
    {id: '2', message: `It's my first post!`, likesCount: 15},
]

const dialogs = [
    {id: '1', name: 'Ansar Khubiev'},
    {id: '2', name: 'Karim Khubiev'},
    {id: '3', name: 'Ayna Khubieva'},
]

const messages = [
    {id: '1', message: 'Hello, Ansar!'},
    {id: '2', message: 'Hello, Karim!'},
    {id: '3', message: 'Hello, Ayna!'},
]

ReactDOM.render(
    <BrowserRouter>
        <GlobalStyle/>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </BrowserRouter>,
    document.getElementById('root')
);