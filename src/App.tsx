import "./App.css";
import {Header} from "./layout/header/Header";
import {NavBar} from "./layout/navBar/NavBar";
import styled from "styled-components";
import {Profile} from "./layout/sections/profile/Profile";
import {Dialogs} from "./layout/sections/dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {Music} from "./layout/sections/music/Music";
import {News} from "./layout/sections/news/News";
import {Settings} from "./layout/sections/settings/Settings";
import {DialogItemType, FriendType, MessageType, PostType} from "./index";

type AppPropsType = {
    state: {
        profilePage: {
            posts: PostType[]

        }
        dialogsPage: {
            messages: MessageType[]
            dialogs: DialogItemType[]
        }
        friends: FriendType[]
    }
}

const App = (props: AppPropsType) => {
    return (
        <StyledApp>
            <Header/>
            <NavBar/>
            <ContentWrap>
                <Routes>
                    <Route
                        path="/"
                        element={<Profile state={props.state.profilePage} friends={props.state.friends} />}
                    />
                    <Route
                        path="dialogs/*"
                        element={<Dialogs state={props.state.dialogsPage}/>}
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
            </ContentWrap>
        </StyledApp>
    )
}
export default App;


const StyledApp = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
    display: grid;
    grid-template-columns: 2fr 10fr;
    grid-template-rows: 48px 1fr;
    gap: 16px;
    grid-template-areas:
            'h h'
            'n c';
`

const ContentWrap = styled.div`
    grid-area: c;
`