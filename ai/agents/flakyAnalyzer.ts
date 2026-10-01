export interface BuildSummary {
    runId: string;
    tests: Record<string, string>;
}

export interface FlakyResult {
    counts: { flaky: number; failing: number; total: number };
    flaky: string[];
    summary?: string;
}

export async function analyzeFlaky(
    prev: BuildSummary,
    curr: BuildSummary,
    _useLLM: boolean,
): Promise<FlakyResult> {
    const flaky: string[] = [];
    for (const [name, status] of Object.entries(curr.tests)) {
        const before = prev.tests[name];
        if (before && before !== status) {
            flaky.push(name);
        }
    }

    const failing = Object.values(curr.tests).filter(
        (status) => status === 'failed' || status === 'timedOut',
    ).length;

    return {
        counts: { flaky: flaky.length, failing, total: Object.keys(curr.tests).length },
        flaky,
    };
}
