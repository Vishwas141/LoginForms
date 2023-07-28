import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();

    const [student,setstudent]=useState(true);


    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(event) {
        event.preventDefault();
        if(formData.password !==formData.confirmPassword) {
            toast.error("Passwords do not match");
            return ;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };
        console.log("printing account data ");
        console.log(accountData);

        navigate("/dashboard");

    }


  return (
    <div>
        {/* student-Instructor tab */}
        <div className='flex border border-richblack-700 rounded-[40px] gap-x-3  mt-3 justify-center'>
            <button onClick={()=>
            {
                setstudent(true);
            }} className={student?"bg-richblack-900 rounded-[20px] font-bold border mt-1 px-4 mb-1 border-richblack-200  text-richblack-5":"bg-transparent text-richblack-200 py-2 "}>
                Student
            </button>
            <button 
            onClick={()=>
                {
                    setstudent(false);
                }} 
                className={!student?"bg-richblack-900 rounded-[20px] font-bold border mt-1 px-4 mb-1 border-richblack-200  text-richblack-5":"bg-transparent text-richblack-200 py-2 "}
          
            >
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>
        {/* first name and lastName */}
            <div className='flex  gap-x-5'>
                    <label >
                        <p  className='font-medium mb-2  text-richblack-25 text-[0.875rem] leading-[1.35rem]'>First Name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={formData.firstName}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'/>
                    
                    </label>

                    <label>
                        <p className='font-medium mb-2  text-richblack-25 text-[0.875rem] leading-[1.35rem]'>Last Name<sup>*</sup></p>
                        <input
                            required
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                        />
                    </label>
            </div>
            {/* email Add */}
            <label>
                    <p className='font-medium mb-2  text-richblack-25 text-[0.875rem] leading-[1.35rem]'>Email Address<sup>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        onChange={changeHandler}
                        placeholder="Enter Email Address "
                        value={formData.email}
                    />
            </label>

            {/* createPassword and Confirm Password */}
            <div className='flex gap-x-5'>
                <label className='relative font-medium mb-2  text-richblack-25 text-[0.875rem] leading-[1.35rem]'>
                    <p className='font-medium mb-2  text-richblack-25 text-[0.875rem] leading-[1.35rem]'>Create Password<sup>*</sup></p>
                    <input
                        required
                        type= {showPassword ? ("text") : ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.password}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                    <span onClick={() => setShowPassword((prev) => !prev)} className='absolute right-3 top-[38px] cursor-pointer'>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} />) : (<AiOutlineEye fontSize={24} />)}
                    </span>
                </label>

                <label className='relative'>
                    <p className='font-medium mb-2  text-richblack-25 text-[0.875rem] leading-[1.35rem]'>Confirm Password<sup>*</sup></p>
                    <input
                        required
                        type= {showPassword ? ("text") : ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        value={formData.confirmPassword}
                    />
                    <span onClick={() => setShowPassword((prev) => !prev)} className='absolute right-3 top-[75px] cursor-pointer'>
                        {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
            </div>
        <button  className='bg-yellow-50 rounded-[8px] text-[15px] h-[40px]'>
            Create Account
        </button>
        </form>

    </div>
  )
}

export default SignupForm
