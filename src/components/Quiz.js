import React, { useState } from 'react';
import Question from './Question';

export function Quiz({ quizData }) {
    const [answers, setAnswers] = useState({});
    const [results, setResults] = useState(null);
    
    // Note that option score is an object (ex. "1": {"E": 2}, "2": {"I": 1}, etc.)
    // const handleOptionChange = (questionId, optionScore) => {
    //     setAnswers((prev) => {
    //         return {...prev, [questionId]: optionScore};
    //     });
    // };
    const handleOptionChange = (questionId, optionScore) => {
        // console.log(`handleOptionChange called with Question ID: ${questionId}, Option Score:`, {optionScore});
        console.log('handleOptionChange called with Question ID:', questionId);
        console.log('Option Score:', optionScore);
        setAnswers((prev) => {
            const newAnswers = { ...prev };

            if (newAnswers[questionId]) {
                for (const [trait, score] of Object.entries(optionScore)) {
                    if (newAnswers[questionId][trait]) {
                        newAnswers[questionId][trait] += score;
                    } else {
                        newAnswers[questionId][trait] = score;
                    }
                }
            } else {
                newAnswers[questionId] = optionScore;
            }

            console.log("Updated Answers State:", newAnswers);
            return newAnswers;
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

        console.log("User Scores:", userScores);

        // Find the character with exact matching scores as the user
        const matchedCharacter = quizData.characters.find(character => {
            const characterScores = character.scores;
            const personalityTraits = Object.keys(characterScores);
            let isMatch = personalityTraits.every((personalityTrait) => {
                return characterScores[personalityTrait] === userScores[personalityTrait];
            });
            return isMatch;
        });

        // Set the result character name or default if no exact match is found
        const result = matchedCharacter ? matchedCharacter.name : quizData.defaultCharacter;
        setResults(result);
    };

    const renderQuestions = () => {
        const questionElements = quizData.questions.map((question, index) => (
            <Question key={index} question={{ ...question, id: index }} onChange={(optionScore) => handleOptionChange(index, optionScore)} />
        ));
        return questionElements;
    };

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
