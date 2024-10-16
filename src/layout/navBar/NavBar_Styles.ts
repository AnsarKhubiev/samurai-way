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
  height: 30px;
  color: ${theme.colors.colorTextPrimary};

  .active {
    color: ${theme.colors.accent};
  }
`

export const S = {
    NavBar,
    Menu,
    LeftMenuItemContainer,
}