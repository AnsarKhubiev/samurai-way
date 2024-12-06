import styled from "styled-components";

export const Avatar = styled.img`
    min-width: ${props => props.sizes || '40px'};
    height: ${props => props.sizes || '40px'};
    border-radius: 50%;
`