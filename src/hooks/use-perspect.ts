import { DependencyList, useEffect, useRef, useState } from "react";

export const usePerspective = () => {
    const bendContainerRef = useRef<HTMLDivElement | null>(null);
    const EmptyArray: DependencyList = [];

    const [perspectiveStyle, setPerspectiveStyle] = useState<string>("");

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const bendContainer = bendContainerRef.current;
            if (!bendContainer) return;

            const { offsetWidth, offsetHeight, offsetLeft, offsetTop, style } = bendContainer;
            const perspective = 10;

            const rotateX = ((e.pageY - offsetTop) / offsetHeight - 0.5) * perspective;
            const rotateY = (0.5 - (e.pageX - offsetLeft) / offsetWidth) * perspective;

            const transformStyle = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

            style.transform = transformStyle;
            setPerspectiveStyle(transformStyle);
        };

        const bendContainer = bendContainerRef.current;
        if (!bendContainer) return;

        bendContainer.addEventListener("mousemove", handleMouseMove);

        return () => {
            bendContainer.removeEventListener("mousemove", handleMouseMove);
        };
    }, EmptyArray);

    return [bendContainerRef, perspectiveStyle] as const;
};
