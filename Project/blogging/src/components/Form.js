import { useState } from "react";

const Form=()=>{
const [UserFormData,setUserFormData]=useState({
        userName:"",
        email:"",
        password:"",
        confirmpassword:"",
});
const handleChange=(e)=>{
    const val=e.target.value;

    setUserFormData(
        {...UserFormData,[e.target.name]:e.target.value});
    console.log(val);
}
    return(
        <>
        <form>
            <input type="text" value={UserFormData.userName}
            name="userName" onChange={handleChange} placeholder="UserName.."></input>
            <input type="text" value={UserFormData.email}
            name="email" onChange={handleChange} placeholder="Email.."></input>
            <input type="text" value={UserFormData.password}
            name="password" onChange={handleChange} placeholder="Passwword.."></input>
            <input type="text" value={UserFormData.confirmpassword}
            name="confirmpassword" onChange={handleChange} placeholder="Confirm Password"></input>
            <input type="submit"></input>
        </form>
        <div>
            <h2> Your Name is {UserFormData.userName}</h2>
        </div>
        </>
    );
}  
export default Form;