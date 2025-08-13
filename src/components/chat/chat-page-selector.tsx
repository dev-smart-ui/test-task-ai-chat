import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {Button} from "@/components/ui/button.tsx";
import {ChevronDownIcon} from "lucide-react";
import {useState} from "react";

export const ChatPageSelector = () => {
    const [open, setOpen] = useState(false)
    return(
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Button size={'sm'} variant="secondary"
                        className={'text-xs px-2.5 -tracking-[0.01em] font-manrope gap-1.5 border-none shadow-none'}>
                    cognism.page/get-started
                    <ChevronDownIcon className={`size-4 text-[#637083] ${open && 'rotate-180'}`}/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={2} align={'start'}>
                <DropdownMenuItem>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className={'size-5'}>
                        <path stroke="#637083" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                              d="M15.417 10H5m0 0 5-5m-5 5 5 5"/>
                    </svg>
                    Back to Dynamic Pages
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" className={'size-5'}>
                        <path stroke="#637083" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                              d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                        <path stroke="#637083" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                              d="m16.352 8.663-.915-2.209L16.667 5 15 3.333 13.554 4.57l-2.256-.928-.519-1.974H9.151l-.527 2-2.204.93L5 3.333 3.333 5l1.211 1.49-.9 2.215-1.977.462v1.666l2 .547.93 2.203L3.332 15 5 16.667l1.493-1.217 2.171.894.503 1.99h1.666l.504-1.99 2.209-.914c.368.263 1.454 1.237 1.454 1.237L16.667 15l-1.237-1.459.915-2.21 1.988-.517V9.167l-1.981-.504Z"/>
                    </svg>
                    Page Settings
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}