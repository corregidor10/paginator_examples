import { createUseStyles } from 'react-jss';

export const loaderStyles = createUseStyles({
    loaderContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 9999,
    },
    loader: {
        display: 'flex',
        position: 'relative', // Cambiado de 'relative' a 'fixed'

        width: 75,
        height: 75,

        '&::before': {
            // Crea un pseudo-elemento que sirve como fondo
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo negro semi-transparente
        },
        '& div': {
            position: 'absolute',
            width: 15,
            height: 15,
            borderRadius: '50%',
            background: ' #346db7',
            animation: '$loaderFade 0.75s linear infinite, $loaderScale 0.75s linear infinite',
            '&:nth-child(1)': { animationDelay: '-0.67s', top: 0, left: 0 },
            '&:nth-child(2)': { animationDelay: '-0.19s', top: 20, left: 0 },
            '&:nth-child(3)': { animationDelay: '-0.59s', top: 40, left: 0 },
            '&:nth-child(4)': { animationDelay: '-0.08s', top: 60, left: 0 },
            '&:nth-child(5)': { animationDelay: '-0.47s', top: 0, left: 20 },
            '&:nth-child(6)': { animationDelay: '-0.72s', top: 20, left: 20 },
            '&:nth-child(7)': { animationDelay: '-0.3s', top: 40, left: 20 },
            '&:nth-child(8)': { animationDelay: '-0.27s', top: 60, left: 20 },
            '&:nth-child(9)': { animationDelay: '-0.07s', top: 0, left: 40 },
            '&:nth-child(10)': { animationDelay: '-0.05s', top: 20, left: 40 },
            '&:nth-child(11)': { animationDelay: '-0.14s', top: 40, left: 40 },
            '&:nth-child(12)': { animationDelay: '-0.52s', top: 60, left: 40 },
            '&:nth-child(13)': { animationDelay: '-0.31s', top: 0, left: 60 },
            '&:nth-child(14)': { animationDelay: '-0.44s', top: 20, left: 60 },
            '&:nth-child(15)': { animationDelay: '-0.08s', top: 40, left: 60 },
            '&:nth-child(16)': { animationDelay: '-0.32s', top: 60, left: 60 },
        },
    },
    '@keyframes loaderFade': {
        '0%, 100%': { opacity: 1 },
        '50%': { opacity: 0.5 },
    },
    '@keyframes loaderScale': {
        '0%, 100%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(0.51)' },
    },
});
