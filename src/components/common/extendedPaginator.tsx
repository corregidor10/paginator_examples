import { FC, useMemo } from 'react';
import { extendedPaginatorStyles } from './extendedPaginator.jss';
import { Limits } from '../../hooks/usePagination';

export interface ExtendedPaginatorProps {
    total: number;
    currentPage: number;
    setPageNumber: (page: number) => void;
    perPage: number;
    changeLimit: (limit: number) => void;
}

const ExtendedPaginator: FC<ExtendedPaginatorProps> = ({ total, currentPage, setPageNumber, changeLimit, perPage }) => {
    const classes = extendedPaginatorStyles();
    const offset = (currentPage - 1) * perPage;

    const totalPages = Math.ceil(total / perPage);

    const handleFirstPage = () => {
        setPageNumber(1);
    };

    const handleLastPage = () => {
        setPageNumber(totalPages);
    };

    const handleNextPage = () => {
        setPageNumber(currentPage + 1);
    };

    const handlePreviousPage = () => {
        setPageNumber(currentPage - 1);
    };
    const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        changeLimit(Number(event.target.value));
    };

    const limitValues = useMemo(() => Object.values(Limits).filter((value) => typeof value === 'number'), []) as number[];

    return (
        <div className={classes.paginator}>
            {total > 0 && (
                <>
                    <select value={perPage} onChange={handleLimitChange}>
                        {limitValues.map((limitValue) => (
                            <option key={limitValue} value={limitValue}>
                                {limitValue}
                            </option>
                        ))}
                    </select>
                    <button onClick={handleFirstPage} disabled={currentPage === 1}>
                        |&lt;
                    </button>
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        &lt;
                    </button>
                    <span>{`${offset + 1}-${Math.min(offset + perPage, total)} of ${total}`}</span>
                    <button onClick={handleNextPage} disabled={currentPage >= totalPages}>
                        &gt;
                    </button>
                    <button onClick={handleLastPage} disabled={currentPage >= totalPages}>
                        &gt;|
                    </button>
                </>
            )}
        </div>
    );
};

export default ExtendedPaginator;
