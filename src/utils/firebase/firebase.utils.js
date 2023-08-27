import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut } from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDtKt5rdcvkr3ZTeU7O48bI9Zb8DPkSoTs",
    authDomain: "clothing-234a6.firebaseapp.com",
    projectId: "clothing-234a6",
    storageBucket: "clothing-234a6.appspot.com",
    messagingSenderId: "825570521054",
    appId: "1:825570521054:web:62bf817bb82279a882f74f"
  };
  
  const firebaseapp = initializeApp(firebaseConfig);
  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt:"select_account"
  })

  export const auth = getAuth();
  export const signINwithGooglePopup=()=> signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect =()=> signInWithRedirect(auth , googleProvider);


  export const db=getFirestore();

  export const createUserDocumentFromAuth =async (userAuth, additionalInformation={})=>{
    
    if(!userAuth) return;
    const userDocRef = doc(db, 'users' ,userAuth.uid )
  
    const userSnapshot = await getDoc(userDocRef);
    if(!userSnapshot.exists()){
      const {displayName, email}=userAuth;
      const createdAt=new Date();

      try{
        await setDoc(userDocRef, {
          displayName, 
          email, 
          createdAt,
          ...additionalInformation,
        })
      }
      catch(error){
        
        console.log("error creating the user ", error.message);
      }
    }
    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword=async (email, password)=>{
if(!email || !password) return;
    createUserWithEmailAndPassword(auth, email, password)
  }

  export const signOutUser=async()=>await signOut(auth);

  export const onAuthStateChangedListener=(callback)=> onAuthStateChanged(auth, callback);