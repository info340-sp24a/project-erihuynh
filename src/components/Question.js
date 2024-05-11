import React from 'react';

export default function Question({ question, onChange }) {

    const renderOptions = () => {
        return question.options.map((option, index) => {
            return (
                <div key={index} className="radio-container">
                    <input type="radio" id={`option-${question.id}-${index}`} name={`question${question.id}`} value={option.text} onChange={() => onChange(question.id, option.score)}/>
                    <label htmlFor={`option-${question.id}-${index}`} className="question-options">{option.text}</label><br />
                </div>
            );
        });
    };

    return (
        <div>
            <p className="questionLabel">{question.text}</p>
            {renderOptions()}
        </div>
    );
}
