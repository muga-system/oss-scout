import type { Issue } from "../data/issues";
import IssueEvaluatorIsland from "./IssueEvaluatorIsland";
import WorkspaceSectionHeader from "./WorkspaceSectionHeader";

type SelectedIssuePanelProps = {
    issue?: Issue;
};

export default function SelectedIssuePanel({ issue }: SelectedIssuePanelProps) {
    return (
        <section className="min-h-0">
            <WorkspaceSectionHeader title="Evaluación">
                <span className="border border-slate-800 px-2 py-1 font-mono text-xs text-slate-500">
                    {issue?.id ?? "sin selección"}
                </span>
            </WorkspaceSectionHeader>

            <div className="h-[calc(100%-4rem)] overflow-hidden p-6">
                <IssueEvaluatorIsland />
            </div>
        </section>
    );
}