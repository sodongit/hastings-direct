import React from "react";
import './header.scss';

const Header = () => {
    return <React.Fragment>
        <div className="header">
            <img src="/src/images/desktop/hd-logo-inline.png" alt="hastings direct icon"/>
        </div>
        <div className="header-background">
            <div className="header-backgound-curve"/>
        </div>
    </React.Fragment>;
};

export default Header;
