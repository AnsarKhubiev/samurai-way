import avatar from "../../../../assets/images/avatar-default.png";
import {S} from "../Profile_Styles";

export const ProfileHeader = () => {
    return (
        <>
            <S.PageCover/>
            <S.ProfileHeaderWrapper>
                <S.Avatar src={avatar} alt="Фотография пользователя"/>
                <S.ProfileInfo>
                    <h2>Ansar Khubiev</h2>
                    <span>Дорогу осилит идущий</span>
                </S.ProfileInfo>
            </S.ProfileHeaderWrapper>
        </>
    );
};