import styled from "styled-components";

const App = styled.div`
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

export const S = {
    App,
    ContentWrap
}