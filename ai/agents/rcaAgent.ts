export interface RcaVerdict {
    severity: 'critical' | 'high' | 'medium' | 'low';
    priority: string;
    rootCause: string;
    fixes: string[];
}

export interface RcaInput {
    title: string;
    file: string;
    error: string;
    stack?: string;
}

export async function analyzeFailure(input: RcaInput): Promise<RcaVerdict> {
    return {
        severity: 'medium',
        priority: 'P2',
        rootCause: input.error,
        fixes: [],
    };
}
