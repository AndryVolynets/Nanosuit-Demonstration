import React from 'react';
import { IRouterType } from '../types/interfaces'
import { ShowRoom, MainMenu } from '../pages';
import { BackgroundLayout, BaseLayout } from '../components';
import { DividerProps } from '@fluentui/react-components';
import { Outlet } from 'react-router-dom';
import { PerspectLayout, ShowroomLayout } from '../components/layout';

export const Layout: React.FC<DividerProps> = (props) => {
    return (
        <BackgroundLayout>
            <BaseLayout>
                <PerspectLayout>
                    <Outlet />
                </PerspectLayout>
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
        path: "/:settingName",
        element: <MainMenu />,
        title: "home"
    },
    {
        path: "/showroom",
        element: <ShowRoom />,
        title: "showroom"
    },
];