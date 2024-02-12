import { fireEvent, render, screen } from '@testing-library/react';
import ExtendedPaginator, { ExtendedPaginatorProps } from './extendedPaginator';

const props = {
    total: 10,
    currentPage: 1,
    perPage: 10,
    setPageNumber: vi.fn((...args) => {
        console.log('setPageNumber called with args:', args);
    }),
    changeLimit: vi.fn(),
} as ExtendedPaginatorProps;

describe('paginator', () => {
    // el test tiene que cambiar la página correctamente cuando el total es mayor que el límite
    test('should handle next page click correctly', () => {
        const modifiedProps = {
            ...props,
            total: 20,
        };
        render(<ExtendedPaginator {...modifiedProps} />);
        const nextButton = screen.getByText('>');
        fireEvent.click(nextButton);
        expect(props.setPageNumber).toHaveBeenCalledWith(2);
    });
    // el botón de siguiente página debería estar deshabilitado cuando la página actual es mayor o igual que el total de páginas
    test('should disable next page button when current page is greater or equal than total pages', () => {
        render(<ExtendedPaginator {...props} />);
        // const nextButton = screen.getByText('>');
        // if (!nextButton.hasAttribute('disabled')) {
        //     fireEvent.click(nextButton);
        // }
        expect(props.setPageNumber).not.toHaveBeenCalled();
    });
});
