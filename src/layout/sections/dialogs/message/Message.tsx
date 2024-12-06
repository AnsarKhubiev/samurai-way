import {S} from './Message_Styles';
import {Avatar} from "../../../../components/Avatar";
import photo from '../../../../assets/images/avatar.png'

type MessagePropsType = {
    message: string
    id: string
}

export const Message = (props: MessagePropsType) => {
    return (
        <>
            <S.IncomingMessageWrapper>
                <Avatar src={photo} sizes='34px'/>
                <S.Message>
                    {props.message}
                </S.Message>
            </S.IncomingMessageWrapper>


            <S.SendMessageWrapper>
                <S.Message>
                    {props.message}
                </S.Message>
                <Avatar src={photo} sizes='34px'/>
            </S.SendMessageWrapper>
        </>
    )
}