import { noDataStyles } from './noData.jss';

const NoData = () => {
    const classes = noDataStyles();

    return (
        <div className={classes.root}>
            <svg
                className={classes.icon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12" y2="8" />
            </svg>
            <div className={classes.text}>No hay datos disponibles para tu búsqueda.</div>
        </div>
    );
};

export default NoData;
