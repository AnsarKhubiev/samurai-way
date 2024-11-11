import React from "react";
import {S} from "./NavBar_Styles";
import {NavLink} from "react-router-dom";
import {Icon} from "../../components/Icon";

export const NavBar = () => {
    return (
        <S.NavBar>
            <S.Menu>
                <S.LeftMenuItemContainer>
                    <NavLink to="/" >
                        <Icon iconId='profile'/>
                        <span>Profile</span>
                    </NavLink>
                </S.LeftMenuItemContainer>

                <S.LeftMenuItemContainer>
                    <NavLink to="/dialogs">
                        <Icon iconId='message'/>
                        <span>Messages</span>
                    </NavLink>
                </S.LeftMenuItemContainer>

                <S.LeftMenuItemContainer>
                    <NavLink to="/news">
                        <Icon iconId='news'/>
                        <span>News</span>
                    </NavLink>
                </S.LeftMenuItemContainer>

                <S.LeftMenuItemContainer>
                    <NavLink to="/music">
                        <Icon iconId='music'/>
                        <span>Music</span>
                    </NavLink>
                </S.LeftMenuItemContainer>

                <S.LeftMenuItemContainer>
                    <NavLink to="/settings">
                        <Icon iconId='settings'/>
                        <span>Settings</span>
                    </NavLink>
                </S.LeftMenuItemContainer>
            </S.Menu>
        </S.NavBar>
    );
};