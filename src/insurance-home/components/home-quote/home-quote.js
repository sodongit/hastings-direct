import React from "react";
import './home-quote.scss';
import Button from "../../../shared/button/button";
import GetQuote from "../../../shared/get-quote/get-quote";



const HomeQuote = () => {

    return <div className="home-quote">
        <div className="home-quote-left">
            <h1>Home Insurance</h1>
            <p>At Hastings Direct, we know how importance your home and its contents are to you. That&apos;s why we offer home insurance that covers you for the unexpected expense that theft, loss and damage can bring.</p>
            <GetQuote url="./error" text="home insurance"/>
        </div>
        <div className="home-quote-right">
            <img alt="happy family playing on couch"/>
        </div>
    </div>;
};

export default HomeQuote;
