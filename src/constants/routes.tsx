import React from 'react';
import { IRouterType } from '../types/interfaces'
import { ShowRoom, MainMenu } from '../pages';

export const pagesData: IRouterType[] = [
    {
        path: "/",
        element: <MainMenu />,
        title: "home"
    },
    {
        path: "/showroom",
        element: <ShowRoom />,
        title: "home"
    },
];