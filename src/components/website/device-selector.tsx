import React, { useState} from "react";

interface IDevice {
    name: 'desktop' | 'tablet' | 'mobile'
    icon: React.JSX.Element
}

export const DeviceSelector = () => {
    const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop')

    const devices: IDevice[] = [
        {
            name: 'desktop',
            icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.33331 14L11.3333 14M14 14H14.6666M1.33331 2.4V10.9333C1.33331 11.1542 1.5124 11.3333 1.73331 11.3333H14.2666C14.4876 11.3333 14.6666 11.1542 14.6666 10.9333V2.4C14.6666 2.17909 14.4876 2 14.2666 2H1.73331C1.5124 2 1.33331 2.17909 1.33331 2.4Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>,
        },
        {
            name: 'tablet',
            icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8 14.6667V12M2 12H14M12.6667 1.33333H3.33333C2.59695 1.33333 2 1.93029 2 2.66667L2 13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V2.66667C14 1.93029 13.403 1.33333 12.6667 1.33333Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
        },
        {
            name: 'mobile',
            icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.00002 10.6733L8.00669 10.6659M4.66669 3.06667V12.9333C4.66669 13.1542 4.84577 13.3333 5.06669 13.3333H10.9334C11.1543 13.3333 11.3334 13.1542 11.3334 12.9333V3.06667C11.3334 2.84575 11.1543 2.66667 10.9334 2.66667H5.06669C4.84577 2.66667 4.66669 2.84575 4.66669 3.06667Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        }
    ]

    return (
        <div className={'flex items-center bg-accent rounded-md p-0.5 gap-1 h-8 justify-self-center'}>
            {devices.map((item, index) => (
                <button key={index}
                        className={`${item.name === device ? 'active' : ''} w-8 h-7 rounded-md flex items-center justify-center text-muted-foreground [&.active]:bg-white [&.active]:text-foreground [&.active]:shadow-[0px_1px_3px_0px_rgba(52,64,81,0.17)] transition-all duration-300`}
                        onClick={() => setDevice(item.name)}>
                    {item.icon}
                </button>
            ))}
        </div>
    )
}


