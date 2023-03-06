import { useSelector, useDispatch } from 'react-redux';
import { filterSelected, selectedValue } from '../../features/slices/goodsSlice';

export const SelectedFilter = () => {
    const dispatch = useDispatch();
    const selected = useSelector((state) => state.goods.selected);

    return (
        <div className="container">
            <div className="relative h-10 w-72 min-w-[200px]">
                <select
                    value={selected}
                    onChange={(e) => {
                        dispatch(filterSelected(e.target.value));
                        dispatch(selectedValue(e.target.value));
                    }}
                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-cyan-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                >
                    <option disabled value="default">
                        Default
                    </option>
                    <option value="lowToHigh">Low to High</option>
                    <option value="highToLow">High to Low</option>
                    <option value="customerReview">Customer review</option>
                </select>
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-cyan-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-cyan-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-cyan-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Sort by:
                </label>
            </div>
        </div>
    );
};
