import { ProductCart } from '../ProductCart/ProductCart';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCart } from '../../features/slices/cartSlice';
import { getAuth } from 'firebase/auth';
import { database } from '../../firebase/configFirebase';
import { getDatabase, ref, onValue } from 'firebase/database';
import { countingTotalMoney } from '../../features/slices/cartSlice';

export const ListProductCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const totalMoney = useSelector((state) => state.cart.money);

    useEffect(() => {
        dispatch(countingTotalMoney());

        const auth = getAuth();
        const userId = auth.currentUser?.uid;
        console.log(userId);
        if (userId) {
            const cartRef = ref(database, `users/${userId}/cart`);
            onValue(cartRef, (snapshot) => {
                const cartItems = snapshot.val();
                dispatch(setCart(cartItems || []));
            });
        }
    }, [dispatch, cartItems]);

    return (
        <div>
            <div className="my-28">
                <div className="flex justify-center">
                    <div className="w-full sm:w-2/3 lg:w-1/2 xl:w-2/5 bg-gray-100 p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Cart of goods</h2>

                        <div>
                            {cartItems.length === 0 && (
                                <p className="text-center">Your cart is empty</p>
                            )}
                            {cartItems.length > 0 && (
                                <ul className="divide-y divide-gray-300">
                                    {cartItems.length === 0 ? (
                                        <h3 className="text-center">Cart is empty</h3>
                                    ) : (
                                        cartItems.map((product) => {
                                            return (
                                                <ProductCart key={product.id} product={product} />
                                            );
                                        })
                                    )}
                                </ul>
                            )}

                            <div className="flex justify-between mt-4">
                                <span className="text-lg font-bold">Total:</span>
                                <span className="text-lg font-bold">${totalMoney.toFixed(2)}</span>
                            </div>
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
