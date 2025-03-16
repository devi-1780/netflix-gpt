import {signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";
const Header=()=>{
    const navigate=useNavigate();
    let user=useSelector(store=>store.user )
    function handleSignout(){
        signOut(auth).then(() => {
            navigate("/")
          }).catch((error) => {
            // An error happened.
          });
          
    }
    return(
        <div className="absolute flex justify-between px-20 bg-black bg-top-bottom bg-opacity-70">
        <div className=" py-4">
            <img className="w-[10%]" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
        </div>
        {<div className="mt-6">
            <button
             onClick={handleSignout}
             className="bg-red-600 text-white w-[90px] rounded"> Sign Out</button>
        </div>}
        </div>
    )
}
export default Header;