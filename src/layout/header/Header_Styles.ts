import styled from "styled-components";
import {theme} from "../../styles/theme";

const Header = styled.div`
  grid-area: h;
  display: flex;
  align-items: center;
  height: 48px;
  background-color: ${theme.colors.secondaryBg};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 0 15px;
`
const Logo = styled.img`
  width: 50px;
`

const HomeLink = styled.a`
`

export const S = {
    Header,
    HomeLink,
    Logo,
}