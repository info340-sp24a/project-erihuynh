import React from 'react';

export function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark navbar-custom">
                <div class="container-fluid">
                <a class="navbar-brand" href="#">Persona Playground</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    <a class="nav-link" href="createQuiz.html">Create Quiz</a>
                    <a class="nav-link" href="profile.html">Profile</a>
                    </div>
                </div>
                <div class="navbar-nav ml-auto">
                    <a class="nav-link" href="#">Sign In</a> 
                </div>
                </div>
            </nav>
        </div>
    );
}
