import React from "react";
import {S} from "./DialogsItem_Styles"
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: string
}

export const DialogsItem = (props: DialogItemPropsType) => {
    return (
        <S.Item id={props.id}>
            <NavLink to={props.id}>{props.name}</NavLink>
        </S.Item>
    )
}