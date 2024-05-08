import React from 'react';

export function Footer() {
    return (
        <div>
            <footer class="pt-3 mt-4 footer-custom">
                <ul class="nav justify-content-center border-bottom gray-border pb-3 mb-3">
                    <li class="nav-item">
                        <a href="#" class="nav-link px-2" style="color: white;">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link px-2" style="color: white;">Create Quiz</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link px-2" style="color: white;">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link px-2" style="color: white;">Sign in</a>
                    </li>
                </ul>
                <p class="text-center">made with love by Emily, Erica, Madelyn & Ryan</p>
            </footer>
        </div>
    );
}