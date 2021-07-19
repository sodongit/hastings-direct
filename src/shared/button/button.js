import React from 'react';
import './button.scss';
const Button = ({type, props= {}}) => {

    const buttonList = {
        chat(props) {return <Chat {...props}/>;},
        standard(props) {return <Standard {...props}/>}
    }

    return buttonList[type] ? buttonList[type](props) : buttonList.standard(props);
};

export default Button;

const Chat = ({callBack}) => {
    return <div className="button chat">
        <button onClick={callBack}>Chat</button>
    </div>
};


const Standard = ({text, callBack}) => {
    return <div className="button standard">
        <button onClick={callBack}>{text}</button>
    </div>
};

