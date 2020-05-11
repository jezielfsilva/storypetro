import React from 'react';
import styled from 'styled-components';

// Style
const Item = styled.div`
    position: relative;
    display: flex;
    width: calc(100% - 2rem);
    align-items: center;
    padding: .6rem 1rem;
    border-radius: ${props => (props.isOpen ? '0.25em 0 0 0' : '0.25em 0 0 0.25em')};
    color: #026992;
    background: ${props => props.isOpen && '#116EA020'};
    cursor: pointer;

    &:hover {
        background: #116EA020;
    }
`;

const Icon = styled.div`
    position: absolute;
    left: ${props => !props.arrow && '1rem'};
    right: ${props => props.arrow && '2rem'};
    bottom: .5rem;
    font-size: 1rem;
    transform: ${props => props.arrow && 'rotate(90deg)'};
`;