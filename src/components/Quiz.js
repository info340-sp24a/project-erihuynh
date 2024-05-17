import React, { useState } from 'react';
import Question from './Question';

export function Quiz({ questionData, characterData, quizData }) {
    const [answers, setAnswers] = useState({});
    const [results, setResults] = useState(null);
    
    // Note that option score is an object (ex. "1": {"E": 2}, "2": {"I": 1}, etc.)
    const handleOptionChange = (questionId, optionScore) => {
        setAnswers((prev) => {
            return {...prev, [questionId]: optionScore};
        });
    };

    const calculateResults = () => {
        const userScores = {
            "E": 0, "I": 0, "N": 0, "S": 0,
            "T": 0, "F": 0, "J": 0, "P": 0
        };

        // Calculate cumulative scores based on selected answers
        Object.values(answers).forEach(answer => {
            Object.entries(answer).forEach(([key, value]) => {
                userScores[key] += value;
            });
        });

        // Find the character with exact matching scores as the user
        const matchedCharacter = characterData.characters.find(character => {
            const characterScores = character.scores;
            return Object.keys(characterScores).every((personalityTrait) => {
                return characterScores[personalityTrait] === userScores[personalityTrait];
            });
        });

        // Set the result character name or default if no exact match is found
        const result = matchedCharacter ? matchedCharacter.name : characterData.defaultCharacter;
        setResults(result);
    };

    const renderQuestions = () => {
        return questionData.map((question) => {
            return <Question key={question.id} question={question} onChange={handleOptionChange}/>
        })
    }

    return (
        <div className="mainContent">
            <h1 className="quizHeader">{quizData.title}</h1>
            <p className="quizDescription">{quizData.description}</p>
            <div className="contentBox">
                <form className="createForm" onSubmit={(e) => e.preventDefault()}>
                    {renderQuestions()}
                </form>
            </div>
            <div className="buttonContainer">
                <button type="button" className="btn customBtn" onClick={calculateResults}>Submit Quiz</button>
            </div>
            {results && <div className="results">Result: {results}</div>}
        </div>
    );
}
