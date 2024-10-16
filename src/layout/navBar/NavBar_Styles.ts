import styled from "styled-components";
import {theme} from "../../styles/theme";

const NavBar = styled.nav`
  grid-area: n;
  display: flex;
  flex-direction: column;
`

const Menu = styled.ul`
`

const LeftMenuItemContainer = styled.li`
    color: ${theme.colors.colorTextPrimary};
`

export const S = {
    NavBar,
    Menu,
    LeftMenuItemContainer,
}