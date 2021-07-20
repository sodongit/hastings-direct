import React from "react";
import './cover-table.scss';
import CoverHeader from "./components/cover-header/cover-header";
import CoverBody from "./components/cover-body/cover-body";

const CoverTable = ({header = [], rows = []}) => {
    return <div className="cover-table">
        <CoverHeader header={header}/>
        <CoverBody rows={rows}/>
    </div>;
};

export default CoverTable;
