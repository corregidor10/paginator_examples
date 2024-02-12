import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Template from './App';
import './index.css';
import { store } from './redux';
import { Loading } from './components/common/loading';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Template>
                    <AppRouter />
                </Template>
            </BrowserRouter>
            <Loading />
        </Provider>
    </React.StrictMode>,
);
