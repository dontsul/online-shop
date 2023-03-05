import { ProductCart } from '../ProductCart/ProductCart';
import { useSelector } from 'react-redux';

export const ListProductCart = () => {
    const goodsCart = useSelector((state) => state.cart.cart);
    const goodsCartMoney = useSelector((state) => state.cart.money);

    return (
        <div>
            <div className="my-28">
                <div className="flex justify-center">
                    <div className="w-full sm:w-2/3 lg:w-1/2 xl:w-2/5 bg-gray-100 p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Cart of goods</h2>
                        <ul className="divide-y divide-gray-300">
                            {goodsCart.length === 0 ? (
                                <h3 className="text-center">Cart is empty</h3>
                            ) : (
                                goodsCart.map((product) => {
                                    return <ProductCart key={product.id} product={product} />;
                                })
                            )}
                        </ul>
                        <div className="flex justify-between mt-4">
                            <span className="text-lg font-bold">Total:</span>
                            <span className="text-lg font-bold">${goodsCartMoney.toFixed(2)}</span>
                        </div>
                        <button className="w-full mt-4 py-2 px-4 bg-cyan-900 text-white rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
