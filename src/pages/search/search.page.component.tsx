import React, { useState } from 'react';
import { SearchService } from '../../services/search.service';
import { SearchComponent, CuisineCardComponent, RestaurantCardComponent, SpinnerComponent } from '../../components';
import { SortOrder } from '../../config/sort.config';

export const SearchPageComponent = () => {
    const searchService = new SearchService();
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(true);
    const [term, setTerm]: any = useState('');
    const [error, setError]: any = useState('');
    const [items, setItems]: any = useState([]);
    const [filter, setFilter]: any = useState('');
    const [sort, setSort]: any = useState('');
    const [filteredItems, setFilteredItems]: any = useState([]);
    
   const handleChange = (event: any) => {
       setTerm(event.target?.value);
       setError('');
   };

    const handleSubmit = async (event: Event) => {
        event.preventDefault();
        const { result, message } = await searchService.search(term);
        setLoaded(true);
        if (!result) {
            setError(message);
        }
        setItems(result || []);
        setFilteredItems(result || []);
        setFilter('');
        setSort('');
        setLoading(false);
    };

    const handleFilter = (event: Event) => {
        setLoading(true);

        if (!items || !items.length) {
            setLoading(false);
            return;
        }
        if (!term) {
            setError('Enter text to search');
            setLoading(false);
            return;
        }
        
        const key = (event.target as HTMLSelectElement).value;
        setFilter((event.target as HTMLSelectElement).value);

        const newFilteredItems = key ? items.filter((item: any) => item[key] && item[key].match(new RegExp(term, 'ig'))) : items;

        setFilteredItems(newFilteredItems);
        setTimeout(() => setLoading(false), 500);
    };

    const handleSort = (event: Event) => {
        setLoading(true);

        if (!items || !items.length) {
            setLoading(false);
            return;
        }
        
        const value = JSON.parse((event.target as HTMLSelectElement).value);
        setSort((event.target as HTMLSelectElement).value);

        const sortedItems = value ? sortItems(value) : items;
        
        setFilteredItems(sortedItems);
        setTimeout(() => setLoading(false), 500);
    };

    const sortItems = ({ order, field } : any) => {
        if (order === SortOrder.asc) {
            return items.sort((itemA: any, itemB: any) => {
                return (itemA[field] && itemB[field] && itemA[field] <= itemB[field]) ? -1 : 1;
            });
        }
        
        return items.sort((itemA: any, itemB: any) => {
            return (itemA[field] && itemB[field] && itemA[field] >= itemB[field]) ? -1 : 1;
        });
    }

    const cards = filteredItems.map((item: any, i: number) => (
        <React.Fragment key={i}>
            {
                item.title ? <CuisineCardComponent {...item} /> : <RestaurantCardComponent {...item} />
            }
        </React.Fragment>)
    );

    return (
        <div className='page'>
            <>
                <h2>Search</h2>
                { 
                    error && 
                    (<section className='error-wrapper'>
                        <p className='text-center text-danger'>{error}</p>
                    </section>)
                }
                {
                    loading && (<SpinnerComponent />)
                }
                {
                    !loading && (
                        <>
                            <section className='form-wrapper search-form-wrapper'>
                                <SearchComponent
                                    term={term}
                                    filter={filter}
                                    sort={sort}
                                    handleChange={handleChange}
                                    handleSubmit={handleSubmit}
                                    handleFilter={handleFilter}
                                    handleSort={handleSort}
                                ></SearchComponent>
                            </section>
                            <section className='item-wrapper'>
                                {cards}
                            </section>
                            {
                                (loaded && !items && !filteredItems.length) && (<p className='text-danger text-center'>No data found</p>)
                            }
                        </>
                    )
                }             
            </>
        </div>
    );
};