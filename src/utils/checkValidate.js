export const checkValidate=(email,password,name)=>{
    const isNameValid=/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name);
   const isEmailValid=/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
   const isPasswordValid=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
   if(!isNameValid) return "Name is Invalid"
   if(!isEmailValid) return "Email ID is not valid";
   if(!isPasswordValid) return "password is not valid";
   return null;
}