import React, {useRef} from "react";
import {S} from "./Dialogs_Styles"
import {Container} from "../../../components/Container";
import {DialogsItem} from "./dialogsItem/DialogsItem";
import {Message} from "./message/Message";
import {Icon} from "../../../components/Icon";
import {theme} from "../../../styles/theme";
import {Input} from "../../../components/Input";
import {DialogType, MessageType} from "../../../redux/State";

type DialogsPropsType = {
    state: {
        dialogs: DialogType[]
        messages: MessageType[]
    }
    addMessage: (message: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogItems = props.state.dialogs.map(d => <DialogsItem key={d.id} name={d.name} id={d.id}/>)
    const messagesElements = props.state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)

    const addMessage = () => {
        // const element = newMessageElement.current
        // if (element) {
        //     props.addMessage(element.value)
        //     element.value = ''
        // }
    }

    return (
        <S.Dialogs>
            <Container>
                {dialogItems}
            </Container>
            <Container>
                <S.ChatBody>{messagesElements}</S.ChatBody>
                <S.ChatInputWrapper>
                    <Input callback={addMessage}/>
                    <S.Button onClick={addMessage}>
                        <Icon iconId={'send'} color={theme.colors.transparentGray}/>
                    </S.Button>
                </S.ChatInputWrapper>
            </Container>
        </S.Dialogs>
    );
};