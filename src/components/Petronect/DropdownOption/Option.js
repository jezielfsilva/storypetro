import React from 'react';
import styled from 'styled-components';

//Style
const Item = styled.div`
    position: relative;
    display: flex;
    width: calc(100% - 2rem);
    align-items: center;
    padding: .6rem 1rem;
    border-radius: 0 0 0 0.25em;
    color: #026992;
    background: #8C8C8C15;
    cursor: pointer;
`;

const Icon = styled.div`
    position: absolute;
    left: 1rem;
    bottom: .5rem;
    font-size: 1rem;
`;

const Title = styled.p`
    width: 100%;
    margin: 0;
    font-size: 0.75rem;
    font-family: arial;
    margin-left: 1.25rem;
    font-weight: 200;

    &:hover {
        font-weight: 600;
    }
`;

const DropdownOption = (props) => {
    return (
        <Item>
            <Icon>x</Icon>
            <Title>{props.title}</Title>
        </Item>
    );
}

export default DropdownOption;