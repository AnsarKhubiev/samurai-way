import styled from "styled-components";

const CardsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-row-gap: 1.5rem;
    padding: 14px;
`

const Title = styled.h3`
    margin: 14px auto 0 14px;
`

export const S = {
    CardsWrapper,
    Title
}