import {S} from "./Profile_Styles";
import {ProfileHeader} from "./profileHeader/ProfileHeader";
import {MyPosts} from "./myPosts/MyPosts";
import {Friends} from "./friends/Friends";
import {ActionType, FriendType, ProfilePageType} from "../../../redux/State";

type ProfilePropsType = {
    profilePage: ProfilePageType
    friends: FriendType []
    dispatch: (action: ActionType) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <S.Profile>
            <ProfileHeader/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />
            <Friends friends={props.friends}/>
        </S.Profile>
    );
};