import { FC, useCallback, useEffect } from 'react';
import { searchBarStyles } from './searchBar.jss';
import { IUserFilter } from '../model/userFilter';
import { compileNameOfProperty } from '../utils/formUtils';
import useDebounce from '../hooks/useDebounce';

interface NoButtonSearchBarProps {
    filter: IUserFilter;

    onFilterChange: (name: string, value: string) => void;
    executeSearch: () => void;
}
export const NoButtonSearchBar: FC<NoButtonSearchBarProps> = ({ filter, onFilterChange, executeSearch }) => {
    const styles = searchBarStyles();
    const debouncedFilter = useDebounce(filter, 500);

    // Si metemos el executeSearch entramos en bucle y no queremos que eso suceda
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedExecuteSearch = useCallback(executeSearch, [debouncedFilter]);

    useEffect(() => {
        debouncedExecuteSearch();
    }, [debouncedExecuteSearch]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onFilterChange(event.target.name, event.target.value);
    };

    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                name={compileNameOfProperty<IUserFilter>('name')}
                className={styles.input}
                value={filter.name}
                onChange={handleChange}
                placeholder="Nombre"
            />
            <input
                type="text"
                name={compileNameOfProperty<IUserFilter>('car')}
                className={styles.input}
                value={filter.car}
                onChange={handleChange}
                placeholder="Coche"
            />
        </div>
    );
};
