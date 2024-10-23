import {TitleTextComponent} from "../UI/TitleTextComponent";
import {FormInputComponent} from "../UI/FormInputComponent";
import {SliderComponent} from "../UI/SliderComponent";

export function HeaderSliderComponent() {
    return (
        <>
            <TitleTextComponent title={'SWAPI'}/>
            <FormInputComponent/>
            <SliderComponent/>
        </>
    )
}