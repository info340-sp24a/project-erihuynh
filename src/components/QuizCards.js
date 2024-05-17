import React from 'react';

export function CardList(props) {
    const { searchValue } = props;

    const cardArray = [
        { quizTitle: "who's your sanrio persona?", quizDes: "inspired by the sanrio characters", imgURL: "img/results.png" },
        { quizTitle: "who's your ghibli persona?", quizDes: "inspired by Studio Ghibli films and characters", imgURL: "img/ponyo.jpg" },
        { quizTitle: "what boba drink are you?", quizDes: "inspired by the boba cafes on the ave", imgURL: "img/boba.jpg" },
    ];

    const filteredCards = cardArray.filter(card => 
        card.quizTitle.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <div className="container">
            <div className="row justify-content-left">
                {filteredCards.map((card, index) => (
                    <QuizCard
                        key={index}
                        quizTitle={card.quizTitle}
                        quizDes={card.quizDes}
                        imgURL={card.imgURL}
                    />
                ))}
            </div>
        </div>
    );
}

export function QuizCard(props) {
    const { quizTitle, imgURL, quizDes } = props;

    const handleClick = event => {
        console.log("Would navigate to create quiz page!");
    };

    return (
        <div className="col-12 col-md-6 col-lg-4 p-2">
            <div className="card">
                <div className="card-body">
                    <img className="cardImgTop pb-3" src={imgURL} alt={quizTitle}/>
                    <h3 className="card-title">{quizTitle}</h3>
                    <p className="card-text">{quizDes}</p>
                    <a className="btn customBtn" href="#" onClick={handleClick}>Take Quiz</a>
                </div>
            </div>
        </div>
    );
}
