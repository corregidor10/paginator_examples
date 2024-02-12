import { createUseStyles } from 'react-jss';

export const searchResultStyles = createUseStyles(() => ({
    searchResult: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        padding: '1rem',
    },
}));
