import styled from "styled-components";
import {theme} from "../../../styles/theme";

const Profile = styled.div`
  background-color: ${theme.colors.secondaryBg};
`

const ProfileHeader = styled.div`
outline: 1px solid red;
`

const PageCover = styled.div`
  width: 100%;
  height: 252px;
  background-color: rgba(207, 217, 233, .32);
`
const ProfileHeaderWrapper = styled.div`
  outline: 1px solid red;
  display: flex;
  position: relative;
  margin-top: -25px;
  padding: 20px;
`

const Avatar = styled.img`
  width: 150px;
  border: 3px solid ${theme.colors.secondaryBg};
  border-radius: 50%;
  margin-top: -70px;
`

const ProfileInfo = styled.div`
`

export const S = {
    Profile,
    PageCover,
    Avatar,
    ProfileHeader,
    ProfileHeaderWrapper,
    ProfileInfo,
}