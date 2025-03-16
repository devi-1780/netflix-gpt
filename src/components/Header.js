const Header=()=>{
    return(
        <div className="absolute flex justify-between px-20">
        <div className=" py-4">
            <img className="w-[20%]" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
        </div>
        <div className="flex h-[30px] mt-5">
            <button className="px-5 border border-white mx-4 text-white rounded">English</button>
            <button className="bg-red-600 px-4 text-white w-[90px] rounded"> Sign In</button>
        </div>
        </div>
    )
}
export default Header;