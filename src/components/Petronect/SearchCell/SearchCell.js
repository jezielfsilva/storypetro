import React from 'react';
import styled from 'styled-components';

//Style
const Cell = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.5rem;
    padding: .3rem;
    border-radius: 0.625em;
    color: #505050;
    background: #FAB61D40;
`;

const Icon = styled.div`
    font-size: .85rem;
`;

const Title = styled.p`
    margin: 0;
    font-size: .85rem;
    margin-right: .2rem;
`;

const SearchCell = (props) => {
    return (
        <Cell>
            <Title>parafuso</Title>
            <Icon>x</Icon>
        </Cell>
    );
}

export default SearchCell;