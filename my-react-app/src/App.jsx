import './App.css';
import {EmojiVotingComponent} from "./Components/EmojiVoiting/EmojiVotingComponent";
import {HeaderSliderComponent} from "./Components/HeaderSlider/HeaderSliderComponent";

function App() {
    return (
        <div className="App">
            <HeaderSliderComponent/>
            <EmojiVotingComponent/>
        </div>
    );
}

export default App;
