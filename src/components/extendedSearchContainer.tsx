import { useCallback, useEffect, useState } from 'react';
import { usePagination } from '../hooks/usePagination';
import { IPaginatedFilter } from '../model';
import { useAppDispatch, useAppSelector } from '../redux';
import { getUsersAction } from '../redux/actions/getUserProfile';
import ExtendedPaginator from './common/extendedPaginator';
import { SearchBar } from './searchBar';
import { searchContainerStyles } from './searchContainer.jss';
import SearchResult from './searchResults';
import { resetUsersInitialState } from '../redux/reducers/common';

export const ExtendedSearchContainer = () => {
    const styles = searchContainerStyles();
    const { users } = useAppSelector((state) => state.common);

    const dispatch = useAppDispatch();
    const [filter, setFilter] = useState<string>('');
    const { page, limit, executeSearch, changePage, resetOffset, onLimitChange } = usePagination(users.page);

    const onFilterChange = (filter: string) => {
        setFilter(filter);
    };

    useEffect(() => {
        return () => {
            dispatch(resetUsersInitialState());
        };
    }, [dispatch]);

    useEffect(() => {
        if (executeSearch > 0) {
            const paginatedFilter = createPaginatedFilter();
            dispatch(getUsersAction(paginatedFilter));
        }
        // Si metemos el filtro en el array de dependencias entraríamos en bucle, y queremos controlar la busqueda con el click de botón
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, executeSearch]);

    const onExecuteSearch = () => {
        resetOffset();
    };
    const createPaginatedFilter = useCallback(() => {
        return {
            page: page,
            limit: limit,
            filter: filter,
        } as IPaginatedFilter<string>;
    }, [page, limit, filter]);

    return (
        <div className={styles.searchContainer}>
            <SearchBar filter={filter} onFilterChange={onFilterChange} executeSearch={onExecuteSearch} />
            <SearchResult users={users.data} searchLaunched={executeSearch > 0} />
            <ExtendedPaginator total={users.totalCount} currentPage={page} perPage={limit} setPageNumber={changePage} changeLimit={onLimitChange} />
        </div>
    );
};
