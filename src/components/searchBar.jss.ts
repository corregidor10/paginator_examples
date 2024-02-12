import { createUseStyles } from 'react-jss';

export const searchBarStyles = createUseStyles(() => ({
    searchBar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

        width: '100vw',
        backgroundColor: 'lightgrey',
        columnGap: '1rem',
    },
    input: {
        height: 40,
        fontSize: '1.5rem',
        borderRadius: 8,
    },
    button: {
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.5rem',
        padding: '8px 16px',
    },
}));
