import Friend from "./friend/Friend";
import {S} from "./Friends.styles";
import {Container} from "../../../../components/Container";
import {FriendType} from "../../../../redux/State";

type FriendsPropsType = {
    friends: FriendType []
}

export const Friends = (props: FriendsPropsType) => {

    const friendsList = props.friends.map((friend: FriendType) => <Friend key={friend.id} friend={friend}/>)

    return (
        <Container>
            <h3>Друзья</h3>
            <S.CardsWrapper>
                {friendsList}
            </S.CardsWrapper>
        </Container>
    );
};