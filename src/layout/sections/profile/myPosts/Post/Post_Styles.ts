import styled from "styled-components";
import {Container} from "../../../../../components/Container";

const Post = styled(Container)`
  padding: 16px 20px;
  
  img {
    width: 40px;
    border-radius: 50%;
  }
`
const PostHeader = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
`
const PostText = styled.div`
padding: 8px 0;
`
const PostButtons = styled.div`
    padding-top: 12px;
`


export const S = {
    Post,
    PostHeader,
    PostText,
    PostButtons
}