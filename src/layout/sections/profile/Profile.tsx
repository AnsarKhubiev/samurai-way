import {S} from "./Profile_Styles";
import {ProfileHeader} from "./profileHeader/ProfileHeader";
import {MyPosts} from "./myPosts/MyPosts";
import {PostType} from "../../../index";

type ProfilePropsType = {
    posts: PostType[]
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <S.Profile>
            <ProfileHeader/>
            <MyPosts posts={props.posts}/>
        </S.Profile>
    );
};