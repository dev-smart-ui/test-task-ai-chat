import {TopBar} from "@/components/top-bar.tsx";

export const WebsiteBox = () => {
    return(
        <div className={'bg-white p-2 flex flex-col gap-2'}>
            <TopBar />
            <div className={'rounded-md bg-neutral-100 grow'}></div>
        </div>
    )
}