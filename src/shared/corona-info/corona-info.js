import React from "react";
import './corona-info.scss';

const CoronaInfo = () => {
    return <div className="corona-info">
        <span className="fas fa-info"/><span>Affected by Corona Virus? <a href="error">Get help online</a> or make changes via the app or <a href="error">MyAccount</a></span>
    </div>;
};

export default CoronaInfo;
