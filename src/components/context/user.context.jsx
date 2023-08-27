import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../../utils/firebase/firebase.utils";

 export const UserContext=createContext({
currentUser :null,
setcurrentUser :()=>null,
 });

 export const UserProvider =({children})=>{
   const [currentUser , setcurrentUser]=useState(null);
   const value={currentUser, setcurrentUser};

  //  signOutUser();

   useEffect(()=>{
    const unsubscribe= onAuthStateChangedListener((user)=>{

      if(user){
        createUserDocumentFromAuth(user);

      }
      setcurrentUser(user);
      
    })
    return unsubscribe;
   },[]);
   
    return <UserContext.Provider  value={value}>
    {children}
    </UserContext.Provider>
 }