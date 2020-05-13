import React from 'react';
import Input from './Input';

export default {
    title: 'Input',
    component: Input,
};

export const InputName = () => <Input type="text" placeholder="Insert name" labelText="Name"/>
export const InputEmail = () => <Input type="email" placeholder="name@email.com" labelText="Email"/>
export const InputPassword = () => <Input type="password" placeholder="Insert password" labelText="Senha"/>