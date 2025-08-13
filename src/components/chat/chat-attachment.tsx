import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";

export const ChatAttachment = () => {
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size={'icon'} type={'button'} className={'bg-accent'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22"
                         className={'size-5.5'}>
                        <path stroke="#141C25" strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M5.5 11H11m5.5 0H11m0 0V5.5m0 5.5v5.5"/>
                    </svg>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={2} align={'end'} side={'right'}>
                <DropdownMenuItem>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"
                         className={'size-5'}>
                        <path stroke="#637083" strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M1.66 15.833h2.5m0 0h2.5m-2.5 0v-2.5m0 2.5v2.5M5.833 1.667h7.917l3.75 3.75v10.416m-8.333 2.5h4.583c.69 0 1.25-.56 1.25-1.25V7.29a.5.5 0 0 0-.146-.353L12.23 4.313a.5.5 0 0 0-.354-.146H3.75c-.69 0-1.25.56-1.25 1.25v5.416m9.167-6.666V7a.5.5 0 0 0 .5.5H15"/>
                    </svg>
                    Add photos & files
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"
                         className={'size-5'}>
                        <path stroke="#637083" strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="m2.083 10.417 4.584 1.666L5.833 15l.834 2.5m11.25-6.667-3.75-.416-2.5.833v2.917L13.75 15l.417 2.083m3.75-8.333-1.667-.833h-1.667L12.5 8.75v-2.5l2.917-.417.416-1.25M7.083 2.5l.834 1.667-1.667 2.5-2.083.416L2.083 8.75M18.333 10a8.333 8.333 0 1 1-16.666 0 8.333 8.333 0 0 1 16.666 0Z"/>
                    </svg>
                    Link
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"
                         className={'size-5'}>
                        <path stroke="#637083" strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M11.178 8.82c-1.468-1.469-4.31-1.58-5.975.085l-1.01 1.01c-1.674 1.674-1.712 4.35-.086 5.976 1.402 1.401 3.582 1.566 5.23.514.264-.168.514-.369.746-.6"/>
                        <path stroke="#637083" strokeLinecap="round" strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M8.821 11.177c1.469 1.468 4.31 1.58 5.976-.086l1.01-1.01c1.674-1.674 1.712-4.35.086-5.976-1.402-1.401-3.582-1.566-5.23-.514a4.422 4.422 0 0 0-.746.6"/>
                    </svg>
                    Select campaign
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}