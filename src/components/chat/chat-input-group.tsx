import {Button} from "@/components/ui/button.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {ChatAttachment} from "@/components/chat/chat-attachment.tsx";
import {useState} from "react";

export const ChatInputGroup = ({ onSend }: { onSend: (text: string) => void }) => {

    const [value, setValue] = useState('')

    const handleSubmit = () => {
        if (!value.trim()) return
        onSend(value)
        setValue('')
    }

    return (
        <div className={'bg-white rounded-2xl p-2 w-full space-y-4'}>
            <div>
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                    name={'chat-input'}
                    type={'text'}
                    className={'w-full bg-transparent outline-none -tracking-[0.01em] placeholder:text-[#97A1AF] p-2 text-[16px]/[1]'}
                    placeholder={'Let’s keep going – what’s next?'}/>
            </div>

            <div className={'flex items-center gap- justify-between'}>
                <div className={'flex items-center gap-1.5'}>

                    <ChatAttachment />

                    <Separator orientation="vertical" className="data-[orientation=vertical]:h-6"/>

                    <Button size={'sm'} type={'button'} variant={'ghost'}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                             className={'size-5'}>
                            <path
                                d="M2.5 7.08333V4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5H7.08333M2.5 12.9167V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H7.08333M12.9167 2.5H15.8333C16.7538 2.5 17.5 3.24619 17.5 4.16667V7.08333M17.3991 14.0976C17.8108 14.3509 17.785 14.9668 17.3616 15.0151L15.2225 15.2576L14.2633 17.1843C14.0733 17.5668 13.4858 17.3793 13.3883 16.906L11.3425 10.8093C11.26 10.4093 11.62 10.1576 11.9675 10.3718L17.3991 14.0976Z"
                                stroke="#141C25" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        Visual edit
                    </Button>
                </div>
                <div className={'flex items-center gap-5'}>
                    <Button type={'button'} size={'icon'} variant={'ghost'} className={'size-6 p-0'}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                             className={'size-6'}>
                            <path
                                d="M5 10V11C5 14.866 8.13401 18 12 18M19 10V11C19 14.866 15.866 18 12 18M12 18V22M12 22H9M12 22H15M12 14C10.3431 14 9 12.6569 9 11V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V11C15 12.6569 13.6569 14 12 14Z"
                                stroke="#141C25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Button>

                    <Button type={'button'} size={'icon'} className={'size-10 rounded-lg'} onClick={handleSubmit}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                             className={'size-6'}>
                            <path d="M12.25 18.5V6M12.25 6L18.25 12M12.25 6L6.25 12" stroke="white" strokeWidth="1.5"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    )
}