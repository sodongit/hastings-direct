import React from "react";
import './home-info.scss';
import QuestionAnswer from "../../../shared/question-answer/question-answer";
import CoverTable from "../../../shared/cover-table/cover-table";
import LegalText from "../../../shared/legal-text/legal-text";
import GetQuote from "../../../shared/get-quote/get-quote";
import LinksInfo from "../../../shared/links-info/links-info";
import AddPoty from "../../../shared/adverts/poty/poty";

// TODO make fake call.
const legalList = [
    "Limitations may apply to family legal expenses cover and home emergency cover.",
    "* Upgraded to £2000,000 for Premier policies. Only for building and building and contects policies.",
    "** Can be increased up to £150,000  for an additional charge.",
    "The Services we provide are covered under the Financial Services Compensation Scheme."
]
const qAndA = {
    question: "Why choose Hastings Direct home insurance?",
    answer: "With our range of home insurance policies tailored to sut your need you  can choose buildings only insurance, contents only insurance, combined buildings and content cover."
}
const coverTable = {
    header: ["direct", "premier"],
    rows: [{
        text: "£100,000 alternative accomodation cover*",
        cover: [true, true]
    }, {
        text: "New for old (excluding linens and clothing)",
        cover: [true, true]
    }, {
        text: "£1,000,000 of buildings insurance",
        cover: [true, true]
    }, {
        text: "£75,000 of contents insurance**",
        cover: [true, true]
    }, {
        text: "24 hour claims helpline",
        cover: [true, true]
    }, {
        text: "Family legal expenses",
        cover: [false, true]
    }, {
        text: "Home emergency cover",
        cover: [false, true]
    },]
}

const infoLinks = [
    {
        text: "Contact Us",
        url: ""
    },{
        text: "Cookie policy",
        url: ""
    },{
        text: "Privacy notice",
        url: ""
    },{
        text: "Terms of use",
        url: ""
    },{
        text: "Terms & conditions",
        url: ""
    },
]

const HomeInfo = () => {
    return <div className="home-info-container">
        <div className="home-info-container-left">
            <QuestionAnswer {...qAndA}/>
            <CoverTable {...coverTable}/>
            <LegalText legalTextArray={legalList}/>
            <GetQuote url="./error" text="home insurance"/>
        </div>
        <div className="home-info-container-right">
            <LinksInfo links={infoLinks}/>
            <AddPoty/>
        </div>
    </div>;
};

export default HomeInfo;
