import React from 'react';
import Buttom from '../../components/Petronect/Button/Button';
import styled from 'styled-components';
import Sucess from '../../assets/create-sucess.svg';
import LogoWhite from '../../assets/logo-petronect-white.png';

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
    margin-bottom: 4rem;
`;

const Container = styled.div`
    width: 30vw;
    min-height: 45vh;
    background: #FFF;
    border-radius: 0.25em;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 1.5em;
    color: #116EA0;
`;

const ImageSucess = styled.img`
`;

export default function CreateSucess() {
    return (
        <Overlay>
            <ImageLogo src={LogoWhite} />
            <Container>
                <Title>Conta criada com sucesso!</Title>
                <ImageSucess src={Sucess}/>
                <Buttom background="#116EA0" width="20rem" height="3rem">Fazer login</Buttom>
            </Container>
        </Overlay>
    );
}