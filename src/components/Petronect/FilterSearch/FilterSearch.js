import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: ${props => props.width};
    height: 2em;

    @media(max-width: 768px){
        width: 98%;
        margin: .25rem;
    }
`;

const InputSearch = styled.input`
    width: 100%;
    height: 100%;
    border: 0.0625em solid #116EA0;
    border-radius: 0.9375em;
    padding: 0 0.5rem;
    padding-left: 1rem;
    outline: none;
`;

const Icon = styled.div`
    position: absolute;
    top: .7rem;
    right: 1rem;
    width: 0.625em;
    height: 0.625em;
    background: #116EA0;
`;

const Title = styled.p`
    margin-right: 1rem;
    color: #116EA0;
`;

const FilterSearch = (props) => {
    return (
        <Box width={props.width || '400px'}>
            {props.hasTitle && <Title>Filtrar</Title>}
            <InputSearch type="text" placeholder={props.placeholder} icon={props.icon} onChange={props.onChange}/>
            <Icon></Icon>
        </Box>
    );
}

export default FilterSearch;