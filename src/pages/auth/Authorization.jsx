import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from '../../Components/Loader/Loader';
import {
    changeUserLoginEmail,
    changeUserLoginPassword,
    changeStatusLoginLoading,
} from '../../features/slices/authorizationSlice';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/configFirebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { setUid } from '../../features/slices/cartSlice';

export function Authorization() {
    const [eye, setEye] = useState(false);
    const inputPassword = useRef(null);
    const dispatch = useDispatch();
    const userLoginEmail = useSelector((state) => state.authorization.form.userEmail);
    const userLoginPassword = useSelector((state) => state.authorization.form.userPassword);
    const isLoginLoading = useSelector((state) => state.authorization.isLoading);
    const navigate = useNavigate();
    const userId = useSelector((state) => state.auth?.userID);
    //email
    const loginUser = (e) => {
        e.preventDefault();
        dispatch(changeStatusLoginLoading(true));
        signInWithEmailAndPassword(auth, userLoginEmail, userLoginPassword)
            .then((userCredential) => {
                dispatch(changeStatusLoginLoading(false));
                toast.success('Login successful');
                dispatch(changeUserLoginEmail(''));
                dispatch(changeUserLoginPassword(''));
                dispatch(setUid(userId));
                navigate('/online-shop');
            })
            .catch((error) => {
                toast.error(error.message);
                dispatch(changeStatusLoginLoading(false));
            });
    };

    //google
    const provider = new GoogleAuthProvider();
    const loginUserWithGoogle = (e) => {
        dispatch(changeStatusLoginLoading(true));
        signInWithPopup(auth, provider)
            .then((result) => {
                toast.success('Login successful');
                dispatch(changeStatusLoginLoading(false));

                navigate('/online-shop');
            })
            .catch((error) => {
                toast.error(error.message);
                dispatch(changeStatusLoginLoading(false));
            });
    };

    return (
        <>
            {isLoginLoading && <Loader type={'Authorization'} />}
            <div className="flex justify-center items-center my-40 ">
                <div className="shadow-gray-900 shadow-card flex flex-col rounded-xl bg-white bg-clip-border w-[300px] shadow-md">
                    <div className="mx-4 -mt-6 translate-y-0">
                        <div className="shadow-cyan pe-1 rounded-lg bg-cyan-900 py-3">
                            <h4 className="mt-2 mb-0 text-center font-bold text-white">Sign in</h4>
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
                                <div className="relative h-10 w-full min-w-[200px]">
                                    <input
                                        onChange={(e) =>
                                            dispatch(changeUserLoginEmail(e.target.value))
                                        }
                                        value={userLoginEmail}
                                        type="email"
                                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "
                                    />
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-cyan-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-cyan-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Email
                                    </label>
                                </div>
                                <div className="relative h-10 w-full min-w-[200px]">
                                    {eye ? (
                                        <span className="absolute  top-3  right-3 text-lg cursor-pointer">
                                            {' '}
                                            <AiOutlineEye
                                                onClick={() => {
                                                    setEye(!eye);
                                                    inputPassword.current.type = 'password';
                                                }}
                                            />
                                        </span>
                                    ) : (
                                        <span className="absolute  top-3  right-3 text-lg cursor-pointer">
                                            {' '}
                                            <AiOutlineEyeInvisible
                                                onClick={() => {
                                                    setEye(!eye);
                                                    inputPassword.current.type = 'text';
                                                }}
                                            />
                                        </span>
                                    )}
                                    <input
                                        ref={inputPassword}
                                        onChange={(e) =>
                                            dispatch(changeUserLoginPassword(e.target.value))
                                        }
                                        value={userLoginPassword}
                                        type="password"
                                        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-cyan-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                        placeholder=" "
                                    />
                                    <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-cyan-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-cyan-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                        Password
                                    </label>
                                </div>
                            </div>
                        </form>

                        <button
                            onClick={loginUser}
                            className="block w-[100%] mt-6 middle none center rounded-lg bg-cyan-900 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-cyan-900 transition-all hover:shadow-lg hover:shadow-cyan-900 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true"
                        >
                            Sign In
                        </button>
                        <div className="text-center p-3 text-gray-500">--or--</div>
                        <button
                            onClick={loginUserWithGoogle}
                            className="block w-[100%]  middle none center rounded-lg bg-blue-600 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-900 transition-all hover:shadow-lg hover:shadow-blue-900 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true"
                        >
                            Sign in with Google
                        </button>
                        <Link to="/online-shop/registration">
                            <p className="mt-5 mb-0 text-center text-sm hover:text-cyan-900">
                                Don&apos;t have an account?{' '}
                                <span className="font-semibold">Sign up</span>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
