import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import '../index.css';
import { getDatabase, ref, set as firebaseSet } from 'firebase/database';
import { getAuth } from 'firebase/auth'; 

export function CreateQuiz() {
    const [quizTitle, setQuizTitle] = useState('');
    const [quizDesc, setQuizDesc] = useState('');
    const [defaultCharacter, setDefaultCharacter] = useState({ name: '' });
    const [characters, setCharacters] = useState([
        { name: '', scores: { E: '', I: '', N: '', S: '', T: '', F: '', J: '', P: '' } }
    ]);

    // new formt to adjust for the correct data format that will be used in the quiz logic
    const [questions, setQuestions] = useState([
        { id: 1, text: '', options: ['', '', '', ''].map(text => ({ text, score: { personality: '', value: '' } })), image: null },
        { id: 2, text: '', options: ['', '', '', ''].map(text => ({ text, score: { personality: '', value: '' } })), image: null },
        { id: 3, text: '', options: ['', '', '', ''].map(text => ({ text, score: { personality: '', value: '' } })), image: null },
        { id: 4, text: '', options: ['', '', '', ''].map(text => ({ text, score: { personality: '', value: '' } })), image: null },
    ]);

    const auth = getAuth(); // Get authentication instance
    console.log(auth.currentUser.uid);

    const handleInputChange = (index, field, val) => {
        const newQuestions = [...questions];
        newQuestions[index][field] = val;
        setQuestions(newQuestions);
    };

    const handleOpChange = (qIndex, optIndex, val) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].options[optIndex].text = val;
        setQuestions(newQuestions);
    };

    const handleImageChange = (index, file) => {
        const newQuestions = [...questions];
        newQuestions[index].image = file;
        setQuestions(newQuestions);
    };

    // new handle change for when the score is changed
    const handleScoreChange = (qIndex, optIndex, key, value) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].options[optIndex].score[key] = value;
        setQuestions(newQuestions);
    };

    // new handle change for when character options are updated
    const handleCharacterChange = (index, field, value) => {
        const newCharacters = [...characters];
        if (field in newCharacters[index].scores) {
            newCharacters[index].scores[field] = value;
        } else {
            newCharacters[index][field] = value;
        }
        setCharacters(newCharacters);
    };

    // new handle change for the default character
    const handleDefaultCharacterNameChange = (value) => {
        setDefaultCharacter({ name: value });
    };

    // every time we click the add character button, we want it to rerender with another
    // character to be available for editing which is why we add another empty character
    // preset to the end of our current character list
    const addCharacter = () => {
        setCharacters([...characters, { name: '', scores: { E: '', I: '', N: '', S: '', T: '', F: '', J: '', P: '' } }]);
    };

    // new handleSubmission to account for firebase
    const handleSubmission = (e) => {
        e.preventDefault();
        const quizData = generateQuizData();

        const db = getDatabase();
        const quizRef = ref(db, 'quizzes/' + quizTitle);

        firebaseSet(quizRef, quizData)
            .then(() => {
                console.log('Quiz data saved successfully!');
            })
            .catch((error) => {
                console.error('Error saving quiz data: ', error);
            });
    };

    // takes the inputted data and then gathers it so that it can be used to send the data in the correct format
    // to the firebase database so that it can be used by the quiz.js
    const generateQuizData = () => {
        return {
            title: quizTitle,
            description: quizDesc,
            questions: questions.map(question => ({
                text: question.text,
                options: question.options.map(option => ({
                    text: option.text,
                    score: option.score
                })),
                image: question.image
            })),
            characters: characters.map(character => ({
                name: character.name,
                scores: character.scores
            })),
            defaultCharacter: defaultCharacter.name || 'Wait a second ... no match?',
            creator: auth.currentUser.uid
        };
    };

    const questionInputs = questions.map((question, qIndex) => (
        <div key={question.id} className="mb-3">
            <div className="d-flex flex-column">
                <div className="form-group mb-2">
                    <label htmlFor={`quizQuestion${qIndex + 1}`}><strong>Question {qIndex + 1}</strong></label>
                    <input
                        type="text"
                        className="form-control"
                        id={`exampleQuizQ${qIndex + 1}`}
                        placeholder="Enter a question"
                        value={question.text}
                        onChange={(e) => handleInputChange(qIndex, 'text', e.target.value)}
                    />
                </div>

                <div className="mb-2">
                    <label htmlFor={`formFile${qIndex + 1}`} className="form-label">Add an image for this question:</label>
                    <input
                        className="form-control"
                        type="file"
                        id={`formFile${qIndex + 1}`}
                        onChange={(e) => handleImageChange(qIndex, e.target.files[0])}
                    />
                </div>

                {question.options.map((option, optIndex) => (
                    <div key={optIndex} className="input-group mb-2">
                        <span className="input-group-text" id={`option${optIndex + 1}`}>Option {optIndex + 1}</span>
                        <input
                            type="text"
                            className="form-control"
                            id={`option${optIndex + 1}`}
                            value={option.text}
                            onChange={(e) => handleOpChange(qIndex, optIndex, e.target.value)}
                        />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Personality"
                            value={option.score.personality}
                            onChange={(e) => handleScoreChange(qIndex, optIndex, 'personality', e.target.value)}
                        />
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Score"
                            value={option.score.value}
                            onChange={(e) => handleScoreChange(qIndex, optIndex, 'value', e.target.value)}
                        />
                    </div>
                ))}
            </div>
        </div>
    ));

    const characterInputs = characters.map((character, index) => (
        <div key={index} className="mb-3">
            <div className="form-group mb-2">
                <label htmlFor={`characterName${index}`}><strong>Character {index + 1}</strong></label>
                <input
                    type="text"
                    className="form-control"
                    id={`characterName${index}`}
                    placeholder="Enter character name"
                    value={character.name}
                    onChange={(e) => handleCharacterChange(index, 'name', e.target.value)}
                />
            </div>
            {Object.keys(character.scores).map((trait, idx) => (
                <div key={idx} className="input-group mb-2">
                    <span className="input-group-text" id={`characterTrait${trait}`}>{trait}</span>
                    <input
                        type="text"
                        className="form-control"
                        id={`characterTrait${trait}`}
                        placeholder={`${trait} personality trait score`}
                        value={character.scores[trait]}
                        onChange={(e) => handleCharacterChange(index, trait, e.target.value)}
                    />
                </div>
            ))}
        </div>
    ));

    return (
        <div>
            <Header />
            <div className="mainContent">
                <div className="quiz">
                    <h1>Create a Quiz</h1>
                </div>
            </div>

            <div className="contentContainer">
                <div className="container">
                    <form onSubmit={handleSubmission}>
                        <div className="mb-3">
                            <label htmlFor="quizTitle" className="form-label">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleQuizTitle"
                                placeholder="Enter quiz title"
                                value={quizTitle}
                                onChange={(e) => setQuizTitle(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="quizDescription" className="form-label">Description</label>
                            <textarea
                                className="form-control"
                                id="exampleQuizDescription"
                                rows="3"
                                value={quizDesc}
                                onChange={(e) => setQuizDesc(e.target.value)}
                            />
                        </div>

                        {questionInputs}

                        <div className="mb-3">
                            <h3>Characters</h3>
                            {characterInputs}
                            <button type="button" className="btn customBtn" onClick={addCharacter}>Add Character</button>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="defaultCharacterName" className="form-label">Default Character Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="defaultCharacterName"
                                placeholder="Enter default character name"
                                value={defaultCharacter.name}
                                onChange={(e) => handleDefaultCharacterNameChange(e.target.value)}
                            />
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn customBtn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CreateQuiz;