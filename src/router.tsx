import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { IRouterType } from './types/interfaces';
import pagesData from './constants';
import { Layout } from './routes';
import { Error } from './pages';

const Router = () => {
    const pageRoutes = pagesData.map(({ path, title, element }: IRouterType) => {
        return <Route key={title} path={`/${path}`} element={element} />;
    });

    return (
        <Routes>
            <Route element={<Layout />}>
                {pageRoutes}
            </Route>
            <Route key="not-found" path="*" element={<Error />} />
        </Routes>
    );
};

export default Router;