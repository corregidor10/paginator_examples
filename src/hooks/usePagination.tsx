import { useState } from 'react';

export enum Limits {
    MIN = 10,
    REGULAR = 20,
    MAX = 50,
}

export const usePagination = (initialPage?: number) => {
    const [page, setPage] = useState<number>(initialPage || 1);
    const [limit, setLimit] = useState<number>(Limits.MIN);
    const [executeSearch, setSearchCounter] = useState<number>(0);

    const incrementSearchCounter = () => setSearchCounter((count) => count + 1);

    const changePage = (page: number) => {
        setPage(page);
        incrementSearchCounter();
    };

    const resetOffset = () => {
        setPage(1);
        incrementSearchCounter();
    };
    const onLimitChange = (limit: Limits) => {
        setLimit(limit);
        resetOffset();
    };

    return { page, limit, executeSearch, changePage, resetOffset, onLimitChange } as const;
};
