import type {IMessage} from "@/types/global.ts";

export const chatData: IMessage[] = [
    {
        type: 'user',
        text: '<p>Create home page for my site!</p>'
    },
    {
        type: 'assistant',
        text: '<p>I\'ll create a modern, engaging homepage for that focuses on conversion optimization and funnel analytics. Let me build something that captures attention with dynamic visuals and clear value propositions.</p>' +
            '<p>Let me build something that captures attention with <br> dynamic visuals and clear value propositions.</p>'
    },
    {
        type: 'user',
        text: 'Additional promt for AI here'
    },
    {
        type: 'assistant',
        text: 'Engaging homepage for that focuses on conversion optimization and funnel analytics. Let me build something that captures attention with dynamic visuals.'
    }
]