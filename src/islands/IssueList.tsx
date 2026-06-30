import type { Issue } from "../data/issues";
import { statusClassByStatus } from "../data/issues";

type IssueListProps = {
  issues: Issue[];
  selectedIssueId: string;
  onSelectIssue: (issueId: string) => void;
};

export default function IssueList({
  issues,
  selectedIssueId,
  onSelectIssue,
}: IssueListProps) {
  return (
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
              onClick={() => onSelectIssue(issue.id)}
              className={[
                "grid w-full grid-cols-[96px_1fr_180px_120px] px-4 py-3 text-left text-sm text-slate-300 hover:bg-cyan-500/5",
                isSelected ? "bg-cyan-500/5" : "",
              ].join(" ")}
            >
              <span className="font-mono text-cyan-300">{issue.id}</span>

              <span className="truncate">{issue.title}</span>

              <span className="truncate font-mono text-xs text-slate-500">
                {issue.repo}
              </span>

              <span
                className={`font-mono text-xs ${
                  statusClassByStatus[issue.status]
                }`}
              >
                {issue.status}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}