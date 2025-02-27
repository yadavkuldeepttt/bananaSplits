import React, { createContext, useState, useEffect, ReactNode } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

// Define interface for user data
interface UserData extends FirebaseAuthTypes.User {
  role?: string;
  createdAt?: FirebaseFirestoreTypes.Timestamp;
  lastLogin?: FirebaseFirestoreTypes.Timestamp;
  name?: string;
  photoUrl?: string;
  provider?: string;
  [key: string]: any; // Allow for additional fields from Firestore
}

// Define context interface
interface AuthContextType {
  user: UserData | null;
  loading: boolean;
}

// Create context with default values
export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true
});

// Define props for AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Set up the auth state listener when the component mounts
  useEffect(() => {
    // Configure GoogleSignin
    GoogleSignin.configure({
      webClientId: "610446404679-ehqsev31sj8gfkopjakmm39qcj8jda8v.apps.googleusercontent.com",
    });
    
    // Subscribe to auth state changes
    const unsubscribe = auth().onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        // User is signed in, update the user state
        try {
          // Get additional user data from Firestore
          const userDoc = await firestore().collection('users').doc(firebaseUser.uid).get();
          
          if (userDoc.exists) {
            // Combine Firebase auth user with Firestore data
            setUser({
              ...firebaseUser,
              ...userDoc.data()
            });
          } else {
            setUser(firebaseUser);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          setUser(firebaseUser);
        }
      } else {
        // User is signed out
        setUser(null);
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};