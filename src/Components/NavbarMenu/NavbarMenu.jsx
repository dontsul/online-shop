import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Navbar, MobileNav, Typography, IconButton } from '@material-tailwind/react';
import { changeStatusLogin } from '../../features/slices/authorizationSlice';
import { getAuth, signOut } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/configFirebase';
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from '../../features/slices/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const NavbarMenu = () => {
    const [openNav, setOpenNav] = useState(false);
    const quantityGoods = useSelector((state) => state.cart.quantityGoods);
    const statusLogin = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [displayName, setDisplayName] = useState('');

    const logOutUser = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                navigate('/');
                toast.success('Sign out succssesfully');
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <NavLink
                    to="/"
                    className=" hover:text-cyan-900 flex flex-row items-center font-inter text-base font-medium traking-normal leading-none text-center mr-4"
                    style={({ isActive }) =>
                        isActive ? { color: '#006064', fontWeight: 'bold' } : {}
                    }
                >
                    Home
                </NavLink>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <NavLink
                    to="/cabinet"
                    className=" hover:text-cyan-900 flex flex-row items-center font-inter text-base font-medium traking-normal leading-none text-center mr-4"
                    style={({ isActive }) =>
                        isActive ? { color: '#006064', fontWeight: 'bold' } : {}
                    }
                >
                    Cabinet
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal relative"
            >
                <NavLink
                    className="flex flex-row items-center cursor-pointer "
                    to="/cart"
                    style={({ isActive }) =>
                        isActive ? { color: '#006064', fontWeight: 'bold' } : {}
                    }
                >
                    <span className="absolute right-[130px] font-inter text-base font-medium traking-normal leading-none text-center mr-4">
                        {quantityGoods !== 0 ? quantityGoods : null}
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="#000000"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                    </svg>
                    <p className="hover:text-cyan-900 font-inter text-base font-medium traking-normal leading-none text-center mr-2">
                        Shopping cart
                    </p>
                </NavLink>
            </Typography>
        </ul>
    );

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                if (user.displayName === null) {
                    const user1 = user.email.substring(0, user.email.indexOf('@'));
                    const uName = user1.charAt(0).toUpperCase() + user1.slice(1);
                    setDisplayName(uName);
                } else {
                    setDisplayName(user.displayName);
                }

                dispatch(
                    SET_ACTIVE_USER({
                        email: user.email,
                        userName: user.displayName ? user.displayName : displayName,
                        userID: user.uid,
                    })
                );
            } else {
                setDisplayName('');
                dispatch(REMOVE_ACTIVE_USER());
            }
        });
    }, []);

    useEffect(() => {
        window.addEventListener('resize', () => window.innerWidth >= 960 && setOpenNav(false));
    }, []);

    return (
        <>
            {/* <ToastContainer /> */}
            <div className=" flex justify-center">
                <Navbar className="mx-auto w-[85%] py-2 px-4 lg:px-8 lg:py-4 z-40 fixed ">
                    <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                        <Typography className="mr-4 cursor-pointer py-1.5 font-normal">
                            <NavLink to="/">
                                <span className="hover:text-cyan-900">Material Tailwind</span>
                            </NavLink>
                        </Typography>
                        <div className="hidden lg:block">{navList}</div>

                        <Typography className="mr-4 cursor-pointer py-1.5 font-normal">
                            {statusLogin ? (
                                <NavLink
                                    onClick={logOutUser}
                                    to="/"
                                    className="hidden lg:inline-block mr-3"
                                >
                                    <span className="hover:text-cyan-900">Sign out</span>
                                </NavLink>
                            ) : (
                                <NavLink
                                    style={({ isActive }) =>
                                        isActive ? { color: '#006064', fontWeight: 'bold' } : {}
                                    }
                                    to="/authorization"
                                    className="hidden lg:inline-block mr-3"
                                >
                                    <span className="hover:text-cyan-900">Sign in</span>
                                </NavLink>
                            )}
                            {!statusLogin && (
                                <NavLink
                                    style={({ isActive }) =>
                                        isActive ? { color: '#006064', fontWeight: 'bold' } : {}
                                    }
                                    to="/registration"
                                    className="hidden lg:inline-block"
                                >
                                    <span className="hover:text-cyan-900">Sign up</span>
                                </NavLink>
                            )}
                        </Typography>

                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                    <MobileNav open={openNav}>
                        <div className="container mx-auto">
                            {navList}
                            {statusLogin ? (
                                <NavLink
                                    onClick={logOutUser}
                                    to="/"
                                    size="sm"
                                    className="mb-2 mr-2"
                                >
                                    <span className="text-gray-900 hover:text-cyan-900">
                                        Sign out
                                    </span>
                                </NavLink>
                            ) : (
                                <NavLink
                                    style={({ isActive }) =>
                                        isActive ? { color: '#006064', fontWeight: 'bold' } : {}
                                    }
                                    to="/authorization"
                                    variant="gradient"
                                    size="sm"
                                    className="mb-2 mr-2"
                                >
                                    <span className="text-gray-900 hover:text-cyan-900">
                                        Sign in
                                    </span>
                                </NavLink>
                            )}

                            {!statusLogin && (
                                <NavLink
                                    style={({ isActive }) =>
                                        isActive ? { color: '#006064', fontWeight: 'bold' } : {}
                                    }
                                    to="/registration"
                                    variant="gradient"
                                    size="sm"
                                    className="mb-2 "
                                >
                                    <span className="text-gray-900 hover:text-cyan-900">
                                        Sign up
                                    </span>
                                </NavLink>
                            )}
                        </div>
                    </MobileNav>
                </Navbar>
            </div>
        </>
    );
};
