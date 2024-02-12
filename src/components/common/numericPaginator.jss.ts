import { createUseStyles } from 'react-jss';

export const numericPaginatorStyles = createUseStyles({
    paginator: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: '8px',
        fontWeight: 'bold',
        fontSize: '16px',
    },
    activePage: {
        backgroundColor: 'green',
        color: 'white',
        '&: disabled': {
            opacity: 1,
            cursor: 'not-allowed !important',
        },
        '&:hover': {
            backgroundColor: 'green',
            color: 'darkGreen',
            cursor: 'not-allowed !important',
        },
    },
    regularButton: {
        backgroundColor: 'white',
        color: 'darkGreen',

        '$:hover': {
            backgroundColor: 'lightgray',
            color: 'green',
        },
        '&:disabled': {
            opacity: 0.3,
            cursor: 'not-allowed',
        },
    },
});
