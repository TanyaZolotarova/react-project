import {CIcon} from "@coreui/icons-react";
import {useCallback} from "react";

export function EmojiComponent({icon, id, emojiData, setEmojiData}) {

    const handleChange = useCallback(() => {
        const updatedEmojiData = emojiData.map((emoji) => {
            if (emoji.id === id) {
                const newCount = emoji.count + 1;

                localStorage.setItem(id, newCount);
                return {...emoji, count: newCount};
            }
            return emoji;
        });
        setEmojiData(updatedEmojiData);
    }, [emojiData, id, setEmojiData])

    const currentEmoji = emojiData.find((emoji) => emoji.id === id);

    return (
        <>
            <a className='text-light' onClick={handleChange}>
                <CIcon className='w_icons p-2' icon={icon}/></a>
            <span className='text-light'>{currentEmoji?.count}</span>
        </>
    )
}