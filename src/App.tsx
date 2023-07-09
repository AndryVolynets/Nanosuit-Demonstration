import React from "react";
import Button from "./components/buttons";
import OctagonLayout from "./components/blocks/octagon";
import OctagonGridLayout from "./components/blocks/octagon-grid";
import { TrafaretColor, DefaultColor, HoverColor } from "./constants";
import CryScroll from "./components/scroll";

const App = () => {
    return (
        <>
            <OctagonLayout size={80} color={HoverColor}>
                <OctagonLayout size={70} color="#ffffff">
                    <img width={70}
                        height={70}
                        src="https://p1.hiclipart.com/preview/1004/894/505/crysis-3-crysis-3-icon-png-icon-thumbnail.jpg" alt="" />
                </OctagonLayout>
            </OctagonLayout>

            <OctagonGridLayout />

            <CryScroll/>
        </>
    );
}

export default App;
