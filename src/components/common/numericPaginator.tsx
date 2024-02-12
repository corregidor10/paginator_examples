import { FC } from 'react';
import { numericPaginatorStyles } from './numericPaginator.jss';

export interface NumericPaginatorProps {
    total: number;
    currentPage: number;
    perPage: number;
    setPageNumber: (page: number) => void;
}

const NumericPaginator: FC<NumericPaginatorProps> = ({ total, currentPage, perPage, setPageNumber }) => {
    const classes = numericPaginatorStyles();

    const totalPages = Math.ceil(total / perPage);

    const handleFirstPage = () => {
        setPageNumber(1);
    };

    const handleLastPage = () => {
        setPageNumber(totalPages);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setPageNumber(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setPageNumber(currentPage - 1);
        }
    };

    const handlePageNumber = (page: number) => {
        setPageNumber(page);
    };

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    let start = Math.max(currentPage - 2, 0);
    let end = start + 5;
    if (end > totalPages) {
        end = totalPages;
        start = Math.max(end - 5, 0);
    }

    const visiblePageNumbers = pageNumbers.slice(start, end);

    return (
        <div className={classes.paginator}>
            <button onClick={handleFirstPage} className={classes.regularButton} disabled={currentPage === 1}>
                First
            </button>
            <button onClick={handlePreviousPage} className={classes.regularButton} disabled={currentPage === 1}>
                Prev
            </button>
            {visiblePageNumbers.map((pageNumber) => (
                <button
                    key={pageNumber}
                    className={currentPage === pageNumber ? classes.activePage : classes.regularButton}
                    onClick={() => handlePageNumber(pageNumber)}
                    disabled={currentPage === pageNumber}
                >
                    {pageNumber}
                </button>
            ))}
            <button onClick={handleNextPage} className={classes.regularButton} disabled={currentPage >= totalPages}>
                Next
            </button>
            <button onClick={handleLastPage} className={classes.regularButton} disabled={currentPage >= totalPages}>
                Last
            </button>
        </div>
    );
};

export default NumericPaginator;
