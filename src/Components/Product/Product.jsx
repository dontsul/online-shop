import { useDispatch, useSelector } from 'react-redux';
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
                        <img className="w-auto rounded-lg h-40 w-40" src={image} alt="card image" />
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
            {/* <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
                <img className="w-full" src={image} alt="Product" />
                <div className="px-6 py-4">
                    <h3 className="font-bold text-xl mb-2">{title}</h3>
                    <p className="text-gray-700 text-base">{description.slice(0, 70)}...</p>
                    <p className="text-gray-700 text-base">Category: {category}</p>
                    <p className="text-gray-700 text-base">Rating: {rating.rate}</p>
                </div>
                <div className="px-6 py-4 flex justify-between">
                    <span className="text-xl font-bold">Price: ${price}</span>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                        Add to cart
                    </button>
                </div>
            </div> */}
            {/* <div class="max-w-sm rounded-lg overflow-hidden shadow-lg flex flex-col justify-between">
                <img class="w-full" src="product.jpg" alt="Product" />
                <div class="px-6 py-4">
                    <h3 class="font-bold text-xl mb-2">Product Name</h3>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id justo id
                        ipsum tristique pretium in eget metus.
                    </p>
                </div>
                <div class="px-6 py-4 flex justify-between">
                    <span class="text-xl font-bold">$19.99</span>
                    <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
                        Add to cart
                    </button>
                </div>
            </div> */}
        </Link>
    );
};
