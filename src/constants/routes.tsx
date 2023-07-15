import React from 'react';
import { IRouterType } from '../types/interfaces'
import { ShowRoom, MainMenu } from '../pages';
import { BackgroundLayout, BaseLayout } from '../components';
import { DividerProps } from '@fluentui/react-components';
import { Outlet } from 'react-router-dom';

export const Layout: React.FC<DividerProps> = (props) => {
    const { children } = props;

    return (
        <BackgroundLayout>
            <BaseLayout {...props}>
                <Outlet />
            </BaseLayout>
        </BackgroundLayout>
    );
}

export const pagesData: IRouterType[] = [
    {
        path: "/",
        element: <MainMenu />,
        title: "home"
    },
    {
        path: "/showroom",
        element: <ShowRoom />,
        title: "showroom"
    },
];