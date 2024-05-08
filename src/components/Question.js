import React from 'react';

export default function Question({ question }) {
    return (
        <div>
            <p className="questionLabel">{question.text}</p>
            {question.options.map((option, index) => (
                <div key={index}>
                    <input type="radio" id={`option-${question.id}-${index}`} name={`question${question.id}`} value={option} />
                    <label htmlFor={`option-${question.id}-${index}`}>{option}</label><br />
                </div>
            ))}
        </div>
    );
}
