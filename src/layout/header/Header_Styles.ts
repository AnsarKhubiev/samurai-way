import styled from "styled-components";
import {theme} from "../../styles/theme";

const Header = styled.div`
  grid-area: h;
  background-color: ${theme.colors.secondaryBg};
`
const Logo = styled.img`
  width: 50px;
`

export const S = {
    Header,
    Logo,
}