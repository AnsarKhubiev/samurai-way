import {S} from "./Profile_Styles";
import {ProfileHeader} from "./profileHeader/ProfileHeader";
import {MyPosts} from "./myPosts/MyPosts";
import {FriendType, PostType} from "../../../index";
import {Friends} from "./friends/Friends";

type ProfilePropsType = {
    state:{
        posts: PostType[]
    }
    friends: FriendType[]
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <S.Profile>
            <ProfileHeader/>
            <MyPosts posts={props.state.posts} />
            <Friends friends={props.friends} />
        </S.Profile>
    );
};