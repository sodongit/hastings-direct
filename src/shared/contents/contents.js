import React from "react";
import './contents.scss';

const Contents = ({children}) => {
    return <div className="contents">
        {children}
    </div>;
};

export default Contents;
