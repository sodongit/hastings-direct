import React from "react";
import './links-info.scss';

const LinksInfo = ({links = []}) => {
    return <div className="info-links">
        <div className="info-links-header">
            <span>Info Links</span>
        </div>
        <div className="info-links-content">
            {links.map(({text, url = ""}, key) => (<div key={key} className="link"><a  href={url !== "" ? url : 'error'}>{text}</a></div>))}
        </div>
    </div>;
};

export default LinksInfo;
