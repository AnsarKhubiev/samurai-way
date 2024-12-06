import styled from "styled-components";
import {Container} from "../../../components/Container";


const Dialogs = styled.div`
  display: grid;
  grid-template-columns: 4fr 10fr;
  column-gap: 10px;
`

const ChatWrapper = styled(Container)`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    padding: 20px;
`

export const S = {
    Dialogs,
    ChatWrapper
}