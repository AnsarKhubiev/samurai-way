import styled from "styled-components";
import {theme} from "../../../../styles/theme";

const IncomingMessageWrapper = styled.div`
    align-self: start;
    display: flex;
    align-items: center;
    gap: 1rem;
`

const SendMessageWrapper = styled.div`

    align-self: end;
    display: flex;
    align-items: center;
    gap: 1rem;

    & div {
        background-color: ${theme.colors.accentDark};
    }
`

const Message = styled.div`
    background-color: ${theme.colors.transparentGray};
    max-width: 420px;
    padding: 7px;
    border-radius: 5px;
    word-break: break-all;
`

export const S = {
    IncomingMessageWrapper,
    SendMessageWrapper,
    Message,
}