import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState( {
        email:"", password:""
    })

    const[showPassword, setShowPassword] = useState(false);

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
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6 '>
        <label className='w-full ' >
            <p className='font-medium mb-2  text-richblack-25 text-[0.875rem] leading-[1.35rem]'>
                Email Address<sup>*</sup>
            </p>
            <input 
                required
                type="email"
                value = {formData.email}
                onChange={changeHandler}
                placeholder="Enter email id"
                name="email"
                className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
            />
        </label>

        <label className='w-full relative '>
            <p className='font-medium text-richblack-25 mb-2 text-[0.875rem] leading-[1.35rem]'>
                Password<sup>*</sup>
            </p>
            <input 
             className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                required
                type= {showPassword ? ("text") : ("password")}
                value = {formData.password}
                onChange={changeHandler}
                placeholder="Enter Password"
                name="password"
            />

            <span onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible className='bg-white absolute cursor-pointer right-3 top-[38px]  '/>) : (<AiOutlineEye className='bg-white absolute cursor-pointer right-3 top-[38px]  ' />)}
            </span>

            <Link to="#">
                <p className='text-xl mt-1 text-blue-100 max-w-max  ml-auto '>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button className='bg-yellow-50 rounded-[8px] text-[15px] h-[40px]'>
            Sign In
        </button>

    </form>
  )
}

export default LoginForm
