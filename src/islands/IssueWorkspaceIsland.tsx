import { useState } from "react";
import { initialEvaluationCriteria } from "../data/evaluationCriteria";
import type { EvaluationCriterion } from "../data/evaluationCriteria";
import { issues } from "../data/issues";
import IssueList from "./IssueList";
import SelectedIssuePanel from "./SelectedIssuePanel";
import WorkspaceSectionHeader from "./WorkspaceSectionHeader";

type EvaluationsByIssueId = Record<string, EvaluationCriterion[]>;

function createInitialEvaluationsByIssueId(): EvaluationsByIssueId {
  return issues.reduce<EvaluationsByIssueId>((evaluations, issue) => {
    evaluations[issue.id] = initialEvaluationCriteria;
    return evaluations;
  }, {});
}

export default function IssueWorkspaceIsland() {
  const [selectedIssueId, setSelectedIssueId] = useState(issues[0].id);

  const [evaluationsByIssueId, setEvaluationsByIssueId] = useState(
    createInitialEvaluationsByIssueId,
  );

  const selectedIssue = issues.find((issue) => issue.id === selectedIssueId);

  const selectedCriteria =
    evaluationsByIssueId[selectedIssueId] ?? initialEvaluationCriteria;

  function updateSelectedIssueCriteria(nextCriteria: EvaluationCriterion[]) {
    setEvaluationsByIssueId((currentEvaluations) => {
      return {
        ...currentEvaluations,
        [selectedIssueId]: nextCriteria,
      };
    });
  }

  return (
    <>
      <section className="min-h-0 border-r border-slate-800">
        <WorkspaceSectionHeader title="Issues">
          <button
            type="button"
            className="border border-cyan-500/50 px-3 py-1.5 font-mono text-xs text-cyan-300 hover:bg-cyan-500/10"
          >
            Filtros
          </button>
        </WorkspaceSectionHeader>

        <div className="h-[calc(100%-4rem)] overflow-hidden p-6">
          <IssueList
            issues={issues}
            selectedIssueId={selectedIssueId}
            onSelectIssue={setSelectedIssueId}
          />
        </div>
      </section>

      <SelectedIssuePanel
        issue={selectedIssue}
        criteria={selectedCriteria}
        onCriteriaChange={updateSelectedIssueCriteria}
      />
    </>
  );
}
