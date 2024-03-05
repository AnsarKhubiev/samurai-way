import styled from "styled-components";
import {theme} from "../../../styles/theme";

const Profile = styled.div`
  background-color: ${theme.colors.secondaryBg};
`

const PageCover = styled.img`
  width: 100%;
`

const Avatar = styled.img`
  width: 150px;
  border: 3px solid ${theme.colors.secondaryBg};
  border-radius: 50%;
`

export const S = {
    Profile,
    PageCover,
    Avatar,
}