import { Link, Navigate } from "react-router-dom";
import NextflixLogo from "../assets/nextflix-logo.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

export default function SignUp() {
  const user = useSelector(selectUser);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (user) {
    return <Navigate to='/' replace={true} />;
  }

  const registerUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: `${firstName} ${lastName}`,
        }).then(() => {
          const user = userCredential.user;
          console.log(user);
          toast.success("Account created successfully.");
        });
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorMessage);
      });
  };
  return (
    <div className='bg-banner flex min-h-full flex-1 flex-col justify-center px-6 py-24 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center'>
        <Link to='/'>
          <img src={NextflixLogo} alt='' className='w-12' />
        </Link>

        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300'>
          Create your account
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-4' onSubmit={registerUser}>
          <div>
            <label
              htmlFor='firstName'
              className='block text-sm font-medium leading-6 text-gray-300'
            >
              First Name
            </label>
            <div className='mt-0.5'>
              <input
                id='firstName'
                name='firstName'
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className='block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 px-2'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='lastName'
              className='block text-sm font-medium leading-6 text-gray-300'
            >
              Last Name
            </label>
            <div className='mt-0.5'>
              <input
                id='lastName'
                name='lastName'
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className='block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 px-2'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium leading-6 text-gray-300'
            >
              Email address
            </label>
            <div className='mt-0.5'>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 px-2'
              />
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6 text-gray-300'
              >
                Password
              </label>
              <div className='text-sm'>
                <a
                  href='#'
                  className='font-semibold text-red-600 hover:text-red-500'
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className='mt-0.5'>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 px-2'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
            >
              Create an account
            </button>
          </div>
        </form>

        <p className='mt-10 text-center text-sm text-gray-400'>
          Already have an account?{" "}
          <Link
            to='/signin'
            className='font-semibold leading-6 text-red-600 hover:text-red-500'
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
