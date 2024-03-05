import React from 'react';
import {S} from "./NavBar_Styles";

export const NavBar = () => {
    return (
        <S.NavBar>
            <a>Profile</a>
            <a>Messages</a>
            <a>News</a>
            <a>Music</a>
            <a>Settings</a>
        </S.NavBar>
    );
};