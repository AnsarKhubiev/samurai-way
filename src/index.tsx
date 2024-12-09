import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {GlobalStyle} from "./styles/Global.styled";
import {addMessage, addPost, state, subscribe, updateNewPostText} from "./redux/State";


const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <GlobalStyle/>
            <App state={state}
                 addPost={addPost}
                 addMessage={addMessage}
                 updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );

}

ReactDOM.render(
    <BrowserRouter>
        <GlobalStyle/>
        <App
            state={state}
            addPost={addPost}
            addMessage={addMessage}
            updateNewPostText={updateNewPostText}
        />
    </BrowserRouter>,
    document.getElementById('root')
);

subscribe(renderEntireTree)