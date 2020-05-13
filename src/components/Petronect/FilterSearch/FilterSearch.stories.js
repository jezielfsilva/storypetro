import React from 'react';
import FilterSearch from './FilterSearch';

export default {
    title: 'FilterSearch',
    components: FilterSearch,
};

export const SearchFilter = () => <FilterSearch placeholder="Digite palavras chaves" hasTitle/>
export const OpportunitiesFilter = () => <FilterSearch placeholder="Filtrar Oportunidades" width={'10.625em'} />