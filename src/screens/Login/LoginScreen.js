import React, { Component } from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import Input from '../../components/Petronect/Inputs/Input';
import Button from '../../components/Petronect/Button/Button';
import Logo from '../../assets/logo.svg';
import Match from '../../assets/match.svg';
import Desempenho from '../../assets/desempenho.svg';

const Overlay = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: linear-gradient(to bottom, #115680, #116EA0);

    @media(max-width: 768px){
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
    }

    @media(max-width: 640px){
        justify-content: flex-end;
    }
`;

const BlockForm = styled.div`
    width: 45vw;
    height: 90vh;
    background: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25em;
    box-shadow: 0 1px 2px #0000001A;
    align-self: flex-start;

    @media(max-width: 768px){
        align-self: center;
        width: 65vw;
        height: 50vh;
        margin-top: 1rem;
    }

    @media(max-width: 640px){
        width: 95%;
        height: 70vh;
    }
`;

const Form = styled.form`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media(max-width: 768px){
        width: 90%;
    }

    @media(max-width: 640px){
        width: 100%;
    }
`;

const BlockOptions = styled.span`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 768px){
        width: 90%;
    }
`;

const ImageLogo = styled.img`
    margin-bottom: 3rem;
`;

const ImageDesempenho = styled.img`
`;

const ImageMatch = styled.img`
`;

const BlockImages = styled.div`
    width: 40%;
    background: green;
    position: relative;
    display: flex;
    flex-direction: column;

    p{
        width: 80%;
        font-size: 1.125em;
        color: #FFFFFF;
        line-height: 1.75em;
    }

    @media(max-width: 768px){
        width: 90%;
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        justify-content: center;

        img{
            width: 18.75em;
        }

        p{
            margin: 0;
        }

        span{
            width: 40%;
        }
    }

    @media(max-width: 640px){
        display: none;
    }
`;

const animation = keyframes`
    0% {opacity: 0;}
    20% {opacity: 1;}
    27% {opacity: 1;}
    43% {opacity: 0;}
    100% {opacity: 0;}
`;

const SlideImage = styled.img`
    position: absolute;
    animation: ${animation} 9s infinite;

    &:nth-of-type(1) {
        animation-delay: 0s;
    }
    &:nth-of-type(2) {
        animation-delay: -3s;
    }

    @media(max-width: 1280px) {
        width: 80%;

        &:nth-of-type(1) {
            width: 98%;
        }
    }
`;

const SlideMessage = styled.span`
    position: absolute;
    /* bottom: -4rem; */
    width: 95%;
    text-align: center;
    display: inline-block;
    margin: 0.25rem 0;
    margin-top: 3rem;
    color: var(--stytegy-primary-text);
    font: 600 1.25rem 'Korolev', sans-serif;

    animation: ${animation} 9s infinite;

    &:nth-of-type(1) {
        animation-delay: 0s;
    }

    &:nth-of-type(2) {
        animation-delay: -3s
    }

    @media(max-width: 1280px) {
        bottom: 0;
        width: 85%;
        font-size: 1rem;
    }
`;

export default class LoginScreen extends Component {
    state = {
        images:[
            Desempenho,
            Match
        ],
        phrases:[
            'Visualize seu desempenho ao longo do tempo para aumentar sua inteligência financeira de precificação.',
            'Defina seus filtros, receba contratos selecionados e esqueça as listas de mil items.',
        ]
    }

    renderImagesSlide = () => {
        const { images, phrases } = this.state;

        return (
            <BlockImages>
                <>
                    <SlideImage src={images[0]} />
                    <SlideMessage>{phrases[0]}</SlideMessage>
                </>
                <>
                    <SlideImage src={images[1]} />
                    <SlideMessage>{phrases[1]}</SlideMessage>
                </>
            </BlockImages>
        );
    }

    render() {
        return (
            <Overlay>
                <BlockForm>
                    <Form>
                        <ImageLogo src={Logo} alt="Petronect Logo" />
                        <Input labelText="Email" placeholder="name@email.com" margin="0.5rem"/>
                        <Input labelText="Senha" placeholder="Insert password" margin="0.5rem"/>
                        <Button background="#115680" width="20rem" height="3rem" margin="1rem 0"> 
                            Entrar
                        </Button>
                        <BlockOptions>
                            <Button color="#505050">Criar Conta</Button>
                            <Button color="#505050">Resetar senha</Button>
                        </BlockOptions>
                    </Form>
                </BlockForm>
                {this.renderImagesSlide()}
            </Overlay>
        );
    }
}