import { createUseStyles } from 'react-jss';
// si no le voy a pasar un tema, como en este caso, no hace falta que le pase nada a createUseStyles hay otra forma de hacerlo ?

export const searchContainerStyles = createUseStyles(() => ({
    searchContainer: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '32px 0',
        maxWidth: '100%',
        rowGap: '16px',
    },
}));
