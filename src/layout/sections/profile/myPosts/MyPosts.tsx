import {S} from "./MyPosts_Styles";
import {Post} from "./Post/Post";
import {PostType} from "../../../../index";

type MyPostsPropsType = {
    posts: PostType[]
}

export const MyPosts = (props: MyPostsPropsType) => {


    return (
        <div>
            <S.SubmitPost>
                <textarea placeholder='Что у вас нового?'></textarea>
                <button>Опубликовать</button>
            </S.SubmitPost>
            <S.Posts>
                {props.posts.map(p => <Post id={p.id} message={p.message} likeCounts={p.likesCount}/>)}
            </S.Posts>
        </div>
    );
};