import {S} from "./MyPosts_Styles";
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>New post</div>
            <S.Posts>
                <Post message='Hi, how are you?' likeCounts ={15}/>
                <Post message="It's my first post!" likeCounts = {20}/>
            </S.Posts>
        </div>
    );
};