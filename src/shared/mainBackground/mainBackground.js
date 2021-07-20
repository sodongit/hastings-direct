import React from "react";
import './mainBackground.scss';
// TODO remove
const MainBackground = ({children}) => {
    return <div className="main-background">
        {children}
    </div>;
};

export default MainBackground;
