import React from "react";
import {S} from "./NavBar_Styles";

export const NavBar = () => {
    return (
        <S.NavBar>
            <S.Menu>
                <S.LeftMenuItemContainer>
                    <a href="#">Profile</a>
                </S.LeftMenuItemContainer>

                <S.LeftMenuItemContainer>
                    <a href="#">Messages</a>
                </S.LeftMenuItemContainer>

                <S.LeftMenuItemContainer>
                    <a href="#">News</a>
                </S.LeftMenuItemContainer>

                <S.LeftMenuItemContainer>
                    <a href="#">Music</a>
                </S.LeftMenuItemContainer>

                <S.LeftMenuItemContainer>
                    <a href="#">Settings</a>
                </S.LeftMenuItemContainer>
            </S.Menu>
        </S.NavBar>
    );
};