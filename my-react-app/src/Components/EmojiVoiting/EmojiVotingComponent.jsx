import './Emoji.css';
import {TitleTextComponent} from "../UI/TitleTextComponent";
import {useState} from "react";
import {cilFrown, cilHappy, cilMeh, cilMoodGood, cilMoodVeryBad} from "@coreui/icons";
import {EmojiComponent} from "../UI/EmojiComponent";
import {ButtonComponent} from "../UI/ButtonComponent";

export function EmojiVotingComponent() {

    const [emojiData, setEmojiData] = useState([
        {id: 'Happy', icon: cilHappy, count: parseInt(localStorage.getItem('Happy')) || 0},
        {id: 'Frown', icon: cilFrown, count: parseInt(localStorage.getItem('Frown')) || 0},
        {id: 'Meh', icon: cilMeh, count: parseInt(localStorage.getItem('Meh')) || 0},
        {id: 'MoodGood', icon: cilMoodGood, count: parseInt(localStorage.getItem('MoodGood')) || 0},
        {id: 'MoodVeryBad', icon: cilMoodVeryBad, count: parseInt(localStorage.getItem('MoodVeryBad')) || 0},
    ]);

    const [winners, setWinners] = useState([]);

    function showResults() {
        const maxVotes = Math.max(...emojiData.map(emoji => emoji.count));
        const winningEmojis = emojiData.filter(emoji => emoji.count === maxVotes && maxVotes > 0);
        setWinners(winningEmojis);
    }

    function clearResults() {
        const resetEmojiData = emojiData.map(emoji => ({...emoji, count: 0}));
        setEmojiData(resetEmojiData);
        localStorage.clear();
        setWinners([]);
    }

    return (
        <>
            <TitleTextComponent smallTitle={'Голосування за найкращий смайлик'}/>
            {emojiData.map(emoji => (
                <EmojiComponent
                    key={emoji.id}
                    icon={emoji.icon}
                    id={emoji.id}
                    setEmojiData={setEmojiData}
                    emojiData={emojiData}
                />
            ))}
            <ButtonComponent title={'Show Results'} onClick={showResults}/>

            {winners.length > 0 && (
                <>
                    <TitleTextComponent resultTitle={'Результати голосування:'}/>
                    <TitleTextComponent resultTitle={'Переможці:'}/>

                    <div className="winner-container">
                        {winners.map(winner => (
                            <EmojiComponent
                                key={winner.id}
                                icon={winner.icon}
                                id={winner.id}
                                emojiData={[]}
                                setEmojiData={() => {
                                }}
                            />
                        ))}
                    </div>
                    <TitleTextComponent resultTitle={`Кількість голосів: ${winners[0].count}`}/>
                </>
            )}
            <ButtonComponent title={'Очистити результати'} onClick={clearResults}/>
        </>
    );
}
