import React from 'react';
import logo from "../../assets/images/logo.png";
import {S} from "./Header_Styles";


export const Header = () => {
    return (
        <S.Header>
            <S.HomeLink href="#">
            <S.Logo src={logo} alt="logo"/>
            </S.HomeLink>
        </S.Header>
    );
};