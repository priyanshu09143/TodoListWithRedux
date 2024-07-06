import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword} from "firebase/auth"
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
          if (user) {
            navigate('/')
          }
        })
      })

      const handleSignIn = (e) => {
        e.preventDefault();
        if(email === "" || password === " "){
          toast.error("Please Enter Email And Password")
          return
        }
        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            toast.success("Welcome Again..!")
            navigate("/")
          })
          .catch(err => toast.error("Wrong Email Or Password"));
      }


    return (
        <div className='login flex flex-col items-center gap-10 md:gap-20 h-screen bg-green-200 py-10 md:py-20 w-screen'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8'>
                <Link to={"/register"} className='text-green-600 font-bold text-xl md:text-2xl'>Register</Link>
                <h2 className='text-black font-bold text-xl md:text-2xl'>Login</h2>
            </div>
            <div className='inputs flex flex-col justify-center items-center gap-4 w-full px-4'>
                <input type='email' 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                className='outline-none rounded-md px-6 py-3 bg-green-100 w-full md:w-1/3 lg:w-1/4' placeholder='Email' />
                <input type='password' 
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                className='outline-none rounded-md px-6 py-3 bg-green-100 w-full md:w-1/3 lg:w-1/4' placeholder='Password' />
                <button 
                onClick={handleSignIn}
                className='bg-green-400 px-10 py-3 rounded-md text-white transition w-full md:w-1/3 lg:w-1/4 hover:bg-green-100 hover:text-black'>Login</button>
                <Link to={"/register"} className='text-green-600'>Don't Have an Account?</Link>

            </div>
        </div>
    )
}

export default Login