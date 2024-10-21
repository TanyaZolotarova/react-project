import './App.css';
import {TitleTextComponent} from "./Components/TitleTextComponent";
import {FormInputComponent} from "./Components/FormInputComponent";
import {SliderComponent} from "./Components/SliderComponent";
import {EmojiComponent} from "./Components/EmojiComponent";
import {cilFrown, cilHappy, cilMeh, cilMoodGood, cilMoodVeryBad} from "@coreui/icons";
import {ButtonComponent} from "./Components/ButtonComponent";
import {useState} from "react";

function App() {
    const [emojiData, setEmojiData] = useState([
        {id: 'Happy', count: parseInt(localStorage.getItem('Happy')) || 0},
        {id: 'Frown', count: parseInt(localStorage.getItem('Frown')) || 0},
        {id: 'Meh', count: parseInt(localStorage.getItem('Meh')) || 0},
        {id: 'MoodGood', count: parseInt(localStorage.getItem('MoodGood')) || 0},
        {id: 'MoodVeryBad', count: parseInt(localStorage.getItem('MoodVeryBad')) || 0},
    ]);

    const [winner, setWinner] = useState(null);

    function showResults() {
        const maxVoteEmoji = emojiData.reduce((maxCount, emoji) =>
            emoji.count > maxCount.count ? emoji : maxCount
        );

        if (maxVoteEmoji.count > 0) {
            setWinner(maxVoteEmoji);
        } else {
            setWinner(null);
        }
    }

    function clearResults() {
        const resetEmojiData = emojiData.map(emoji => ({...emoji, count: 0}));
        setEmojiData(resetEmojiData);
        localStorage.clear();
        setWinner(null);
    }

    return (
        <div className="App">
            <TitleTextComponent title={'SWAPI'}/>
            <FormInputComponent/>
            <SliderComponent/>
            <TitleTextComponent smallTitle={'Голосування за найкращий смайлик'}/>
            <EmojiComponent icon={cilHappy} id={'Happy'} setEmojiData={setEmojiData} emojiData={emojiData}/>
            <EmojiComponent icon={cilFrown} id={'Frown'} setEmojiData={setEmojiData} emojiData={emojiData}/>
            <EmojiComponent icon={cilMeh} id={'Meh'} setEmojiData={setEmojiData} emojiData={emojiData}/>
            <EmojiComponent icon={cilMoodGood} id={'MoodGood'} setEmojiData={setEmojiData} emojiData={emojiData}/>
            <EmojiComponent icon={cilMoodVeryBad} id={'MoodVeryBad'} setEmojiData={setEmojiData} emojiData={emojiData}/>
            <ButtonComponent title={'Show Results'} onClick={showResults}/>
            {winner && (
                <>
                    <TitleTextComponent resultTitle={'Результати голосування:'}/>
                    <TitleTextComponent resultTitle={'Переможець:'}/>
                    <EmojiComponent
                        icon={winner.id === 'Happy' ? cilHappy : winner.id === 'Frown' ? cilFrown :
                            winner.id === 'Meh' ? cilMeh : winner.id === 'MoodGood' ? cilMoodGood : cilMoodVeryBad}
                        id={winner.id} emojiData={[]} setEmojiData={() => {
                    }}/>
                    <TitleTextComponent resultTitle={`Кількість голосів: ${winner.count}`}/>
                </>
            )}
            <ButtonComponent title={'Очистити результати'} onClick={clearResults}/>
        </div>
    );
}

export default App;
