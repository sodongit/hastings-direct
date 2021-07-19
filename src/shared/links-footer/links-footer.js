import React, {useState, useEffect} from "react";
import './links-footer.scss';

const LinksFooter = ({links}) => {

    const [linkList, setLinkList] = useState([]);

    useEffect(() => {
        const {linkList} = links;

               setLinkList(linkList);
    },[links]);

    return <div className="links-footer">
        <h4>{links.header}</h4>
        {linkList.map(({text = "", url = "./error"}, key) => (<div key={key} className="link"><a  href={url === "" ? './404' : url}>{text}</a></div>))}
    </div>;
};

export default LinksFooter;
