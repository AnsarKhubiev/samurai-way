import styled from "styled-components";
import {theme} from "../../../../styles/theme";

const Item = styled.div`
    padding: 0 8px;

    :first-child {
        padding: 8px 8px 4px;
    }

    :nth-child(1n+2) {
        padding-bottom: 4px;
    }

    :last-child {
        padding-bottom: 8px;
    }

    a {
        display: flex;

        & img {
            margin: 7px;
        }

        &.active, :hover {
            background-color: ${theme.colors.transparentGray};
            border-radius: 10px;
        }
    }
`

const Name = styled.span`
    display: inline-block;
    text-wrap: nowrap;
    margin-bottom: 7px;
`
const TextPreview = styled.span`
    display: inline-block;
    color: ${theme.colors.colorTextSecondary};
`
const DialogTitle = styled.div`
    padding: 7px 8px;
`

export const S = {
    Item,
    Name,
    TextPreview,
    DialogTitle,
}