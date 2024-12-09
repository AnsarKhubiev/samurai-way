import styled from "styled-components";
import {theme} from "../../../styles/theme";


const Dialogs = styled.div`
  display: grid;
  grid-template-columns: 4fr 10fr;
  column-gap: 10px;
`

const ChatBody = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 20px;
`

const ChatInputWrapper = styled.div`
    background-color: ${theme.colors.transparentGray2};
    padding: 12px 60px;
    text-align: center;
    display: flex;
    align-items: end;
`



const Button = styled.button`
    all: unset;
    width: 50px;
    height: 36px;
    cursor: pointer;

    :hover {
        & svg {
            fill: ${theme.colors.grayLight};
        }
    }

`

export const S = {
    Dialogs,
    ChatBody,
    ChatInputWrapper,
    Button
}