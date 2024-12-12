import React from "react";
import {S} from "./Dialogs_Styles"
import {Container} from "../../../components/Container";
import {DialogsItem} from "./dialogsItem/DialogsItem";
import {Message} from "./message/Message";
import {Icon} from "../../../components/Icon";
import {theme} from "../../../styles/theme";
import {Input} from "../../../components/Input";
import {sendMessageAC, updateNewMessageTextAC, StoreType} from "../../../redux/State";

type DialogsPropsType = {
    store: StoreType
}

export const Dialogs = (props: DialogsPropsType) => {
    const state = props.store.getState().dialogsPage

    const dialogItems = state.dialogs.map(d => <DialogsItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    const onSendMessageClick = () => props.store.dispatch(sendMessageAC())

    const onMessageChange = (newText: string) => props.store.dispatch(updateNewMessageTextAC(newText));

    return (
        <S.Dialogs>
            <Container>
                {dialogItems}
            </Container>
            <Container>
                <S.ChatBody>{messagesElements}</S.ChatBody>

                <S.ChatInputWrapper>
                    <Input value={state.newMessageText} callback={onMessageChange}/>
                    <S.Button onClick={onSendMessageClick}>
                        <Icon iconId={'send'} color={theme.colors.transparentGray}/>
                    </S.Button>
                </S.ChatInputWrapper>
            </Container>
        </S.Dialogs>
    );
};