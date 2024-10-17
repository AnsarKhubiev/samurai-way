import React from "react";
import {S} from "./Dialogs_Styles"
import {NavLink} from "react-router-dom";
import {Container} from "../../../components/Container";

type DialogItemPropsType = {
    name: string
    id: string
}

type MessagePropsType = {
    message: string
}

const DialogItem = ({name, id}: DialogItemPropsType) => {
    return (
        <S.Item id={id}>
            <NavLink to={id}>{name}</NavLink>
        </S.Item>
    )
}

const Message = ({message}: MessagePropsType) => <NavLink to="1">{message}</NavLink>

export const Dialogs = () => {
    return (
        <S.Dialogs>
                <Container>
                    <DialogItem name='Ansar Khubiev' id='1'/>
                    <DialogItem name='Karim Khubiev' id='2'/>
                    <DialogItem name='Ayna Khubieva' id='3'/>
                </Container>
                <Container>
                    <Message message='Hello, Ansar!'/>
                    <Message message='Hello, Karim!'/>
                    <Message message='Hello, Ayna!'/>
                </Container>
        </S.Dialogs>
    );
};