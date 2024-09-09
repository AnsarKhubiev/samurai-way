// import cover from "../../../../assets/images/cover.png";
import avatar from "../../../../assets/images/avatar-default.png";
import {S} from "../Profile_Styles";

export const ProfileHeader = () => {
    return (
        <S.ProfileHeader>
            <S.PageCover/>
            <S.ProfileHeaderWrapper>
                <S.Avatar src={avatar} alt="Фотография пользователя"/>
                <S.ProfileInfo>
                    description
                </S.ProfileInfo>
            </S.ProfileHeaderWrapper>
        </S.ProfileHeader>
    );
};