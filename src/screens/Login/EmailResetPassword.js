import React, { Component } from 'react';
import styled from 'styled-components';
import LogoWhite from '../../assets/logo-petronect-white.png';


const Overlay = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to bottom, #115680, #116EA0);
`;

const LogoImage = styled.img`
    margin-bottom: 5rem;
    width: 15.625em;
`;

const Container = styled.div`
    width: 70vw;
    height: 33vh;
    border-radius: 0.25em;
    background: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const ContainerTitle = styled.p`
    color: #116EA0;
    font-weight: bold;
    font-size: 1.125em;
`;

const EmailCode = styled.p`
    font-size: 3.4375em;
    color: #7FBA4C;
`;

const ContainerParagraph = styled.p`
    color: #505050;
    text-align: center;
    width: 95%;
`;

export default class EmailResetPassword extends Component {
    render() {
        return(
            <Overlay>
                <LogoImage src={LogoWhite} />
                <Container>
                    <ContainerTitle>Here is your password reset code:</ContainerTitle>
                    <EmailCode>210704</EmailCode>
                    <ContainerParagraph>A password reset was required for your email address: name@email.com. If you did not perform this request, you can access your account normally.</ContainerParagraph>
                </Container>
            </Overlay>
        );
    }
}