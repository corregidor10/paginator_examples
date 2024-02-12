import { CSSProperties } from 'react';
import { useRoutes } from 'react-router';
import { OtherSearchContainer } from './components/NumericSearchContainer';
import { ExtendedSearchContainer } from './components/extendedSearchContainer';
import { routeUrls } from './constants';
import { DebouncedSearchContainer } from './components/debouncedSearchContainer';

const routeNotMappedStyles: CSSProperties = { color: 'darkgray', padding: '32px', fontSize: '20px' };
const AppRouter = () => {
    return useRoutes([
        {
            path: routeUrls.LIMITED_SEARCH,
            element: <ExtendedSearchContainer />,
        },

        {
            path: routeUrls.NUMBERIC_PAGINATOR_SEARCH,
            element: <OtherSearchContainer />,
        },
        {
            path: routeUrls.DEBOUNCED,
            element: <DebouncedSearchContainer />,
        },

        { path: '*', element: <div style={routeNotMappedStyles}>Route not mapped or not exists</div> },
    ]);
};

export default AppRouter;
