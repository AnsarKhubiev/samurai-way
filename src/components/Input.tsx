import React, {ChangeEvent, TextareaHTMLAttributes, useRef} from 'react';
import styled from "styled-components";
import {theme} from "../styles/theme";

type InputPropsType = {
    callback: (value: string) => void;
    value?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>

export const Input: React.FC<InputPropsType> = (props) => {

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.callback(e.currentTarget.value)
        autoResize();
    }

    // Автоматическая регулировка высоты
    const autoResize = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto'; // Сбрасываем высоту
            textarea.style.height = `${textarea.scrollHeight}px`; // Устанавливаем высоту по содержимому
        }
    };


    return (
        <StyledInput placeholder={'Напишите сообщение...'}
                     ref={textareaRef}
                     value={props.value}
                     onChange={onChangeHandler}
                     onInput={autoResize} // Пересчитываем высоту при вводе
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
    overflow: hidden;
    resize: none;
    padding: 10px;
    border-radius: 6px;
    text-align: start;
`