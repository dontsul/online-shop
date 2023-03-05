import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/slices/cartSlice';
import { chanceTotalQuantity } from '../../features/slices/cartSlice';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { addToMoney } from '../../features/slices/cartSlice';

export const Product = (props) => {
    const dispatch = useDispatch();
    const { id, title, price, category, description, image, rating } = props.product;

    return (
        <Link
            to={`/${id}`}
            className="flex flex-column shadow-md shadow-cyan-900  rounded-lg cursor-pointer "
        >
            <div className="shadow-card flex flex-col rounded-xl bg-white bg-clip-border grow m-4">
                <div className="mx-4 mt-4 translate-y-0 flex justify-center">
                    <div blur-shadow-image="true">
                        <img className="w-auto rounded-lg h-40 w-40" src={image} alt="product" />
                    </div>
                </div>
                <div className="text-secondary flex-1 p-2 ">
                    <div>
                        <h5 className=" mt-2 font-base text-center p-4 text-xl ">
                            {' '}
                            {title.slice(0, 18)}
                        </h5>
                    </div>
                    <p className="mb-3 text-sm ">{description.slice(0, 70)}...</p>
                    <p className="mb-0 font-bold text-blue-gray-700">Category: {category} </p>
                    <p className="mb-0 font-bold text-blue-gray-700">Rating: {rating.rate} </p>
                </div>
                <div className="bg-transparent p-2 pt-0">
                    <div className="flex items-center justify-between">
                        <div className="ml-3">
                            <span className="mb-0 font-bold text-blue-gray-700">
                                Price: ${price}
                            </span>
                        </div>
                        <div>
                            <Button
                                onClick={(e) => {
                                    e.preventDefault();
                                    dispatch(addToCart(props.product));
                                    dispatch(chanceTotalQuantity());
                                    dispatch(addToMoney(price));
                                }}
                                className="bg-cyan-900"
                            >
                                Add to cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
