import "./App.css";
import {Header} from "./layout/header/Header";
import {NavBar} from "./layout/navBar/NavBar";
import {Profile} from "./layout/sections/profile/Profile";
import styled from "styled-components";

const App = () => {
    return (
        <StyledApp>
            <Header/>
            <NavBar/>
            <ContentWrap>
                <Profile/>
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