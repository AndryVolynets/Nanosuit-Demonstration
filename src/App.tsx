import React from "react";
import Button from "./components/buttons";
import OctagonLayout from "./components/blocks/octagon";
import OctagonGridLayout from "./components/blocks/octagon-grid";

const App = () => {
    return (
        <>
            <OctagonLayout size={80} color="#42e3f5">
                <OctagonLayout size={70} color="#ffffff">
                    <img width={70}
                        height={70}
                        src="https://p1.hiclipart.com/preview/1004/894/505/crysis-3-crysis-3-icon-png-icon-thumbnail.jpg" alt="" />
                </OctagonLayout>
            </OctagonLayout>
            
            <OctagonGridLayout />

        </>
    );
}

export default App;
