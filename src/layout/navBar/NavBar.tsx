import React from "react";
import {S} from "./NavBar_Styles";
import {NavLink} from "react-router-dom";
import {Icon} from "../../components/Icon";

export const NavBar = () => {
    return (
        <S.NavBar>
            <S.Menu>
                <S.LeftMenuItemContainer>
                    <NavLink to="/profile" >
                        <Icon iconId='profile' height={20} width={20} viewBox='0 0 20 20'/>
                        Profile
                    </NavLink>
                </S.LeftMenuItemContainer>

                <S.LeftMenuItemContainer>
                    <NavLink to="/dialogs">Messages</NavLink>
                </S.LeftMenuItemContainer>

                <S.LeftMenuItemContainer>
                    <NavLink to="/news">News</NavLink>
                </S.LeftMenuItemContainer>

                <S.LeftMenuItemContainer>
                    <NavLink to="/music">Music</NavLink>
                </S.LeftMenuItemContainer>

                <S.LeftMenuItemContainer>
                    <NavLink to="/settings">Settings</NavLink>
                </S.LeftMenuItemContainer>
            </S.Menu>
        </S.NavBar>
    );
};