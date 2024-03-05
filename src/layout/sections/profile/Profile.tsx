import React from 'react';
import {ProfileHeader} from "./profileHeader/ProfileHeader";
import {S} from "./Profile_Styles";

export const Profile = () => {
    return (
        <S.Profile>
            <ProfileHeader/>
            <div>My posts</div>
            <div>post 1</div>
            <div>post 2</div>
        </S.Profile>
    );
};