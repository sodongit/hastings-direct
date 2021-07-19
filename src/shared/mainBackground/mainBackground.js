import React from "react";
import './mainBackground.scss';

const MainBackground = ({children}) => {
    return <div className="main-background">
        {children}
    </div>;
};

export default MainBackground;
