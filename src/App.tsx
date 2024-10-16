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

const App = () => {
    return (
        <StyledApp>
            <Header/>
            <NavBar/>
            <ContentWrap>
                <Routes>
                    <Route path="profile" Component={Profile}/>
                    <Route path="dialogs" Component={Dialogs}/>
                    <Route path="news" Component={News}/>
                    <Route path="music" Component={Music}/>
                    <Route path="settings" Component={Settings}/>
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
  grid-template-rows: 50px 1fr;
  gap: 16px;
  grid-template-areas:
            'h h'
            'n c';
`

const ContentWrap = styled.div`
  grid-area: c;
`