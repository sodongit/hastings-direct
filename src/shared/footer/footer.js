import React, {useState, useEffect} from "react";
import './footer.scss';
import LinksFooter from "../links-footer/links-footer";
import FooterSmallPrint from "../footer-small-print/footer-small-print";
import Copyright from "../copyright/copyright";
import Button from "../button/button";

const footerLinks = [
    {
        header: "Insurance",
        linkList: [{text: "Car insurance", url: ""},
            {text: "Van insurance", url: ""},
            {text: "Bike insurance", url: ""},
            {text: "Home insurance", url: ""},
            {text: "Multi car insurance", url: ""},
            {text: "Telematics insurance", url: ""}]

    },
    {
        header: "Legal",
        linkList: [{text: "Accessibility policy", url: ""},
            {text: "Cookie policy", url: ""},
            {text: "Our fees", url: ""},
            {text: "Privacy notice", url: ""},
            {text: "Terms & conditions", url: ""},
            {text: "Terms of use", url: ""},
            {text: "Modern Slavery", url: ""},
            {text: "COVID Risk Assessment", url: ""}]

    },
    {
        header: "How can we help?",
        linkList: [{text: "Help centre", url: ""},
            {text: "Customer reviews", url: ""},
            {text: "Hastings Direct news", url: ""},
            {text: "Sitemap", url: ""},
            {text: "Complaints", url: ""}]

    }, {
        header: "About us",
        linkList: [{text: "About Hastings Direct", url: ""},
            {text: "Our brands", url: ""},
            {text: "Our TV ads", url: ""},
            {text: "Hastings Group", url: ""},
            {text: "Careers", url: ""}]
    }
];

const FCAText = 'Hastings Insurance Services Limited, trading as Hastings Direct, is authorised and regulated by the Financial Conduct Authority (register number 311492). Registered Office: Conquest House, Collington Avenue, Bexhill-on-Sea, East Sussex, TN39 3LW. Registered in England and Wales no. 3116518. All policies are subject to English Law.';
const callCosts = 'Calls to our numbers beginning with 0844 or 0843 cost 7p a minute; calls to 0871 numbers cost 13p a minute, and calls to 0845 or 0870 numbers cost 3p a minute. Your phone company will also charge you a fixed access fee when you make a call to any of these numbers. Please contact your phone company for their call access charges. Calls to 0800 or 0808 numbers are now free from mobiles as well as landlines. Calls to 03 numbers cost no more from mobiles and landlines than national rate calls, and count towards any inclusive minutes in the same way as 01 and 02 calls. Calls may be recorded for our mutual protection.';
const Footer = () => {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        setLinks(footerLinks);
    }, []);

    const chatProps = {
        callBack(){console.log("test")}
    }

    return <div className="footer">
        <div className="footer-links">
        {links.map((linkObj, key) => <LinksFooter key={key} links={linkObj}/>)}
        </div>
        <FooterSmallPrint text={FCAText}/>
        <FooterSmallPrint text={callCosts}/>
        <Copyright url={'./error'}/>
        <Button type="chat" props={chatProps}/>
    </div>;
};

export default Footer;
