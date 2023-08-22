import { signINwithGooglePopup } from "../../utils/firebase/firebase.utils";

import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
const SignIn=()=>{

    const logGoogleUser=async()=>{
        const {user} = await signINwithGooglePopup();
        createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1> Sign IN Page </h1>
            <button onClick={logGoogleUser}>
                Sign Ini with Google Popup
            </button>
        </div>
    )
}
export default SignIn