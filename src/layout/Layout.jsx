import { Outlet } from 'react-router-dom';
import { NavbarMenu } from '../Components/NavbarMenu/NavbarMenu';

export const Layout = () => {
    return (
        <div>
            <NavbarMenu />
            <Outlet />
        </div>
    );
};
