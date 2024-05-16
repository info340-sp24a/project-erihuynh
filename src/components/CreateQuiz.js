import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import '../index.css';

export function CreateQuiz() {
    const [quizTitle, setQuizTitle] = useState('');
    const [quizDesc, setQuizDesc] = useState('');
    const [questions, setQuestions] = useState([
        { id: 1, question: '', options: ['', '', '', ''], image: null },
        { id: 2, question: '', options: ['', '', '', ''], image: null },
        { id: 3, question: '', options: ['', '', '', ''], image: null },
        { id: 4, question: '', options: ['', '', '', ''], image: null },
        { id: 5, question: '', options: ['', '', '', ''], image: null },
    ]);

    const handleInputChange = (index, field, val) => {
        const newQuestions = [...questions];
        newQuestions[index][field] = val;
        setQuestions(newQuestions);
    };

    const handleOpChange = (qIndex, optIndex, val) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].options[optIndex] = val;
        setQuestions(newQuestions);
    };

    const handleImageChange = (index, file) => {
        const newQuestions = [...questions];
        newQuestions[index].image = file;
        setQuestions(newQuestions);
    };

    const handleSubmission = (e) => {
        e.preventDefault();
        const quizData = {
            title: quizTitle,
            desc: quizDesc,
            questions,
        };

        console.log("Quiz Data: ", quizData);
    };

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

                        {questions.map((question, qIndex) => (
                            <div key={question.id} className="mb-3">
                                <div className="d-flex flex-column">
                                    <div className="form-group mb-2">
                                        <label htmlFor={`quizQuestion${qIndex + 1}`}><strong>Question {qIndex + 1}</strong></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id={`exampleQuizQ${qIndex + 1}`}
                                            placeholder="Enter a question"
                                            value={question.question}
                                            onChange={(e) => handleInputChange(qIndex, 'question', e.target.value)}
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
                                                value={option}
                                                onChange={(e) => handleOpChange(qIndex, optIndex, e.target.value)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
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