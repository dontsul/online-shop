import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProduct } from '../features/slices/productSlice';
import { Button } from '@material-tailwind/react';
import { MoonLoader } from 'react-spinners';
import { ErrorPage } from '../pages/ErrorPage';
import { toast } from 'react-toastify';
import { addItem } from '../features/slices/cartSlice';
export const ProductPage = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.product);
    const status = useSelector((state) => state.product.status);
    const statusLogin = useSelector((state) => state.auth.isLoggedIn);
    const params = useParams();
    const { title, price, category, description, image } = product;

    const navigate = useNavigate();
    const handleAddToCart = (e) => {
        if (statusLogin) {
            dispatch(addItem(product));
            toast.success(`Added to cart ${title.slice(0, 10)}`);
        } else {
            navigate('/online-shop/authorization');
            toast.info('You need to Log in...');
        }
    };
    useEffect(() => {
        dispatch(fetchProduct(params.productId));
    }, [dispatch, params.productId]);
    return (
        <div className="relative my-20">
            {status === 'rejected' && <ErrorPage />}
            {status === 'loading' ? (
                <div className="flex justify-center items-center h-[100%] my-[200px]">
                    <MoonLoader color="#006064" />
                </div>
            ) : (
                <div className="container py-12">
                    <div className="flex flex-col rounded-xl bg-white bg-transparent bg-clip-border shadow-none">
                        <div className="flex">
                            <div className="w-1/3 w-70 h-90">
                                <img
                                    className="rounded-lg w-[250px] h-[300px]"
                                    src={image}
                                    alt="card product"
                                />
                            </div>
                            <div className="text-secondary w-2/3 flex-1 px-6">
                                <span className="font-bold uppercase text-cyan-900">{title}</span>

                                <p className="mb-5 opacity-80">{description}</p>
                                <p>
                                    <span className="font-bold">Category: {category}</span>
                                </p>

                                <p>
                                    <span className="font-bold">Price: {price}$</span>
                                </p>
                                <Button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleAddToCart(e);
                                    }}
                                    className="bg-cyan-900 my-8"
                                >
                                    Add to cart
                                </Button>
                            </div>
                            <div
                                className="cursor-pointer w-6 h-6"
                                title="go back"
                                onClick={() => {
                                    navigate(-1);
                                }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
