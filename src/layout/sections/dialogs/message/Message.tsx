import {NavLink} from "react-router-dom";
import React from "react";

type MessagePropsType = {
    message: string
    id: string
}

export const Message = (props: MessagePropsType) => <NavLink to="1">{props.message}</NavLink>