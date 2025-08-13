import {ChatInputGroup} from "@/components/chat/chat-input-group.tsx";
import {chatData} from "@/chat-data.ts"
import type {IMessage} from "@/types/global.ts";
import {useEffect, useRef, useState} from "react";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";

export const ChatBox = () => {
    const [messages, setMessages] = useState<IMessage[]>(chatData)

    const messagesEndRef = useRef<HTMLDivElement | null>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: 'smooth'})
    }

    const handleSendMessage = (text: string) => {
        if (!text.trim()) return
        setMessages(prev => [...prev, {type: 'user', text}])

        setTimeout(() => {
            setMessages(prev => [...prev, {type: 'assistant', text}])
        }, 2000)
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    return (
        <div className={'grow overflow-hidden grid grid-rows-[1fr_auto] gap-4 w-full'}>
            <ScrollArea className={' w-full min-h-0 flex flex-col justify-end '}>
                <div className={'flex flex-col text-sm gap-3.5'}>
                    {messages.map((message, index) => (
                        <div key={index} className={'-tracking-[0.01em] leading-[1.5] group'}>
                            {message.type === 'user' ? (
                                <div className={'bg-white rounded-lg2 py-3 px-4 justify-self-end'}
                                     dangerouslySetInnerHTML={{__html: message.text}}/>
                            ) : (
                                <div
                                    className={'flex items-start gap-2 justify-self-start pb-4.5 pr-2 group-last:pb-0'}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg" className={'size-6 shrink-0'}>
                                        <path
                                            d="M12.8579 16.1087L12.3028 17.3826C12.0895 17.8725 11.412 17.8725 11.1986 17.3826L10.6416 16.1087C10.1478 14.9749 9.25691 14.0723 8.14482 13.5785L6.61593 12.8991C6.12802 12.6838 6.12802 11.9747 6.61593 11.7594L8.09741 11.0997C9.23716 10.5941 10.1438 9.65789 10.6298 8.48663L11.1927 7.12774C11.4021 6.62409 12.0974 6.62409 12.3068 7.12774L12.8698 8.48663C13.3577 9.65789 14.2623 10.5941 15.4021 11.0997L16.8856 11.7594C17.3715 11.9747 17.3715 12.6838 16.8856 12.8991L15.3547 13.5785C14.2446 14.0723 13.3537 14.9749 12.8579 16.1087Z"
                                            fill="#795DFC"/>
                                        <path
                                            d="M18.5347 7.11956L18.3496 7.54421C18.2785 7.70749 18.0527 7.70749 17.9816 7.54421L17.7959 7.11956C17.6313 6.74165 17.3343 6.44077 16.9636 6.27617L16.454 6.04969C16.2914 5.97793 16.2914 5.74157 16.454 5.66981L16.9478 5.44991C17.3278 5.28137 17.63 4.9693 17.7919 4.57888L17.9796 4.12591C18.0494 3.95803 18.2812 3.95803 18.351 4.12591L18.5386 4.57888C18.7012 4.9693 19.0028 5.28137 19.3827 5.44991L19.8772 5.66981C20.0392 5.74157 20.0392 5.97793 19.8772 6.04969L19.3669 6.27617C18.9969 6.44077 18.6999 6.74165 18.5347 7.11956Z"
                                            fill="#795DFC"/>
                                    </svg>
                                    <div className={'space-y-2.5'} dangerouslySetInnerHTML={{__html: message.text}}/>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div ref={messagesEndRef}/>
            </ScrollArea>

            <ChatInputGroup onSend={handleSendMessage}/>
        </div>
    )
}