//TODO maybe mit java style enums

export abstract class ChatMessageExtendedContent {
}

export type ParameterRecommendation = {
    parameter: string;
    recommendation?: string;
};

export class ChatMessageParameterRecommendation extends ChatMessageExtendedContent {
    constructor(private recommendation: ParameterRecommendation) {
        super();
    }

    getRecommendation(): ParameterRecommendation {
        return this.recommendation;
    }
}

export class ChatMessageParameterRecommendations extends ChatMessageExtendedContent {
    constructor(private recommendations: ParameterRecommendation[]) {
        super();
    }

    getRecommendations(): ParameterRecommendation[] {
        return this.recommendations;
    }
}

export class ChatMessagePredefinedResponses extends ChatMessageExtendedContent {
    constructor(private responses: string[]) {
        super();
    }

    getResponses(): string[] {
        return this.responses;
    }
}

export class ChatMassageAssistentRecommendation extends ChatMessageExtendedContent {
    constructor(private recommendation: string) {
        super();
    }

    getRecommendation(): string {
        return this.recommendation;
    }
}