import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

export const Product = (props) => {
    const { id, title, price, category, description, image, rating } = props.product;

    return (
        <Link to={`/${id}`} className="shadow-md shadow-cyan-900  rounded-lg cursor-pointer ">
            <div className="shadow-card flex flex-col rounded-xl bg-white bg-clip-border grow m-4">
                <div className="mx-4 mt-4 translate-y-0 flex justify-center">
                    <div blur-shadow-image="true">
                        <img className="w-auto rounded-lg h-40 w-40" src={image} alt="card image" />
                    </div>
                </div>
                <div className="text-secondary flex-1 p-2 ">
                    <div>
                        <h5 className=" mt-2 font-medium text-center p-4 text-xl">
                            {' '}
                            {title.slice(0, 70)}
                        </h5>
                    </div>
                    <p className="mb-3 ">{description.slice(0, 70)}...</p>
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
                            <Button className="bg-cyan-900">Add to cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
