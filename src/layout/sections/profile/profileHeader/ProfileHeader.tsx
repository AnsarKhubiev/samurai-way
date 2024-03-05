import React from 'react';
import cover from "../../../../assets/images/cover.png";
import avatar from "../../../../assets/images/avatar-default.png";
import {S} from "../Profile_Styles";

export const ProfileHeader = () => {
    return (
        <div className='ProfileHeader'>
            <S.PageCover src={cover} alt="cover"/>
            <div>
                <S.Avatar src={avatar} alt="Фотография пользователя"/>
                <div className='ProfileInfo'>
                    description
                </div>
            </div>
        </div>
    );
};