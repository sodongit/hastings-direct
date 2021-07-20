import React from "react";
import './question-answer.scss';

const QuestionAnswer = ({question = '', answer = ''}) => {
    return <div className="qanda">
        <h1>{question}</h1>
        <p>{answer}</p>
    </div>;
};

export default QuestionAnswer;
