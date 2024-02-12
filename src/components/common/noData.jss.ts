import { createUseStyles } from 'react-jss';

export const noDataStyles = createUseStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
    },
    icon: {
        width: '50px',
        height: '50px',
    },
    text: {
        fontSize: '20px',
    },
});
