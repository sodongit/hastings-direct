import React, {useEffect, useState} from "react";
import './legal-text.scss';

const LegalText = ({legalTextArray = []}) => {

    const [textArray, setText] = useState([]);

    useEffect(() => {
        if (legalTextArray.length > 0) {
            setText(legalTextArray);
        }
    }, [legalTextArray]);

    return <div className="legal-text">
        {textArray.length > 0 && textArray.map((line, key) => {
            return <p key={key}>{line}</p>;
        })}
    </div>;
};

export default LegalText;

