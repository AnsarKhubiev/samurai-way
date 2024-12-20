import React from 'react';
import {S} from "./Friend.styles";
import photo from "../../../../../assets/images/avatar.png";
import {Avatar} from "../../../../../components/Avatar";
import {FriendType} from "../../../../../redux/State";

type FriendPropsType = {
    friend: FriendType
}

const Friend = (props: FriendPropsType) => {
    return (
        <S.FriendCard>
            <S.FriendLink href={props.friend.link}>
                <Avatar src={photo} sizes={'64px'}/>
                <S.FriendName>{props.friend.name}</S.FriendName>
            </S.FriendLink>
        </S.FriendCard>
    );
};

export default Friend;