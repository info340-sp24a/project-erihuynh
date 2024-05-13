import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import EXAMPLE_IMAGE from '../img/results.png';

export function Results() {
    return (
        <div>
            <Header />
            <div class="mainContent">
                <h1 class="">Results</h1>
                <div class="contentBox">
                    <img src={EXAMPLE_IMAGE} alt="A cute Sanrio character called Pompompurin"/>
                    <p class="characterName">
                        Pompompurin!
                    </p>
                    <p>
                        Pompompurin is a character known for his endearing and gentle personality. He is friendly and caring like a golden retriever who loves to make others happy. He always wears his little brown beret on top of his head. He loves drinking milk and eating cream caramel pudding. His favorite words are 'let's go out' His least favorite word is 'stay'
                    </p>
                </div>
            </div>
            <div class="buttonContainer">
                <button type="button" class="btn customBtn">Save to Profile</button>
            </div>
            <Footer />
        </div>
    );
}