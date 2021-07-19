import React from "react";
import CoverRow from "../cover-row/cover-row";

const CoverBody = ({rows = []}) => {
    return <div className="">
        {rows.map((row, key) => <CoverRow key={key} row={row}/>)}
    </div>;
};

export default CoverBody;
