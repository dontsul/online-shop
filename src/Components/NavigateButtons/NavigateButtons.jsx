import { nanoid } from '@reduxjs/toolkit';
import { Button } from '@material-tailwind/react';
import { useSelector, useDispatch } from 'react-redux';
import clothes from '../../assets/images/clothes.jpg';
import { filterCategory, filterSelected } from '../../features/slices/goodsSlice';
export const NavigateButtons = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.goods.categories);
    const selectedValue = useSelector((state) => state.goods.selected);
    return (
        <div>
            <div className="bg-cyan-900 p-2 w-[55%] mx-auto rounded-md">
                <h3 className="text-white text-center text-lg font-inter font-bold tracking-normal leading-none">
                    Catalog
                </h3>
            </div>
            <div className="flex justify-center items-center py-4">
                <img
                    className="h-[400px] w-[70%] rounded-md shadow-lg shadow-gray-600"
                    src={clothes}
                    alt="clothes"
                />
            </div>
            <div className="flex items-center justify-center py-8">
                {categories.map((category) => {
                    return (
                        <div key={nanoid()} className="mr-4">
                            <Button
                                onClick={(e) => {
                                    Promise.all([
                                        dispatch(filterCategory(e.target.value)),
                                        dispatch(filterSelected(selectedValue)),
                                    ]);

                                    // dispatch(filterCategory(e.target.value));
                                    // dispatch(filterSelected(selectedValue));
                                }}
                                value={category}
                                color="gray"
                                size="md"
                                variants="outlined"
                                ripple={true}
                                className="hover:bg-cyan-900 duration-300 ease-in-out"
                            >
                                {category}
                            </Button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
