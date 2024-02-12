import { createUseStyles } from 'react-jss';

export const userCardStyles = createUseStyles(() => ({
    searchResult: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 2fr))',
        gap: '1rem',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
        padding: '1rem',
        border: '1px solid black',
        borderRadius: '5px',
        backgroundColor: 'white',
        width: '250px',
        transition: 'all 2s ease',
    },
    cardTitle: {
        fontWeight: 'bold',
        display: 'block',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '-webkit-fill-available',
        textAlign: 'center',
    },
    cardIcon: {
        fontSize: '2rem',
    },
    maleIcon: {
        color: 'blue',
    },
    femaleIcon: {
        color: 'pink',
    },
    otherIcon: {
        color: 'grey',
    },
    email: {
        display: 'block',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '-webkit-fill-available',
        textAlign: 'center',
        color: 'grey',
    },
    ip: {
        display: 'block',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '-webkit-fill-available',
        textAlign: 'center',
        fontSize: '0.8rem',
        fontWeight: 'bold',
    },
    car: {
        display: 'block',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '-webkit-fill-available',
        textAlign: 'center',
        fontSize: '0.8rem',

        textTransform: 'uppercase',
    },
}));
