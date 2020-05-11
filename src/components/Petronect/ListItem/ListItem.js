import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0.4rem;
    border-radius: 0.25em;
    background: ${props => props.background};
    cursor: pointer;

    &:hover {
        background: #CECECE15;
    }

    &:nth-child(even) { background: #FFF }
    &:nth-child(odd) { background: #F7F7F7 }
`;

const ListItem = (props) => {
    return (
        <List background={props.background}>
            <Item>x</Item>
            <Item>81%</Item>
            <Item>Petróleo Brasileiro S.A</Item>
            <Item>7003056165</Item>
            <Item>Aquisição de Compressor</Item>
            <Item>2020-04-15</Item>
            <Item>2020-04-15</Item>
        </List>
    );
}

export default ListItem;