import styled from "styled-components";
import {theme} from "../../../../../styles/theme";

const FriendCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 6px;
    padding: 6px;
    
    :hover {
        background-color: ${theme.colors.transparentGray2};
    }
    
`
const FriendLink = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 4px;
`

const FriendName = styled.span`
    
`


export const S = {
    FriendCard,
    FriendName,
    FriendLink,
}