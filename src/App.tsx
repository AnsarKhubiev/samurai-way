import React from "react";
import "./App.css";
import {Header} from "./layout/header/Header";
import {NavBar} from "./layout/navBar/NavBar";
import {Profile} from "./layout/sections/profile/Profile";
import {Dialogs} from "./layout/sections/dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {Music} from "./layout/sections/music/Music";
import {News} from "./layout/sections/news/News";
import {Settings} from "./layout/sections/settings/Settings";
import {S} from "./App_Styles";
import {DialogsPageType, FriendType, ProfilePageType, updateNewPostText} from "./redux/State";

type AppPropsType = {
    state: {
        profilePage: ProfilePageType
        dialogsPage: DialogsPageType
        friends: FriendType[]
    }
    addPost: () => void
    addMessage: (message: string) => void
    updateNewPostText: (newText: string) => void
}

const App: React.FC<AppPropsType> = (props) => {
    return (
        <S.App>
            <Header/>
            <NavBar/>
            <S.ContentWrap>
                <Routes>
                    <Route
                        path="/"
                        element={<Profile
                            profilePage={props.state.profilePage}
                            friends={props.state.friends}
                            addPost={props.addPost}
                            updateNewPostText={updateNewPostText}
                        />}
                    />
                    <Route
                        path="dialogs/*"
                        element={<Dialogs addMessage={props.addMessage} state={props.state.dialogsPage}/>}
                    />
                    <Route
                        path="news"
                        element={<News/>}
                    />
                    <Route
                        path="music"
                        element={<Music/>}
                    />
                    <Route
                        path="settings"
                        element={<Settings/>}
                    />
                </Routes>
            </S.ContentWrap>
        </S.App>
    )
}
export default App;


