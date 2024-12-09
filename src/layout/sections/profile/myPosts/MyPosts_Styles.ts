import styled from "styled-components";
import {Container} from "../../../../components/Container";

const Posts = styled.div`
`

const SubmitPost = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;
`

export const S = {
    Posts,
    SubmitPost
}