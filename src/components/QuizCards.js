import React from 'react';

export function CardList(props) {
    const { searchValue } = props;

    const cardArray = [
        { quizTitle: "who's your sanrio persona?", quizDes: "inspired by the sanrio characters", imgURL: "img/results.png", imgAlt: "pompompurin" },
        { quizTitle: "who's your ghibli persona?", quizDes: "inspired by Studio Ghibli films and characters", imgURL: "img/ponyo.jpg", imgAlt: "ponyo flying through sea" },
        { quizTitle: "what boba drink are you?", quizDes: "inspired by the boba cafes on the ave", imgURL: "img/boba.jpg", imgAlt: "polar bear drinking boba" },
    ];
    
    const filteredCards = cardArray.filter((card) => {
        console.log(card);
        console.log(searchValue);
        return (card.quizTitle && typeof card.quizTitle === 'string' && card.quizTitle.toLowerCase().includes(searchValue.toLowerCase()));
        });

    let cards = filteredCards.map((card, index) => (
        <QuizCard
            key={index}
            quizTitle={card.quizTitle}
            quizDes={card.quizDes}
            imgURL={card.imgURL}
            imgAlt={card.imgAlt}
        />
    ))

    return (
        <div className="container">
            <div className="row justify-content-left">
                {cards}
            </div>
        </div>
    );
}

export function QuizCard(props) {
    const { quizTitle, imgURL, quizDes, imgAlt } = props;

    const handleClick = event => {
        console.log("Would navigate to create quiz page!");
    };

    return (
        <div className="col-12 col-md-6 col-lg-4 p-2">
            <div className="card">
                <div className="card-body">
                    <img className="cardImgTop pb-3" src={imgURL} alt={imgAlt}/>
                    <h3 className="card-title">{quizTitle}</h3>
                    <p className="card-text">{quizDes}</p>
                    <a className="btn customBtn" href="#" onClick={handleClick}>Take Quiz</a>
                </div>
            </div>
        </div>
    );
}
