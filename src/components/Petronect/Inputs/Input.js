import React from 'react';
import styled from 'styled-components';

const InputForm = styled.input`
    width: 20rem;
    height: 3rem;
    border-radius: 0.25em;
    border: 0.0625em solid #7FBA4C;
    padding: 0 0.5rem;
    outline: none;
    margin: ${props => props.margin};
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;

    p{
        color: #7FBA4C;
        margin-left: 0.5rem;
        font-family: 'Open Sans', sans-serif;
        font-size: 0.8125em;
    }
`;


export default function input(props) {
    return (
        <>
            <Label>
                <p>{props.label}</p>
                <InputForm onChange={props.onChange} placeholder={props.placeholder} type={props.type} margin={props.margin}/>
            </Label>
        </>
    );
}