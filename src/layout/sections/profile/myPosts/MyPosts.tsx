import {S} from "./MyPosts_Styles";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            <S.SubmitPost>
                <textarea placeholder='Что у вас нового?'></textarea>
                <button>Опубликовать</button>
            </S.SubmitPost>
            <S.Posts>
                <Post message="Hi, how are you?" likeCounts={15}/>
                <Post message="It's my first post!" likeCounts={20}/>
            </S.Posts>
        </div>
    );
};