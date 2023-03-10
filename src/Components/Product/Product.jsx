import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { addItem } from '../../features/slices/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Product = (props) => {
    const dispatch = useDispatch();
    const statusLogin = useSelector((state) => state.auth.isLoggedIn);
    const { id, title, price, category, description, image, rating } = props.product;
    const navigate = useNavigate();

    const handleAddToCart = (e) => {
        if (statusLogin) {
            dispatch(addItem(props.product));
            toast.success(`Added to cart ${title.slice(0, 10)}`);
        } else {
            navigate('/shop/authorization');
            toast.info('You need to Log in...');
        }
    };

    return (
        <>
            <Link
                to={`/shop/${id}`}
                className="flex flex-column shadow-md shadow-cyan-900 rounded-lg cursor-pointer border rounded-md overflow-hidden"
            >
                <div className="shadow-card flex flex-col rounded-xl bg-white bg-clip-border grow m-4">
                    <div className="mx-4 mt-4 translate-y-0 flex justify-center">
                        <div blur-shadow-image="true">
                            <img
                                className="w-auto rounded-lg h-40 w-40"
                                src={image}
                                alt="product"
                            />
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
                                        handleAddToCart(e);
                                    }}
                                    className="p-3 bg-cyan-900"
                                >
                                    Add to cart
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};
