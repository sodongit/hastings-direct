import React from 'react';
import Button from "../button/button";
import './get-quote.scss';

const GetQuote = ({text, url}) => {

    const buttonProps = {
        text: `Get a ${text} quote`,
        callBack() {
            console.log("get me my quote NOW")
        }
    };

    return <div className="get-quote">
            <Button type="standard" props={buttonProps}/>
            <a href={url}>Retrieve your {text} quote</a>
    </div>;
}

export default GetQuote;
