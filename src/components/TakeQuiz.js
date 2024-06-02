import React, { useState, useEffect } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Quiz } from './Quiz';
import { getDatabase, ref, onValue } from 'firebase/database';
// import QUESTION_DATA from './data/SampleQuestions.json';
// import CHARACTER_DATA from './data/SampleCharacters.json';
// import QUIZ_DATA from './data/SampleQuiz.json';

export function TakeQuiz() {
    const [quizData, setQuizData] = useState(null);
    const quizTitle = "What Toroto Character Are You?"; // this is hard-coded but should be changed later to props when there are more quizzes available
    
    useEffect(() => {
        const db = getDatabase();
        const quizRef = ref(db, `quizzes/${quizTitle}`);

        // Set up a real-time listener
        const unsubscribe = onValue(quizRef, (snapshot) => {
            if (snapshot.exists()) {
                setQuizData(snapshot.val());
            } else {
                console.error("No data available");
            }
        }, (error) => {
            console.error(error);
        });

        function cleanup() {
            unsubscribe(); //call the unregister function
          }
          return cleanup;
    }, [quizTitle]); // if the quizTitle ever changes, it will re-render

    return (
        <div>
            <Header />
            {quizData ? <Quiz quizData={quizData} /> : <p>Loading...</p>}
            <Footer />
        </div>
    );
}
