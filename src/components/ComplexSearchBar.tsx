import { FC } from 'react';
import { searchBarStyles } from './searchBar.jss';
import { IUserFilter } from '../model/userFilter';
import { compileNameOfProperty } from '../utils/formUtils';

interface ComplexSearchBarProps {
    filter: IUserFilter;

    onFilterChange: (name: string, value: string) => void;
    executeSearch: () => void;
}
export const ComplexSearchBar: FC<ComplexSearchBarProps> = ({ filter, onFilterChange, executeSearch }) => {
    const styles = searchBarStyles();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleClick = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        executeSearch();
    };
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
                placeholder="Marca de coche"
            />
            <button className={styles.button} onClick={handleClick}>
                Search
            </button>
        </div>
    );
};
