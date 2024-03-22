import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MyContext } from '../../Auth/AuthProvide';

const Registration = () => {

    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();
    const { passwordRegistration, googleLogin } = useContext(MyContext);


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };

    const handleRegistration = async e => {
        e.preventDefault();
        const form = e.target;
        const user = {
            name: form.name.value,
            password: form.password.value,
            email: form.email.value,
            image: selectedImage,
        }
        console.log(user);
        const res = await axios.post('http://localhost:8000/resgistration', user, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        if (res.data.message === 'Eamil alreay uses. Try again with new email') {
            window.alert('Eamil alreay uses. Try again with new email');
        } else {
            window.alert('Successfully created user');
            navigate('/otps')
        }
    }

    const createAccountWithGoogle = () => {
        googleLogin()
            .then(res => navigate('/'))
            .catch(err => setError(err.message.slice(9, 100)))
    }

    return (
        <div className='w-full min-h-screen flex justify-center items-center  bg-blue-950'>
            <div className="max-w-[800px] mx-auto my-12 p-6 bg-[#353d72] rounded-md shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16">
                <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-12">
                    <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
                        {/* Left side form */}
                        <h2 className="text-4xl font-bold mb-6 text-white">Sign Up</h2>
                        <form onSubmit={handleRegistration}>
                            <div className="flex flex-col space-y-4 mb-4">
                                <input className="flex h-12 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" placeholder="Username" type="text" name='name' />
                                <input className="flex h-12 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" placeholder="Password" type="password" name='password' />
                            </div>
                            <div className="flex flex-col space-y-4 mb-4">
                                <input className="flex h-12 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" placeholder="Email" type="emial" name='email' />
                                <input className="flex h-12 w-full rounded-md border mt-2 px-3 py-2 text-sm focus:outline-none" placeholder="Image" type="file" name="image" onChange={handleImageChange} />
                            </div>
                            <button type='submit' className="inline-flex items-center  mt-2 justify-center rounded-md text-lg font-medium  h-12 px-4 py-3 w-full bg-red-600 text-white">
                                LOG IN
                            </button>
                        </form>
                            
                        <p className="text-lg mt-6 flex gap-2 text-white ">
                            Did you <a className="text-white" href="#"> forget your password? </a>
                        </p>
                    </div>
                    {/* Right side content */}
                    <div className="w-full sm:w-1/2">
                        <p className="text-lg mb-6 text-white">
                            Already have an account click the button below to login your account.
                        </p>
                        <Link to='/login' className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full mb-2 bg-black text-white">
                            LOGIN ACCOUNT
                        </Link>
                        <p className="text-center my-4 text-white">OR</p>
                        <button onClick={createAccountWithGoogle} className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full mb-2 bg-blue-600 text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
                            <h1 className='mx-2'>SIGN IN WITH GOOGLE</h1>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration