import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Quiz } from './Quiz';
import QUESTION_DATA from './data/SampleQuestions.json';
import CHARACTER_DATA from './data/SampleCharacters.json';
import QUIZ_DATA from './data/SampleQuiz.json';

export function TakeQuiz() {
    return (
        <div>
            <Header />
            <Quiz 
                questionData={QUESTION_DATA} 
                characterData={CHARACTER_DATA} 
                quizData={QUIZ_DATA} 
            />
            <Footer />
        </div>
    );
}
