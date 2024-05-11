import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Quiz } from './Quiz';

export function TakeQuiz() {
    return (
        <div>
            <Header />
            <Quiz />
            <Footer />
        </div>
    );
}