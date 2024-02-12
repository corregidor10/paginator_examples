import { useCallback, useEffect, useState } from 'react';
import { usePagination } from '../hooks/usePagination';
import { IPaginatedFilter } from '../model';
import { IUserFilter, emptyUserFilter } from '../model/userFilter';
import { useAppDispatch, useAppSelector } from '../redux';
import { getUsersFilteredAction } from '../redux/actions/getUserProfile';
import NumericPaginator from './common/numericPaginator';
import { NoButtonSearchBar } from './noButtonSearchBar';
import { searchContainerStyles } from './searchContainer.jss';
import SearchResult from './searchResults';
import { resetUsersInitialState } from '../redux/reducers/common';

export const DebouncedSearchContainer = () => {
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
        // En este caso de uso no pasaría nada por meter las dependencias del filtro, ya que el executeSearch se dispara con el cambio de filtro
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
            <NoButtonSearchBar filter={filter} onFilterChange={onFilterChange} executeSearch={onExecuteSearch} />
            <SearchResult users={users.data} searchLaunched={executeSearch > 0} />
            <NumericPaginator total={users.totalCount} currentPage={page} perPage={limit} setPageNumber={changePage} />
        </div>
    );
};
