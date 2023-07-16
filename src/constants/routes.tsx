import React from 'react';
import { IRouterType } from '../types/interfaces'
import { ShowRoom, MainMenu } from '../pages';
import { BackgroundLayout, BaseLayout } from '../components';
import { DividerProps } from '@fluentui/react-components';
import { Outlet } from 'react-router-dom';
import { PerspectLayout } from '../components/layout';

export const Layout: React.FC<DividerProps> = (props) => {
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
        element:
            <PerspectLayout>
                <MainMenu />
            </PerspectLayout>,
        title: "home"
    },
    {
        path: "/showroom",
        element: <ShowRoom />,
        title: "showroom"
    },
];