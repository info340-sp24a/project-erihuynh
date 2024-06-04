import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getAuth, EmailAuthProvider, GoogleAuthProvider, signOut } from 'firebase/auth';

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
};

// export default function SignIn(props) {
//   const navigate = useNavigate();
//   const { currentUser } = props;
//   const authenticator = getAuth();

//   useEffect(() => {
//     if (currentUser) {
//       navigate('/profile');
//     }
//   }, [currentUser, navigate]);

//   return (
//     <div>
//       <Header />
//       <div className="container">
//         <h2>Pick a sign-in method below to get started:</h2>
//         <StyledFirebaseAuth
//           firebaseAuth={authenticator}
//           uiConfig={firebaseUIConfig}
//         />
//       </div>
//       <Footer />
//     </div>
//   );
// }

export default function SignIn(props) {
  const navigate = useNavigate();
  const { currentUser } = props;
  const authenticator = getAuth();

  useEffect(() => {
    if (currentUser) {
      navigate('/profile');
    }
  }, [currentUser, navigate]);

  const handleSignOut = () => {
    signOut(authenticator)
      .then(() => {
        // Sign-out successful.
        navigate('/'); // Redirect to home or sign-in page
      })
      .catch((error) => {
        // An error happened.
        console.error('Error signing out:', error);
      });
  };

  return (
    <div>
      <Header />
      <div className="container">
        <h2>Pick a sign-in method below to get started:</h2>
        <StyledFirebaseAuth
          firebaseAuth={authenticator}
          uiConfig={firebaseUIConfig}
        />
        {currentUser && (
          <button onClick={handleSignOut}>Sign Out</button>
        )}
      </div>
      <Footer />
    </div>
  );
}

// export default function SignIn(props) {

//   const navigate = useNavigate();
//   const { currentUser } = props;

//   useEffect(() => {
//     if (currentUser) {
//       navigate('/profile');
//     }
//   }, [currentUser, navigate]);

//   const firebaseUIConfig = {
//       signInOptions: [
//         { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
//         GoogleAuthProvider.PROVIDER_ID,
//       ],
//       signInFlow: 'popup', 
//       credentialHelper: 'none',
//       callbacks: {
//         signInSuccessWithAuthResult: () => {
//           return false; 
//         }
//       }
//     }

//   const authenticator = getAuth();

//   return (
//     <div>
//       <Header />
//       <div className="container">
//         <h2>Pick a sign-in method below to get started:</h2>
//         {currentUser ? (
//           <div>
//             <h3>Welcome, {currentUser.displayName}</h3>
//           </div>
//         ) : (
//           <StyledFirebaseAuth
//             firebaseAuth={authenticator}
//             uiConfig={firebaseUIConfig}
//           />
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
//   }
