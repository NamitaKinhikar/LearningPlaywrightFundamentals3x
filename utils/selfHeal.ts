export interface HealCandidate {
    selector: string;
    strategy: string;
    matchCount: number;
    visible: boolean;
    reasoning: string;
}

export interface HealRejection {
    selector: string;
    reason: string;
}

export interface HealReport {
    failedSelector: string;
    intent: string;
    verified: HealCandidate[];
    rejected: HealRejection[];
    unavailableReason?: string;
}
