import { ChatMessageMetadata } from './ChatMessageMetadata';
import { ChatMessageExtendedContent } from './ChatMessageExtendedContent';

export enum MessageSender {
    USER = 'USER',
    BOT = 'BOT',
    SYSTEM = 'SYSTEM'
}

export enum BotMessageType {
    TEXT = 'TEXT',
    PARTIAL_AUTO = 'PARTIAL_AUTO',
    FULL_AUTO = 'FULL_AUTO',
    MANUAL = 'MANUAL',
}




export class ChatMessage {

    private _specialColor?: string;
    private _extendedContent?: ChatMessageExtendedContent;
    constructor(
        private _message: string,
        private _sender: MessageSender,
        private metadata?: ChatMessageMetadata
    ) { }

    static createDefaultUserMessage(message: string, metadata?: ChatMessageMetadata): ChatMessage {
        return new ChatMessage(message, MessageSender.USER, metadata);
    }

    static createDefaultBotMessage(message: string, {extendedContent, metadata}: {extendedContent?: ChatMessageExtendedContent, metadata?: ChatMessageMetadata} = {}): ChatMessage {
        const chatMessage = new ChatMessage(message, MessageSender.BOT, metadata);
        if (extendedContent) {
            chatMessage['_extendedContent'] = extendedContent;
        }
        return chatMessage;
    }

    static createDefaultSystemMessage(message: string, metadata?: ChatMessageMetadata): ChatMessage {
        return new ChatMessage(message, MessageSender.SYSTEM, metadata);
    }


    get message(): string {
        return this._message;
    }
    get sender(): MessageSender {
        return this._sender;
    }

    hasTimestamp(): boolean {
        return this.metadata?.timestamp !== undefined;
    }

    get timestamp(): Date | undefined {
        return this.metadata?.timestamp;
    }

    setSpecialColor(color: string): void {
        this._specialColor = color;
    }

    hasSpecialColor(): boolean {
        return this._specialColor !== undefined;
    }

    get specialColor(): string | undefined {
        return this._specialColor;
    }

    hasChatMessageExtendedContent(): boolean {
        return this._extendedContent !== undefined;
    }

    get extendedContent(): ChatMessageExtendedContent | undefined {
        return this._extendedContent;
    }
}