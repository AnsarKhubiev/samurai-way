import {S} from "./Profile_Styles";
import {ProfileHeader} from "./profileHeader/ProfileHeader";
import {MyPosts} from "./myPosts/MyPosts";
import {Friends} from "./friends/Friends";
import {FriendType, ProfilePageType} from "../../../redux/State";

type ProfilePropsType = {
    profilePage: ProfilePageType
    friends: FriendType []
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const Profile = (props: ProfilePropsType) => {

    return (
        <S.Profile>
            <ProfileHeader/>
            <MyPosts
                posts={props.profilePage.posts}
                addPost={props.addPost}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
            <Friends friends={props.friends}/>
        </S.Profile>
    );
};