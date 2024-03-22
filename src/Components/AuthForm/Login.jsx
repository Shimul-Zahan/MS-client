import axios from 'axios';
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MyContext } from '../../Auth/AuthProvide';

const Login = () => {

    const navigate = useNavigate();
    const { googleLogin } = useContext(MyContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const info = {
            email, password,
        }

        console.log(info);

        const res = await axios.post('http://localhost:8000/login', info);
        console.log(res.data?.login);
        if (!res.data?.login) {
            window.alert('Please register before login');
        } else {
            window.alert('Successfully login');
            localStorage.setItem('ms_userInfo', JSON.stringify(res?.data));
            navigate('/');
        }

    };


    const createAccountWithGoogle = () => {
        googleLogin()
            .then(res => navigate('/'))
            .catch(err => setError(err.message.slice(9, 100)))
    }

    return (
        <div className='w-full min-h-screen flex justify-center items-center bg-blue-950'>
            <div className="max-w-[800px] mx-auto my-12 bg-[#353d72] shadow-md sm:px-8 sm:py-10 lg:px-16 lg:py-24 rounded-md">
                <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-12">
                    <div className="w-full sm:w-2/3 mb-8 sm:mb-0">
                        {/* Left side form */}
                        <h2 className="text-4xl font-bold mb-6 text-white">Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col space-y-5 mb-4">
                                <input className="flex h-12 w-full rounded-md border  px-3 py-3 text-white text-base focus:outline-none" placeholder="Email" type="email" name='email' />
                                <input className="flex h-12 w-full rounded-md border  px-3 py-3 text-sm focus:outline-none" placeholder="Password" type="password" name='password' />
                            </div>
                            <div className="flex items-center space-x-2 mb-6">
                                <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on" className="peer h-4 w-4 shrink-0 rounded-sm border  " />
                                <label className="text-lg font-medium text-white" htmlFor="keep-signed-in">
                                    Keep me signed in
                                </label>
                            </div>
                            <button type='submit' className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-red-600 text-white">
                                LOG IN
                            </button>
                        </form>
                        <p className="text-lg mt-6 flex gap-2 text-white">
                            Did you <a className="text-white" href="#"> forget your password? </a>
                        </p>
                    </div>
                    {/* Right side content */}
                    <div className="w-full sm:w-1/2">
                        <p className="text-lg mb-6 text-white">
                            If you don&apos;t already have an account click the button below to create your account.
                        </p>
                        <Link to='/registration' className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full mb-2 bg-black text-white">
                            CREATE ACCOUNT
                        </Link>
                        <p className="text-center my-4 text-white">OR</p>
                        <button onClick={createAccountWithGoogle} className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full mb-2 bg-blue-600 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
                            <h1 className='mx-2'>LOGIN IN WITH GOOGLE</h1>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login