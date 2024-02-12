import { createUseStyles } from 'react-jss';

export const extendedPaginatorStyles = createUseStyles({
    paginator: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: '8px',
        fontWeight: 'bold',
        fontSize: '16px',

        '& button , select': {
            padding: '8px 16px',
            borderRadius: '8px',
            backgroundColor: 'lightBlue',
            cursor: 'pointer',
        },
    },
});
