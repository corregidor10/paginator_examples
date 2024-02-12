import { FC } from 'react';
import { searchBarStyles } from './searchBar.jss';

interface SearchBarProps {
    filter: string;
    onFilterChange: (filter: string) => void;
    executeSearch: () => void;
}
export const SearchBar: FC<SearchBarProps> = ({ filter, onFilterChange, executeSearch }) => {
    const styles = searchBarStyles();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleClick = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        executeSearch();
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onFilterChange(event.target.value);
    };

    return (
        <div className={styles.searchBar}>
            <input type="text" className={styles.input} value={filter} onChange={handleChange} placeholder="Nombre" />
            <button className={styles.button} onClick={handleClick}>
                Search
            </button>
        </div>
    );
};
