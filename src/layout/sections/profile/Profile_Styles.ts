import styled from "styled-components";
import {theme} from "../../../styles/theme";
import {Container} from "../../../components/Container";
import {font} from "../../../styles/Common";

const Profile = styled.div`
    display: grid;
    grid-template-columns:  3fr 2fr;
    grid-column-gap: 16px;
`
const PageCover = styled(Container)`
    grid-column: 1/3;
    height: 252px;
    background-color: ${theme.colors.ProfileCoverBg};
`
const ProfileHeaderWrapper = styled(Container)`
    grid-column: 1/3;
    display: flex;
    column-gap: 16px;
    margin-top: -50px;
    padding: 20px;
`

const ProfileAvatar = styled.img`
    width: 150px;
    border: 3px solid ${theme.colors.secondaryBg};
    border-radius: 50%;
    margin-top: -95px;
`

const ProfileInfo = styled.div`
    h2 {
        font: ${font({weight: 500, Fmin: 21, Fmax: 21, lineHeight: '26px'})}
    }

    span {
        display: inline-block;
        margin-top: 6px;
    }
`

export const S = {
    Profile,
    PageCover,
    ProfileAvatar,
    ProfileHeaderWrapper,
    ProfileInfo,
}