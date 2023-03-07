import { Link } from 'react-router-dom';
import { AiFillFacebook, AiOutlineInstagram, AiFillTwitterCircle } from 'react-icons/ai';
export const Footer = () => {
    return (
        <div>
            <footer class="bg-gray-900 text-gray-400">
                <div class="container mx-auto py-6 px-4">
                    <div class="sm:flex sm:justify-between sm:items-center">
                        <div class="mb-4 sm:mb-0 w-[50%]">
                            <h2 class="text-lg font-bold">About</h2>
                            <p class="mt-3">
                                We are an online store that provides high-quality products at
                                affordable prices, with a focus on customer satisfaction.
                            </p>
                        </div>
                        <div class="sm:flex sm:items-center">
                            <div class="mb-4 sm:mb-0">
                                <h2 class="text-lg font-bold">Social media</h2>
                                <div class="mt-3 flex">
                                    <a href="#" class="text-gray-400 hover:text-gray-300 mr-4">
                                        <span class="sr-only">Facebook</span>
                                        <i class="fab fa-facebook">
                                            <AiFillFacebook />
                                        </i>
                                    </a>
                                    <a href="#" class="text-gray-400 hover:text-gray-300 mr-4">
                                        <span class="sr-only">Twitter</span>
                                        <i class="fab fa-twitter">
                                            <AiFillTwitterCircle />
                                        </i>
                                    </a>
                                    <a href="#" class="text-gray-400 hover:text-gray-300">
                                        <span class="sr-only">Instagram</span>
                                        <i class="fab fa-instagram">
                                            {' '}
                                            <AiOutlineInstagram />
                                        </i>
                                    </a>
                                </div>
                            </div>
                            <div class="sm:ml-6">
                                <h2 class="text-lg font-bold">Contacts</h2>
                                <p class="mt-3">Our address : </p>
                                <p class="mt-1">Phone: +38 (050) 123-45-67</p>
                                <p class="mt-1">Email: info@example.com</p>
                            </div>
                        </div>
                    </div>
                    <hr class="border-gray-800 my-6" />
                    <div class="text-center">
                        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
