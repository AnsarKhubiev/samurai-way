import styled from "styled-components";
import {theme} from "../styles/theme";

export const Container = styled.div`
    height: fit-content;
    background-color: ${theme.colors.secondaryBg};
    border-radius: 10px;
    border: 1px solid ${theme.colors.transparentGray};
    margin: 0 0 16px;
    padding: 14px;
`