import { useState } from "react";
import { issues } from "../data/issues";
import IssueEvaluatorIsland from "./IssueEvaluatorIsland";
import IssueList from "./IssueList";

export default function IssueWorkspaceIsland() {
  const [selectedIssueId, setSelectedIssueId] = useState(issues[0].id);

  const selectedIssue = issues.find((issue) => issue.id === selectedIssueId);

  return (
    <>
      <section className="min-h-0 border-r border-slate-800">
        <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-[#02070d8d] px-6 backdrop-blur-xs">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
            Issues
          </p>

          <button
            type="button"
            className="border border-cyan-500/50 px-3 py-1.5 font-mono text-xs text-cyan-300 hover:bg-cyan-500/10"
          >
            Filtros
          </button>
        </header>

        <div className="h-[calc(100%-4rem)] overflow-hidden p-6">
          <IssueList
            issues={issues}
            selectedIssueId={selectedIssueId}
            onSelectIssue={setSelectedIssueId}
          />
        </div>
      </section>

      <section className="min-h-0">
        <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-[#02070d8d] px-6 backdrop-blur-xs">
          <div className="flex items-center gap-3">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
              Evaluación
            </p>

            <span className="border border-slate-800 px-2 py-1 font-mono text-xs text-slate-500">
              {selectedIssue?.id ?? "sin selección"}
            </span>
          </div>
        </header>

        <div className="h-[calc(100%-4rem)] overflow-hidden p-6">
          <IssueEvaluatorIsland />
        </div>
      </section>
    </>
  );
}