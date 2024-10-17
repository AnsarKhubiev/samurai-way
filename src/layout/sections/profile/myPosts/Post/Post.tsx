import {S} from "./Post_Styles";
import avatar from "../../../../../assets/images/avatar-default.png"

type PostPropsType = {
    message: string
    likeCounts: number
}

export const Post = (props: PostPropsType) => {
    return (
        <S.Post>
            <S.PostHeader>
                <img src={avatar} alt="avatar"/>
                <span>Ansar Khubiev</span>
            </S.PostHeader>
            <S.PostText>
                <span>{props.message}</span>
            </S.PostText>
            <S.PostButtons>
                <button>like</button>
                {props.likeCounts}
            </S.PostButtons>
        </S.Post>
    );
};