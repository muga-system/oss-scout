import type { Issue } from "../data/issues";
import { statusClassByStatus } from "../data/issues";
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

      <div className="grid h-[calc(100%-4rem)] grid-rows-[auto_1fr] gap-4 overflow-hidden p-6">
        <div className="border border-slate-800 bg-[#02070d]/30 p-4 backdrop-blur-xs">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate-500">
            Issue seleccionado
          </p>

          {issue ? (
            <div className="mt-3 grid gap-3">
              <div>
                <p className="text-sm text-slate-200">{issue.title}</p>

                <div className="mt-2 flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="text-cyan-300">{issue.id}</span>

                  <span className="text-slate-700">/</span>

                  <span className="text-slate-500">{issue.repo}</span>

                  <span className="text-slate-700">/</span>

                  <span className={statusClassByStatus[issue.status]}>
                    {issue.status}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <p className="mt-3 text-sm text-slate-500">
              Seleccioná un issue para ver su contexto.
            </p>
          )}
        </div>

        <div className="min-h-0 overflow-hidden">
          <IssueEvaluatorIsland />
        </div>
      </div>
    </section>
  );
}