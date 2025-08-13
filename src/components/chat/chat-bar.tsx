import {ChatBox} from "@/components/chat/chat-box.tsx";
import {ChatPageSelector} from "@/components/chat/chat-page-selector.tsx";

export const ChatBar = () => {
    return (
        <div className={'flex flex-col gap-2 items-start p-2 w-full overflow-hidden'}>
            <ChatPageSelector />
            <ChatBox />
        </div>
    )
}