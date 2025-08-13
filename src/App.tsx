import {ChatBar} from "@/components/chat-bar.tsx";
import {WebsiteBox} from "@/components/website-box.tsx";

function App() {
    return (
        <main
            className={'overflow-hidden rounded-md grid grid-cols-[460px_1fr] mx-auto w-full max-w-[1440px] h-[900px] bg-[linear-gradient(180deg,rgba(215,208,255,0.2)_0%,rgba(203,221,255,0.501961)_100%)]'}>
            <ChatBar />
            <WebsiteBox />
        </main>
    )
}

export default App
