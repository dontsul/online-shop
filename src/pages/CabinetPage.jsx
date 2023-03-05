export const CabinetPage = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 my-20">
                <div className="px-4 py-6 sm:px-0">
                    <h1 className="text-3xl font-bold mb-4">Welcome Vasiliy!</h1>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                        <div className="bg-white shadow-md overflow-hidden sm:rounded-lg mb-4 sm:mb-0">
                            <div className="px-4 py-5 sm:p-6">
                                <h2 className="text-lg font-bold mb-2">Personal information</h2>
                                <p className="text-gray-700">Name: Vasiliy</p>
                                <p className="text-gray-700">Surname: Dontsul</p>
                                <p className="text-gray-700">Email: dontsul.v@mail.com</p>
                                <p className="text-gray-700">Phone: +38 (050) 055-96-02</p>
                            </div>
                        </div>
                        <div className="bg-white shadow-md overflow-hidden sm:rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <h2 className="text-lg font-bold mb-2">Delivery address</h2>
                                <p className="text-gray-700">City: Kyiv</p>
                                <p className="text-gray-700">Street: Khreschatyk </p>
                                <p className="text-gray-700">House number: 1</p>

                                <p className="text-gray-700">Apartment: 10</p>
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
                                        01.01.2022
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
                                        <a href="#">Look at</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        #00002
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        01.02.2022
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
                                        <a href="#">Look at</a>
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
