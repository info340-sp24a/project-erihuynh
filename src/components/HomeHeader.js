import React from 'react';

import { CardList } from './QuizCards';
import { SearchForm } from './SearchForm';

export function HomeHeader(props) {
    
    const handleClick = event => {
        console.log("Would navigate to create quiz page!");
    }
    
    return (
        <div className="homeMainContent">
            <h1 className="homeHeader">Welcome to Persona Playground</h1>
            <div className="contentText">
                <p>This is an interactive playground where you can create your own persona quizzes, take other users' quizzes, and save them to your profile! Click on any quiz to start~</p>
            </div>

            <div className="buttonContainer">
                <button type="button" className="btn customBtn" onClick={handleClick}>Create a Quiz</button>
            </div>
            <SearchForm />
            <CardList />
        </div>
    );
}