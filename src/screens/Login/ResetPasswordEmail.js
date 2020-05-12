import React, { Component } from 'react';
import styled from 'styled-components';
import LogoWhite from '../../assets/logo-petronect-white.png';
import Input from '../../components/Petronect/Inputs/Input';
import Button from '../../components/Petronect/Button/Button';

const Overlay = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to bottom, #115680, #116EA0);
`;

const ImageLogo = styled.img`
    width: 11.25em;
    margin-bottom: 5rem;

    @media(max-width: 640px){
        margin-bottom: 2rem;
    }
`;

const Container = styled.div`
    width: 30vw;
    min-height: 33vh;
    background: #FFF;
    border-radius: 0.25em;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media(max-width: 768px){
        width: 70%;
    }

    @media(max-width: 640px){
        width: 95%;
    }
`;

const ContainerTitle = styled.h1`
    margin-bottom: 1rem;
    align-self: flex-start;
    margin-left: 2rem;
    color: #116EA0;
`;

export default class ResetPassword extends Component {
    render() {
        return (
            <Overlay>
                <ImageLogo src={LogoWhite} />
                <Container>
                    <ContainerTitle>Password reset</ContainerTitle>
                    <Input labelText="Email" placeholder="name@email.com" />
                    <Button
                        background="#115680"
                        width="20rem"
                        height="3rem"
                        margin="1rem 0"
                    >
                        Request Password reset
                    </Button>
                    <Button color="#505050"><u>Back to login</u></Button>
                </Container>
            </Overlay>
        );
    }
}