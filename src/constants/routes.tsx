import React from 'react';
import { IRouterType } from '../types/interfaces'
import { ShowRoom, MainMenu } from '../pages';
import { BackgroundLayout, BaseLayout } from '../components';
import { DividerProps } from '@fluentui/react-components';
import { Outlet } from 'react-router-dom';
import { PerspectLayout, ShowroomLayout } from '../components/layout';

export const Layout: React.FC<DividerProps> = (props) => {
    return (

        <Outlet />

    );
}

export const pagesData: IRouterType[] = [
    {
        path: "/",
        element:
            <BackgroundLayout>
                <BaseLayout>
                    <PerspectLayout>
                        <MainMenu />
                    </PerspectLayout>
                </BaseLayout>
            </BackgroundLayout>,
        title: "home"
    },
    {
        path: "/showroom",
        element:
            <BackgroundLayout>
                <BaseLayout>
                    <ShowRoom />
                </BaseLayout>
            </BackgroundLayout>,
        title: "showroom"
    },
];