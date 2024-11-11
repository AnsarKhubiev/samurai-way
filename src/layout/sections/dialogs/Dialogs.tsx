import React from "react";
import {S} from "./Dialogs_Styles"
import {Container} from "../../../components/Container";
import {DialogsItem} from "./dialogsItem/DialogsItem";
import {Message} from "./message/Message";
import {DialogItemType, MessageType} from "../../../index";

type DialogsPropsType = {
    dialogs: DialogItemType[]
    messages: MessageType[]
}

export const Dialogs = (props: DialogsPropsType) => {



    const dialogElements = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    const messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <S.Dialogs>
                <Container>{dialogElements}</Container>
                <Container>{messagesElements}</Container>
        </S.Dialogs>
    );
};