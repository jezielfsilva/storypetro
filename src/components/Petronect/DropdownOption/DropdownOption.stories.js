import React from 'react';
import DropdownOption from './DropdownOption';

export default {
    title: 'DropdownOption',
    components: DropdownOption,
};

export const SidebarOption = () => <DropdownOption title={'Match e Relevância'} />
export const SidebarSelectedOption = () => <DropdownOption isOpen title={'Match e Relevância'}/>