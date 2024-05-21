import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import EXAMPLE_IMAGE from '../img/results.png';

export function Results() {
    return (
        <div>
            <Header />
            <div className="mainContent">
                <h1>Results</h1>
                <div className="contentBox">
                    <img src={EXAMPLE_IMAGE} alt="A cute Sanrio character called Pompompurin"/>
                    <p className="characterName">
                        Pompompurin!
                    </p>
                    <p>
                        Pompompurin is a character known for his endearing and gentle personality. He is friendly and caring like a golden retriever who loves to make others happy. He always wears his little brown beret on top of his head. He loves drinking milk and eating cream caramel pudding. His favorite words are 'let's go out' His least favorite word is 'stay'
                    </p>
                </div>
            </div>
            <div className="buttonContainer">
                <button type="button" className="btn customBtn">Save to Profile</button>
            </div>
            <Footer />
        </div>
    );
}