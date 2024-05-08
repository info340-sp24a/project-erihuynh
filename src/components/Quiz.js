import React from 'react';
import Question from './Question';

const questionsData = [
    { id: 1, text: "Question 1", options: ["Option 1", "Option 2", "Option 3", "Option 4"] },
    { id: 2, text: "Question 2", options: ["Option 1", "Option 2", "Option 3", "Option 4"] },
    { id: 3, text: "Question 3", options: ["Option 1", "Option 2", "Option 3", "Option 4"] },
    { id: 4, text: "Question 4", options: ["Option 1", "Option 2", "Option 3", "Option 4"] },
    { id: 5, text: "Question 5", options: ["Option 1", "Option 2", "Option 3", "Option 4"] },
];

export function Quiz() {
    return (
        <div className="mainContent">
            <h1 className="quizHeader">Title</h1>
            <p>Description of the quiz</p>
            <div className="contentBox">
                <form className="createForm">
                    {questionsData.map((question) => {
                        return <Question key={question.id} question={question} />;
                    })}
                </form>
            </div>
            <div className="buttonContainer">
                <button type="button" className="btn customBtn">Submit Quiz</button>
            </div>
        </div>
    );
}
