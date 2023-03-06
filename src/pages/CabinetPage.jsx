import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const CabinetPage = () => {
    const statusLogin = useSelector((state) => state.auth.isLoggedIn);
    const dataUser = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const { userName, userID, email } = dataUser;

    useEffect(() => {
        function checkAuth() {
            if (statusLogin === false) {
                navigate('/authorization');
                toast.info('Please, Sign in...');
            }
        }
        checkAuth();
    }, [statusLogin]);

    return (
        <div>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 mt-20">
                <div className="px-4 py-6 sm:px-0">
                    <h1 className="text-3xl font-bold mb-4">Welcome {userName}!</h1>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                        <div className="bg-white shadow-md overflow-hidden sm:rounded-lg mb-4 sm:mb-0">
                            <div className="px-4 py-5 sm:p-6">
                                <h2 className="text-lg font-bold mb-2">Personal information</h2>
                                <p className="text-gray-700">User: {userName}</p>
                                <p className="text-gray-700">Email: {email}</p>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-lg font-bold my-4">Your orders</h2>
                    <div className="bg-white shadow-md overflow-hidden sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Order number
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Order date
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Sum
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Details
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        #00001
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        01.03.2023
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Completed
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        1 000 $
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <p>Look at</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        #00002
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        07.03.2023
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                            In processing
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        2 000 $
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <p>Look at</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
