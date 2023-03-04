import { NavigateButtons } from '../NavigateButtons/NavigateButtons';
import { Slider } from '../Slider/Slider';
import { SelectedFilter } from '../SelectedFilter/SelectedFilter';
import { ListProduct } from '../ListProduct/ListProduct';
export const Main = () => {
    return (
        <div>
            <Slider />
            <NavigateButtons />
            <SelectedFilter />
            <ListProduct />
        </div>
    );
};
