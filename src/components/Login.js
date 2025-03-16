import Header from "./Header";
import Description from "./Description";
import { useState } from "react";
import { checkValidate } from "../utils/checkValidate";
import { useRef } from "react";
const Login=()=>{
    let [isSignInForm,setIsSignInForm]=useState(true);
    let [errorMessage,setErrorMessage]=useState(null);
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    function handleToggleBtn(){
       setIsSignInForm(!isSignInForm);
    }
    function handleSubmitingForm(){
        const message=checkValidate(email.current.value,password.current.value);
        setErrorMessage(message)
    }
    return(
        <div>
        <Header />
        <div  className="">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web/IN-en-20250303-TRIFECTA-perspective_d5f81427-d6cf-412d-8e86-2315671b9be1_large.jpg" />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="absolute top-32 left-[40%] w-3/12 text-white bg-black bg-opacity-70 p-4 py-2">
            <h1 className="m-4 font-bold text-2xl">
             {isSignInForm?"Sign In" :"Sing Up"}
            </h1>
            {
                isSignInForm?null:
                <input 
                type="text"
                placeholder="Full Name"
                className="bg-transparent text-white border border-solid rounded border-slate-300 p-4 m-4 w-11/12 bg-black bg-opacity-75"
                 />
            }
            <input 
            ref={email}
            type="email"
            placeholder="Email"
            className="bg-transparent text-white border border-solid rounded border-slate-300 p-4 m-4 w-11/12 bg-black bg-opacity-75"
             />
            <input 
            ref={password}
            type="password"
            placeholder="Password"
            className="bg-transparent text-white border border-solid rounded border-slate-300 p-4 m-4 w-11/12 bg-black bg-opacity-75"
             />
             <p className="text-red-500 font-bold m-4">{errorMessage}</p>
            <button
            onClick={handleSubmitingForm}
            className="text-white bg-red-700 m-4 w-11/12 p-2 text-center rounded"
            >Sign In</button> 
            <p onClick={handleToggleBtn}
             className="text-white m-4 font-bold text-base cursor-pointer"
             >
            {isSignInForm?" New to Netflix ?Sing Up Now":"Already registerd Sign In Now"}
            </p>
        </form>
        </div>
    )
}
export default Login;