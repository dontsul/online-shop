import { useDispatch } from 'react-redux';
import { Button } from '@material-tailwind/react';
import { removeFromCart } from '../../features/slices/cartSlice';
import { changeQuantity } from '../../features/slices/cartSlice';
import { useEffect } from 'react';
import { addToMoney } from '../../features/slices/cartSlice';

export const ProductCart = (props) => {
    const dispatch = useDispatch();
    const { id, title, price, description, image, quantity } = props.product;
    useEffect(() => {}, []);
    return (
        <div>
            <li className="flex justify-between py-2">
                <div className="flex items-center">
                    <img src={image} alt={title} className="w-16 h-16 mr-4" />
                    <div>
                        <h3 className="font-bold">{title}</h3>
                        <p className="text-gray-600">{description.slice(0, 40)}...</p>
                        <div>
                            <Button
                                onClick={() => {
                                    dispatch(changeQuantity({ id, value: -1 }));
                                    dispatch(addToMoney(-price));
                                }}
                                className="py-1 px-3 bg-cyan-900 mr-2"
                            >
                                -
                            </Button>
                            <span className="text-gray-600">Quantity: {quantity}</span>
                            <Button
                                onClick={() => {
                                    dispatch(changeQuantity({ id, value: 1 }));
                                    dispatch(addToMoney(price));
                                }}
                                className="py-1 px-3 bg-cyan-900 ml-2"
                            >
                                +
                            </Button>
                        </div>
                        <span className="text-gray-600">Price: {price}$</span>
                        <div>
                            <Button
                                onClick={(e) => {
                                    dispatch(removeFromCart(id));
                                    dispatch(addToMoney(0));
                                }}
                                className="bg-cyan-900 "
                            >
                                Remove
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className="font-bold mr-2"> ${(price * quantity).toFixed(2)}</span>
                </div>
            </li>
        </div>
    );
};
