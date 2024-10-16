import './App.css';
import {TitleTextComponent} from "./Components/TitleTextComponent";
import {FormInputComponent} from "./Components/FormInputComponent";
import {SliderComponent} from "./Components/SliderComponent";

function App() {
    return (
        <div className="App">
            <TitleTextComponent/>
            <FormInputComponent/>
            <SliderComponent/>
        </div>
    );
}

export default App;
