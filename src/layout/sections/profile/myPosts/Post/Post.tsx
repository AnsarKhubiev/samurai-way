import {S} from "./Post_Styles";
import avatar from "../../../../../assets/images/avatar-default.png"

type PostPropsType = {
    message: string
    likeCounts: number
}

export const Post = (props: PostPropsType) => {
    return (
        <S.Post>
            <img src={avatar} alt="avatar"/>
            <span>{props.message}</span>
            <div>
                <span>like</span>
                {props.likeCounts}
            </div>
        </S.Post>
    );
};