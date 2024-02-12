import { NavLink, useLocation } from 'react-router-dom';
import './App.css';
import { routeUrls } from './constants';
import React, { FC } from 'react';
// eslint-disable-next-line @typescript-eslint/no-explicit-any

interface TemplateProps {
    children: React.ReactNode;
}
const Template: FC<TemplateProps> = ({ children }) => {
    const location = useLocation();

    const getLinkClass = (path: string) => {
        return location.pathname === path ? 'active-link' : 'regular-link';
    };
    return (
        <div className="template">
            <div className="header">
                <NavLink to={routeUrls.LIMITED_SEARCH} className={getLinkClass(routeUrls.LIMITED_SEARCH)}>
                    Con botón y cambio del límite
                </NavLink>
                <NavLink to={routeUrls.NUMBERIC_PAGINATOR_SEARCH} className={getLinkClass(routeUrls.NUMBERIC_PAGINATOR_SEARCH)}>
                    Con botón y barra de páginas
                </NavLink>
                <NavLink to={routeUrls.DEBOUNCED} className={getLinkClass(routeUrls.DEBOUNCED)}>
                    Sin botón y debounced
                </NavLink>
            </div>
            <div style={{ marginTop: '50px' }}>{children}</div>
        </div>
    );
};

export default Template;
