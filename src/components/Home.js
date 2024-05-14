import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { HomeHeader } from './HomeHeader';


export function Home(props) {
    return (
        <div>
            <Header />
            <div>
                <HomeHeader />
            </div>
            <Footer />
        </div>
    );
}