import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import {
    // changeUserName,
    // changeUserSurname,
    changeUserEmail,
    changeUserPassword,
    changeUserCPassword,
    changeStatusLoading,
} from '../../features/slices/registrationSlice';

import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/configFirebase';
import { Loader } from '../../Components/Loader/Loader';

export const Registration = () => {
    const [eyeP, setEyeP] = useState(false);
    const [eyeCP, setEyeCP] = useState(false);
    const inputP = useRef(null);
    const inputCP = useRef(null);

    const dispatch = useDispatch();
    // const userName = useSelector((state) => state.registration.form.userName);
    // const userSurname = useSelector((state) => state.registration.form.userSurname);
    const userEmail = useSelector((state) => state.registration.form.userEmail);
    const userPassword = useSelector((state) => state.registration.form.userPassword);
    const userCPassword = useSelector((state) => state.registration.form.userCPassword);
    const isLoading = useSelector((state) => state.registration.isLoading);

    const navigate = useNavigate();

    const registerUser = (e) => {
        e.preventDefault();
        if (userPassword !== userCPassword) {
            toast.error('Password do not match');
        } else {
            dispatch(changeStatusLoading(true));

            createUserWithEmailAndPassword(auth, userEmail, userPassword)
                .then((userCredential) => {
                    const user = userCredential.user;
                    dispatch(changeStatusLoading(false));
                    toast.success('Registration successful');
                    navigate('/authorization');
                    dispatch(changeUserEmail(''));
                    dispatch(changeUserPassword(''));
                    dispatch(changeUserCPassword(''));
                })
                .catch((error) => {
                    toast.error(error.message);
                    dispatch(changeStatusLoading(false));
                });
        }
    };
    return (
        <>
            <ToastContainer />
            {isLoading && <Loader type={'Registration'} />}
            <div className="flex justify-center items-center mt-40 mb-20">
                <div className="shadow-gray-900 shadow-card flex flex-col rounded-xl bg-white bg-clip-border w-[300px] shadow-md">
                    <div className="mx-4 -mt-6 translate-y-0">
                        <div className="shadow-cyan pe-1 rounded-lg bg-cyan-900 py-3">
                            <h4 className="mt-2 mb-0 text-center font-bold text-white">Sign up</h4>
                            <div className="mt-4 flex">
                                <a className="button button-text ml-auto" href="!#">
                                    <i className="fab fa-facebook-f text-lg text-white"></i>
                                </a>
                                <a className="button button-text" href="!#">
                                    <i className="fab fa-github text-lg text-white"></i>
                                </a>
                                <a className="button button-text mr-auto" href="!#">
                                    <i className="fab fa-google text-lg text-white"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-secondary flex-1 p-6">
                        <form action="role">
                            <div className="flex flex-col gap-4">
                                {/* <div className="relative h-10 w-full min-w-[200px]">
                                    <input
                                        onChange={(e) => dispatch(changeUserName(e.target.value))}
                                        value={userName}
                                        type="text"
                                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "
                                    />
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-cyan-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-cyan-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Name
                                    </label>
                                </div>
                                <div className="relative h-10 w-full min-w-[200px]">
                                    <input
                                        onChange={(e) =>
                                            dispatch(changeUserSurname(e.target.value))
                                        }
                                        value={userSurname}
                                        type="text"
                                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "
                                    />
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-cyan-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-cyan-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Surname
                                    </label>
                                </div> */}
                                <div className="relative h-10 w-full min-w-[200px]">
                                    <input
                                        onChange={(e) => dispatch(changeUserEmail(e.target.value))}
                                        value={userEmail}
                                        type="email"
                                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "
                                        required
                                    />
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-cyan-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-cyan-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Email
                                    </label>
                                </div>
                                <div className="relative h-10 w-full min-w-[200px]">
                                    {eyeP ? (
                                        <span className="absolute  top-3  right-3 text-lg cursor-pointer">
                                            {' '}
                                            <AiOutlineEye
                                                onClick={() => {
                                                    setEyeP(!eyeP);
                                                    inputP.current.type = 'password';
                                                }}
                                            />
                                        </span>
                                    ) : (
                                        <span className="absolute  top-3  right-3 text-lg cursor-pointer">
                                            {' '}
                                            <AiOutlineEyeInvisible
                                                onClick={() => {
                                                    setEyeP(!eyeP);
                                                    inputP.current.type = 'text';
                                                }}
                                            />
                                        </span>
                                    )}

                                    <input
                                        ref={inputP}
                                        onChange={(e) =>
                                            dispatch(changeUserPassword(e.target.value))
                                        }
                                        value={userPassword}
                                        type="password"
                                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "
                                        required
                                    />
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-cyan-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-cyan-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Password
                                    </label>
                                </div>
                                <div className="relative h-10 w-full min-w-[200px]">
                                    {eyeCP ? (
                                        <span className="absolute  top-3  right-3 text-lg cursor-pointer">
                                            {' '}
                                            <AiOutlineEye
                                                onClick={() => {
                                                    setEyeCP(!eyeCP);
                                                    inputCP.current.type = 'password';
                                                }}
                                            />
                                        </span>
                                    ) : (
                                        <span className="absolute  top-3  right-3 text-lg cursor-pointer">
                                            {' '}
                                            <AiOutlineEyeInvisible
                                                onClick={() => {
                                                    setEyeCP(!eyeCP);
                                                    inputCP.current.type = 'text';
                                                }}
                                            />
                                        </span>
                                    )}
                                    <input
                                        ref={inputCP}
                                        onChange={(e) =>
                                            dispatch(changeUserCPassword(e.target.value))
                                        }
                                        value={userCPassword}
                                        type="password"
                                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "
                                        required
                                    />
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-cyan-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-cyan-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Confirm password
                                    </label>
                                </div>
                            </div>
                        </form>

                        <button
                            onClick={registerUser}
                            className="block w-[100%] mt-6 middle none center rounded-lg bg-cyan-900 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-900 transition-all hover:shadow-lg hover:shadow-cyan-900 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true"
                        >
                            Sign Up
                        </button>
                        <Link to="/authorization">
                            <p className="mt-5 mb-0 text-center text-sm hover:text-cyan-900">
                                Already an account? <span className="font-semibold">Sign in</span>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
