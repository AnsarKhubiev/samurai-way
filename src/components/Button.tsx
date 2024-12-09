import styled from "styled-components";
import {theme} from "../styles/theme";

type ButtonPropsType = {
    text?: string
    color?: string
    onClick?: () => void
    width?: number
    height?: number
    bgColorOfHover?: string
    bgColor?: string
    borderRadius?: number
    fontSize?: number
    fontWeight?: number
}


export const Button = styled.button<ButtonPropsType>`
    all: unset;
    width: ${props => (props.width) ? props.width + 'px' : 'fit-content'};
    height: ${props => (props.height) ? props.height + 'px' : 'fit-content'};
    color: ${props => props.color || theme.colors.btnTextColor};
    background-color: ${props => props.bgColor || "inherit"};
    cursor: pointer;
    font-size: ${props => props.fontSize || 14}px;
    font-weight: ${props => props.fontWeight || 500};
    padding: 6px 16px;
    border-radius: ${props => props.borderRadius || 8}px;

    &:hover {
        background-color: ${props => props.bgColorOfHover || props.bgColor};
    }

`