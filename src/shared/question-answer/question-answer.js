import React from "react";
import './question-answer.scss';

const QuestionAnswer = ({question = '', answer = ''}) => {
    return <div className="">
        <h2>{question}</h2>
        <p>{answer}</p>
    </div>;
};

export default QuestionAnswer;
