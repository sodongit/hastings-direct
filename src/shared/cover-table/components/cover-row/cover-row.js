import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import './cover-row.scss';

const CoverRow = ({key, row: {text, cover}}) => {
    return <div className="cover-row">
        <div className="cover-row-header"><span>{text}</span></div>
        {cover.map((cell, key) => cell ? <CellTrue key={key}/> : <CellFalse key={key}/>)}
    </div>;
};

export default CoverRow;

const CellTrue = () => <div className="cell-checked"><FontAwesomeIcon icon={faCheckCircle} style={{color: '#0069cc'}}/></div>;

const CellFalse = () => <div className="cell-unchecked"></div>;
