// import { useContext } from "react";
// import { UserContext } from "../../components/context/user.context";
import { signINwithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn=()=>{
    // const {setcurrentUser}=useContext(UserContext);
    const logGoogleUser=async()=>{
        try{
        await signINwithGooglePopup();
        // setcurrentUser(user)
        }catch(err){
            alert("An error occured, Please try again")
        }
    //    console.log("userDocRef",userDocRef);
    }

  

    return (
        <div>
            <h1> Sign In With Google </h1>
            <button className="google-sign-in" onClick={logGoogleUser}>
                Sign In
            </button>
            
        </div>
    )
}
export default SignIn