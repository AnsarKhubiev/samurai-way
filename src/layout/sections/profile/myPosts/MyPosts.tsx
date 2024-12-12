import {S} from "./MyPosts_Styles";
import {Post} from "./Post/Post";
import React from "react";
import {Input} from "../../../../components/Input";
import {theme} from "../../../../styles/theme";
import {Button} from "../../../../components/Button";
import {ActionType, addPostAC, PostType, updateNewPostTextAC} from "../../../../redux/State";

type MyPostsPropsType = {
    posts: PostType[]
    newPostText: string
    dispatch: (action: ActionType) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const postsElements = props.posts.map(p => {
        return <Post key={p.id} id={p.id} message={p.message} likeCounts={p.likesCount}/>
    })

    const addPost = () => props.dispatch(addPostAC())

    const onPostChange = (newText: string) => props.dispatch(updateNewPostTextAC(newText));

    return (
        <div>
            <S.SubmitPost>
                <Input value={props.newPostText} callback={onPostChange}/>
                <Button onClick={addPost} bgColor={theme.colors.btnColor}>Создать пост</Button>
            </S.SubmitPost>
            <S.Posts>
                {postsElements}
            </S.Posts>
        </div>
    );
};