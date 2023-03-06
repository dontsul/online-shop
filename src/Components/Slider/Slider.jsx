import { useSelector, useDispatch } from 'react-redux';
import { nextSlide, prevSlide, dotSlide } from '../../features/slices/sliderSlice';
import { sliderData } from '../../assets/data/data';
export const Slider = () => {
    const sliderInd = useSelector((state) => state.slider.numberSlide);
    const dispatch = useDispatch();

    return (
        <div className="relative pb-4">
            <div>
                {sliderData.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className={
                                parseInt(item.id) === sliderInd
                                    ? 'opacity-100 duration-700 ease-in-out scale-100'
                                    : 'opacity-0 duration-700 ease-in-out scale-95'
                            }
                        >
                            <div>
                                {parseInt(item.id) === sliderInd && (
                                    <img className="h-[600px] w-full" src={item.img} alt="slide" />
                                )}
                            </div>
                            <div className="absolute top-44 mx-auto inset-x-1/4">
                                <p className="text-white text-4x1 font-inter font-bold traking-normal leading-none">
                                    {parseInt(item.id) === sliderInd && item.text}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="flex absolute bottom-12 left-[45%]">
                {sliderData.map((dot, index) => {
                    return (
                        <div className="mr-4" key={index}>
                            <div
                                onClick={() => dispatch(dotSlide(index))}
                                className={
                                    index === sliderInd
                                        ? 'bg-cyan-900 rounded-full p-2 cursor-pointer'
                                        : 'bg-white rounded-full p-2 cursor-pointer'
                                }
                            ></div>
                        </div>
                    );
                })}
            </div>
            <div>
                <button
                    className="absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-cyan-900"
                    onClick={() => dispatch(nextSlide(sliderInd + 1))}
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
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>
            </div>
            <button
                className="absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-cyan-900"
                onClick={() => dispatch(prevSlide(sliderInd - 1))}
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
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                    />
                </svg>
            </button>
        </div>
    );
};
