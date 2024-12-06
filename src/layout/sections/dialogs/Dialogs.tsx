import React from "react";
import {S} from "./Dialogs_Styles"
import {Container} from "../../../components/Container";
import {DialogsItem} from "./dialogsItem/DialogsItem";
import {Message} from "./message/Message";
import {DialogItemType, MessageType} from "../../../index";

type DialogsPropsType = {
    state: {
        dialogs: DialogItemType[]
        messages: MessageType[]
    }
}

export const Dialogs = (props: DialogsPropsType) => {


    const dialogItems = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    const messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <S.Dialogs>
            <Container>
                {dialogItems}
            </Container>
            <S.ChatWrapper>{messagesElements}</S.ChatWrapper>
        </S.Dialogs>
    );
};