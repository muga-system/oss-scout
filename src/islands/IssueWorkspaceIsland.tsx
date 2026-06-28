import { useState } from "react";
import { issues, statusClassByStatus } from "../data/issues";
import IssueEvaluatorIsland from "./IssueEvaluatorIsland";

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
          <div className="h-full border border-slate-800 bg-[#02070d]/30 backdrop-blur-xs">
            <div className="grid grid-cols-[96px_1fr_180px_120px] border-b border-slate-800 px-4 py-3 font-mono text-xs uppercase tracking-[0.12em] text-slate-500">
              <span>ID</span>
              <span>Título</span>
              <span>Repo</span>
              <span>Estado</span>
            </div>

            <div className="divide-y divide-slate-800">
              {issues.map((issue) => {
                const isSelected = issue.id === selectedIssueId;

                return (
                  <button
                    key={issue.id}
                    type="button"
                    onClick={() => setSelectedIssueId(issue.id)}
                    className={[
                      "grid w-full grid-cols-[96px_1fr_180px_120px] px-4 py-3 text-left text-sm text-slate-300 hover:bg-cyan-500/5",
                      isSelected ? "bg-cyan-500/5" : "",
                    ].join(" ")}
                  >
                    <span className="font-mono text-cyan-300">
                      {issue.id}
                    </span>

                    <span className="truncate">{issue.title}</span>

                    <span className="truncate font-mono text-xs text-slate-500">
                      {issue.repo}
                    </span>

                    <span
                      className={`font-mono text-xs ${statusClassByStatus[issue.status]
                        }`}
                    >
                      {issue.status}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
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