import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getAuth, onAuthStateChanged, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';

export default function SignIn(props) {

  const { currentUser, changeUserFunction } = props;

  const firebaseUIConfig = {
      signInOptions: [
        { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
        GoogleAuthProvider.PROVIDER_ID,
      ],
      signInFlow: 'popup', 
      credentialHelper: 'none',
      callbacks: {
        signInSuccessWithAuthResult: () => {
          return false; 
        }
      }
    }

  const authenticator = getAuth();

  return (
    <div>
      <Header />
      <div class="container">
        <h2>Pick a sign-in method below to get started:</h2>
        <StyledFirebaseAuth 
          firebaseAuth={authenticator}
          uiConfig={firebaseUIConfig} 
        />
      </div>
      <Footer />
    </div>
    )
  }
