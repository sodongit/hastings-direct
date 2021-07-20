import React from "react";
import CoverRow from "../cover-row/cover-row";
import './cover-body.scss';

const CoverBody = ({rows = []}) => {
    return <div className="cover-body">
        {rows.map((row, key) => <CoverRow key={key} row={row}/>)}
    </div>;
};

export default CoverBody;
