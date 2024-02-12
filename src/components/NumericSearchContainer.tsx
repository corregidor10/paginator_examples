import { useCallback, useEffect, useState } from 'react';
import { usePagination } from '../hooks/usePagination';
import { IPaginatedFilter } from '../model';
import { IUserFilter, emptyUserFilter } from '../model/userFilter';
import { useAppDispatch, useAppSelector } from '../redux';
import { getUsersFilteredAction } from '../redux/actions/getUserProfile';
import NumericPaginator from './common/numericPaginator';
import { ComplexSearchBar } from './ComplexSearchBar';
import { searchContainerStyles } from './searchContainer.jss';
import SearchResult from './searchResults';
import { resetUsersInitialState } from '../redux/reducers/common';

export const OtherSearchContainer = () => {
    const styles = searchContainerStyles();
    const { users } = useAppSelector((state) => state.common);

    const dispatch = useAppDispatch();
    const [filter, setFilter] = useState<IUserFilter>(emptyUserFilter());
    const { page, limit, executeSearch, changePage, resetOffset } = usePagination(users.page);

    const onFilterChange = (name: string, filter: string) => {
        setFilter((prev) => {
            return {
                ...prev,
                [name]: filter,
            };
        });
    };

    useEffect(() => {
        return () => {
            dispatch(resetUsersInitialState());
        };
    }, [dispatch]);

    useEffect(() => {
        if (executeSearch > 0) {
            const paginatedFilter = createPaginatedFilter();
            dispatch(getUsersFilteredAction(paginatedFilter));
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
        } as IPaginatedFilter<IUserFilter>;
    }, [page, limit, filter]);

    return (
        <div className={styles.searchContainer}>
            <ComplexSearchBar filter={filter} onFilterChange={onFilterChange} executeSearch={onExecuteSearch} />
            <SearchResult users={users.data} searchLaunched={executeSearch > 0} />
            <NumericPaginator total={users.totalCount} currentPage={page} perPage={limit} setPageNumber={changePage} />
        </div>
    );
};
