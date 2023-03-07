import { Outlet } from 'react-router-dom';
import { NavbarMenu } from '../Components/NavbarMenu/NavbarMenu';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from '../Components/Footer/Footer';
export const Layout = () => {
    return (
        <div>
            <ToastContainer />
            <NavbarMenu />
            <Outlet />
            <Footer />
        </div>
    );
};
