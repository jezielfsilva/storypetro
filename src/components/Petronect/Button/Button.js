import React from 'react';
import styled from 'styled-components';

const ButtonS = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 0.25em;
    border: 0;
    font-size: 1em;
    color: ${props => props.color};
    background: ${props => props.background};
    margin: ${props => props.margin};
`;

const Button = (props) => {
    return (
    <ButtonS
        icon={props.icon}
        background={props.background || 'transparent'}
        onClick={props.onClick}
        width={props.width}
        height={props.height}
        color={props.color || '#FFF'}
        margin={props.margin}>
            {props.children}
    </ButtonS>
    );
}

export default Button;