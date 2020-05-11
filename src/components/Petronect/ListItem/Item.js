import React from 'react';
import styled from 'styled-components';

const Cell = styled.li`
    padding: .6rem .5rem;
    font: 200 .9rem arial;
    font-weight: ${props => props.bold && '600'};
    color: ${props => (props.bold ? '#8C8C8C' : '#40404095')};
    list-style: none;

    &:nth-child(1) {
        width: 5%;
    }
    &:nth-child(2) {
        width: 10%;
        color: ${props => props.color && '#009D00'};
    }
    &:nth-child(3) {
        width: 20%;
    }
    &:nth-child(4) {
        width: 10%;
    }
    &:nth-child(5) {
        width: 30%;
    }
    &:nth-child(6) {
        width: 15%;
    }
    &:nth-child(7) {
        width: 10%;
    }
`;

const Item = (props) => {
    return (
        <Cell bold={props.bold}>{props.children}</Cell>
    );
}

export default Item;