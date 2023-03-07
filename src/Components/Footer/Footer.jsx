import { Link } from 'react-router-dom';
import { AiFillFacebook, AiOutlineInstagram, AiFillTwitterCircle } from 'react-icons/ai';
export const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-gray-400">
                <div className="container mx-auto py-6 px-4">
                    <div className="sm:flex sm:justify-between sm:items-center">
                        <div className="mb-4 sm:mb-0 w-[50%]">
                            <h2 className="text-lg font-bold">About</h2>
                            <p className="mt-3">
                                We are an online store that provides high-quality products at
                                affordable prices, with a focus on customer satisfaction.
                            </p>
                        </div>
                        <div className="sm:flex sm:items-center">
                            <div className="mb-4 sm:mb-0">
                                <h2 className="text-lg font-bold">Social media</h2>
                                <div className="mt-3 flex">
                                    <div className="text-gray-400 hover:text-gray-300 mr-4 cursor-pointer">
                                        <span className="sr-only">Facebook</span>
                                        <i className="fab fa-facebook">
                                            <AiFillFacebook />
                                        </i>
                                    </div>
                                    <div className="text-gray-400 hover:text-gray-300 mr-4 cursor-pointer">
                                        <span className="sr-only">Twitter</span>
                                        <i className="fab fa-twitter">
                                            <AiFillTwitterCircle />
                                        </i>
                                    </div>
                                    <div className="text-gray-400 hover:text-gray-300 cursor-pointer">
                                        <span className="sr-only">Instagram</span>
                                        <i className="fab fa-instagram">
                                            {' '}
                                            <AiOutlineInstagram />
                                        </i>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:ml-6">
                                <h2 className="text-lg font-bold">Contacts</h2>
                                <p className="mt-3">Our address: Kyiv, Ukraine </p>
                                <p className="mt-1">Phone: +38 (050) 123-45-67</p>
                                <p className="mt-1">Email: info@example.com</p>
                            </div>
                        </div>
                    </div>
                    <hr className="border-gray-800 my-6" />
                    <div className="text-center">
                        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
