import React from "react";
import {S} from "./DialogsItem_Styles"
import {NavLink} from "react-router-dom";
import ava from '../../../../assets/images/avatar.png'
import {Avatar} from "../../../../components/Avatar";

type DialogItemPropsType = {
    name: string
    id: string
}

export const DialogsItem = (props: DialogItemPropsType) => {
    return (
        <S.Item id={props.id}>
            <NavLink to={props.id}>
                <Avatar src={ava} />
                <S.DialogTitle>
                    <S.Name>{props.name}</S.Name>
                    <S.TextPreview>Последнее сообщение</S.TextPreview>
                </S.DialogTitle>
            </NavLink>
        </S.Item>
    )
}