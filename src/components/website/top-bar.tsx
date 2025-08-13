import {Separator} from "@/components/ui/separator.tsx";
import {Button} from "@/components/ui/button.tsx";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select.tsx";
import {DeviceSelector} from "@/components/website/device-selector.tsx";

export const TopBar = () => {
    return (
        <header
            className="h-8 items-center gap-2 grid grid-cols-3">
            <div className="flex items-center gap-1.5">
                <Button size={'icon'} type={'button'} variant={'ghost'}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={'size-5'}>
                        <path
                            d="M6.04167 8.33333L4.58333 10L6.04167 11.6667M7.91667 17.5V2.5M4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5Z"
                            stroke="#141C25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Button>
                <Separator
                    orientation="vertical"
                    className="data-[orientation=vertical]:h-6"
                />
                <div className={'flex items-center'}>
                    <Button size={'icon'} type={'button'} variant={'ghost'}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={'size-5'}>
                            <path
                                d="M4.16665 10.8333L8.91533 14.9036C9.53948 15.4386 10.4605 15.4386 11.0846 14.9036L15.8333 10.8333M4.16665 14.1667L8.91533 18.237C9.53948 18.7719 10.4605 18.7719 11.0846 18.237L15.8333 14.1667M4.76679 7.92096L8.90247 11.5397C9.53085 12.0895 10.4691 12.0895 11.0975 11.5397L15.2332 7.92096C15.992 7.25694 15.992 6.07639 15.2332 5.41237L11.0975 1.79365C10.4691 1.24382 9.53085 1.24382 8.90247 1.79365L4.76679 5.41237C4.00791 6.07639 4.00791 7.25694 4.76679 7.92096Z"
                                stroke="#141C25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Button>
                    <Button size={'icon'} type={'button'} variant={'ghost'}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={'size-5'}>
                            <path
                                d="M2.74666 17.168L8.04996 11.8647M8.04996 11.8647C8.53812 12.3529 9.32958 12.3529 9.81773 11.8647C10.3059 11.3766 10.3059 10.5851 9.81773 10.0969C9.32958 9.60878 8.53812 9.60878 8.04996 10.0969C7.56181 10.5851 7.56181 11.3766 8.04996 11.8647ZM14.8264 9.21306L17.1834 6.85603C17.8343 6.20516 17.8343 5.14988 17.1834 4.49901L15.4157 2.73124C14.7648 2.08037 13.7095 2.08037 13.0586 2.73125L10.7016 5.08827M13.141 14.2694L14.7287 9.50622C14.7886 9.32655 14.7418 9.12846 14.6079 8.99455L10.9373 5.32397C10.7946 5.18124 10.58 5.13833 10.3934 5.21518L5.90454 7.06353C5.77018 7.11886 5.66653 7.2299 5.62058 7.36776L2.46109 16.8462C2.33317 17.23 2.69018 17.5989 3.07792 17.4836L12.8091 14.5905C12.9655 14.544 13.0894 14.4242 13.141 14.2694Z"
                                stroke="#141C25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Button>
                </div>
                <Select defaultValue={'variant-3'}>
                    <SelectTrigger className={'w-[174px] text-[13px]'} size={'sm'}>
                        <SelectValue placeholder="Select variant" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="variant-1">Variant 1</SelectItem>
                        <SelectItem value="variant-2">Variant 2</SelectItem>
                        <SelectItem value="variant-3">Variant 3</SelectItem>
                        <SelectItem value="variant-4">Variant 4</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <DeviceSelector />

            <div className={'flex items-center gap-2 justify-self-end'}>
                <div className={'h-8 rounded-lg border flex items-center justify-center gap-0.5'}>
                    <button type={'button'} className={'px-1.5'}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.99996 5.33333H9.99996C9.99996 5.33333 13.3333 5.33333 13.3333 8.47059C13.3333 12 9.99996 12 9.99996 12H4.19044M4.99996 7.66667L2.66663 5.33333L4.99996 3" stroke="#637083" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <Separator
                        orientation="vertical"
                        className="data-[orientation=vertical]:h-5"
                    />
                    <button type={'button'} className={'px-1.5'}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 5.33333H6.00004C6.00004 5.33333 2.66671 5.33333 2.66671 8.47059C2.66671 12 6.00004 12 6.00004 12H11.8096M11 7.66667L13.3334 5.33333L11 3" stroke="#637083" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                <Button size={'sm'} variant={'outline'} className={'-tracking-[0.01em] text-[13px]/[1]'}>Discard</Button>
                <Button size={'sm'} className={'-tracking-[0.01em] text-[13px]/[1]'}>Save</Button>
            </div>
        </header>
    )
}