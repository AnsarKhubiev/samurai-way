import styled from "styled-components";
import {theme} from "../../../../styles/theme";

const Item = styled.div`
  padding: 0 8px;

  &:first-child {
    padding: 8px 8px 4px;
  }
  &:nth-child(1n+2) {
    padding-bottom: 4px;
  }
  &:last-child {
    padding-bottom: 8px;
  }
  
  a {
    padding: 5px 12px;
    display: inline-block;
    width: 100%;

    &.active, :hover {
      background-color: ${theme.colors.transparentGray};
      border-radius: 10px;
    }
  }
`

export const S = {
    Item,
}