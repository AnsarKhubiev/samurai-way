import {S} from "./Profile_Styles";
import {ProfileHeader} from "./profileHeader/ProfileHeader";
import {MyPosts} from "./myPosts/MyPosts";

export const Profile = () => {
    return (
        <S.Profile>
            <ProfileHeader/>
            <MyPosts/>
        </S.Profile>
    );
};