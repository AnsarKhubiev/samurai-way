import React from "react";
import {S} from "./NavBar_Styles";

export const NavBar = () => {
    return (
        <S.NavBar>
            <S.Menu>
                <li><a href='#'>Profile</a></li>
                <li><a href='#'>Messages</a></li>
                <li><a href='#'>News</a></li>
                <li><a href='#'>Music</a></li>
                <li><a href='#'>Settings</a></li>
            </S.Menu>
        </S.NavBar>
    );
};