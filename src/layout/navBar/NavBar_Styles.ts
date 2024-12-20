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
  
  a {
    height: 100%;
    display: flex;
    align-items: center;
    column-gap: 10px;
  }
  
  svg {
    color: ${theme.colors.accent};
  }

  .active {
    color: ${theme.colors.accent};
  }
  
  &:hover {
    background-color: ${theme.colors.transparentGray2};
    border-radius: 4px;
  }
`

export const S = {
    NavBar,
    Menu,
    LeftMenuItemContainer,
}