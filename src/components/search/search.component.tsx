import React from 'react';
import { InputComponent, SelectTagComponent } from '../';
import { SortConfig } from '../../config/sort.config';
import { FilterConfig } from '../../config/filter.config';

export const SearchComponent = ({ term, filter, sort, handleChange, handleSubmit, handleFilter, handleSort }: any) => {
        
    return (
        <form className='wrapper' onSubmit={handleSubmit}>
            <InputComponent type='text' name='term' onClick={handleChange} value={term} onChange={handleChange} />

            <SelectTagComponent value={filter} options={FilterConfig} onChange={handleFilter} />
            
            <SelectTagComponent value={sort} options={SortConfig} onChange={handleSort} />

            <InputComponent type='submit' value='Search' />
        </form>
    );
}