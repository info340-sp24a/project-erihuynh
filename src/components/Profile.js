import React from 'react';

import { Header } from './Header';
import { Footer } from './Footer';
import { CardList } from './QuizCards';
import { QuizCard } from './QuizCards';

function UserInfo({ userName, userEmail, userNumber }) {
    return (
        <div className="container mt-5 mb-5">
            <div className="row align-items-center">
                <div className="col-auto">
                    <img src="img/pfp.png" alt="user profile picture" className="userImage img-fluid" />
                </div>
                <div className="col">
                    <h1>{userName}</h1>
                    <div className="d-flex align-items-center">
                        <p className="mb-0">{userEmail}</p>
                        <span className="mx-2">|</span>
                        <p className="mb-0">{userNumber}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function PastQuizzes({results}) {

    return (
        <div className="d-flex align-items-center">
            <QuizCard />
            {results.map((result, index) => (
                <div key={index} className="contentBox mx-auto">
                    <p className="characterName">{result.resultTitle}</p>
                    <p>{result.resultDesc}</p>
                </div>
            ))}
        </div>
    )
}

export function Profile() {
    const profiles = [
        { userName: "EmilyHaoAreYou", userEmail: "emilyisdoinggreat@haoareyou.com", userNumber: "666-666-6666" },
    ];

    const results = [
        { resultTitle: "Pompompurin", resultDesc: "Pompompurin is a character known for his endearing and gentle personality. He is friendly and caring like a golden retriever who loves to make others happy. He always wears his little brown beret on top of his head. He loves drinking milk and eating cream caramel pudding. His favorite words are 'let's go out' His least favorite word is 'stay'"},
    ];

        return (
        <div>
            <Header />
            <div className="profileMainContent">
                {profiles.map((profile, index) => (
                    <UserInfo
                        key={index}
                        userName={profile.userName}
                        userEmail={profile.userEmail}
                        userNumber={profile.userNumber}
                    />
                ))}
                <div className="container mb-5">
                    <h1>Past Quizzes</h1>
                    <PastQuizzes results={results} />
                </div>
                <div className="container mb-5">
                    <h1>Your Quizzes</h1>
                </div>
                <CardList />
            </div>
            <Footer />
        </div>
    );
}