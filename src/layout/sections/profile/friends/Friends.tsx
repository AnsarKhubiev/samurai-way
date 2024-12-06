import {FriendType} from "../../../../index";
import Friend from "./friend/Friend";
import {S} from "./Friends.styles";
import {Container} from "../../../../components/Container";

type FriendsPropsType = {
    friends: FriendType []
}

export const Friends = (props: FriendsPropsType) => {

    const friendsList = props.friends.map((friend: FriendType) => <Friend key={friend.id} friend={friend}/>)

    return (
        <Container>
            <S.Title>Друзья</S.Title>
            <S.CardsWrapper>
                {friendsList}
            </S.CardsWrapper>
        </Container>
    );
};