import React from "react";
import './cover-header.scss';

const CoverHeader = () => {
    return <div className="cover-header">
        <div className="cover-header-text"><h4>Cover Included</h4></div>
        <div className="cover-header-icon-direct">
            <img alt="Hastings direct"/>
        </div>
        <div className="cover-header-icon-premier">
            <img alt="Hastings premier"/>
        </div>
    </div>;
};

export default CoverHeader;
