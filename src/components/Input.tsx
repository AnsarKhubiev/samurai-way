import React, {ChangeEvent, forwardRef, TextareaHTMLAttributes} from 'react';
import styled from "styled-components";
import {theme} from "../styles/theme";

type InputPropsType = {
    callback: (value: string) => void;
    value?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export const Input: React.FC<InputPropsType> = (props) => {
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.callback(e.currentTarget.value)
    }

    return (
        <StyledInput placeholder={'Напишите сообщение...'}
                     value={props.value}
                     onChange={onChangeHandler}
        />
    )
}

const StyledInput = styled.textarea`
    background-color: ${theme.colors.transparentGray2};
    border: 1px solid ${theme.colors.ProfileCoverBg};
    color: ${theme.colors.colorTextPrimary};
    outline: none;
    width: 100%;
    min-height: 36px;
    max-height: 200px;
    padding: 10px;
    border-radius: 6px;
    text-align: start;
`