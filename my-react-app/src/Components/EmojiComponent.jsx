import {CIcon} from "@coreui/icons-react";

export function EmojiComponent({icon, id, emojiData, setEmojiData}) {
    function handleChange() {
        const updatedEmojiData = emojiData.map((emoji) => {
            if (emoji.id === id) {
                const newCount = emoji.count + 1;

                localStorage.setItem(id, newCount);
                return {...emoji, count: newCount};
            }
            return emoji;
        });
        setEmojiData(updatedEmojiData);
    }

    const currentEmoji = emojiData.find((emoji) => emoji.id === id);

    return (
        <>
            <a className='text-light' onClick={handleChange}>
                <CIcon className='w-9 p-2' icon={icon}/></a>
            <span className='text-light'>{currentEmoji?.count}</span>
        </>
    )
}