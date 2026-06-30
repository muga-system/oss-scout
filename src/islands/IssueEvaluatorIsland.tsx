import { useState } from "react";
import {
  initialEvaluationCriteria,
  type EvaluationCriterion,
} from "../data/evaluationCriteria";
import { calculateTotalScore, getEvaluationResult } from "../lib/evaluation";

export default function IssueEvaluatorIsland() {
  const [criteria, setCriteria] = useState(initialEvaluationCriteria);

  const totalScore = calculateTotalScore(criteria);
  const result = getEvaluationResult(totalScore);

  function updateCriterionScore(criterionId: string, nextScore: number) {
    setCriteria((currentCriteria) => {
      return currentCriteria.map((criterion) => {
        if (criterion.id !== criterionId) {
          return criterion;
        }

        return {
          ...criterion,
          score: nextScore,
        };
      });
    });
  }

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden border border-slate-800 bg-[#02070d]/30 backdrop-blur-xs">
      <div className="shrink-0 border-b border-slate-800 px-4 py-3">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate-500">
          Checklist
        </p>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto">
        <div className="divide-y divide-slate-800">
          <div className="grid grid-cols-[1fr_56px_168px] px-4 py-3 font-mono text-xs uppercase tracking-[0.12em] text-slate-500">
            <span>Criterio</span>
            <span>Peso</span>
            <span>Puntaje</span>
          </div>

          {criteria.map((criterion) => (
            <div
              key={criterion.id}
              className="grid grid-cols-[1fr_56px_168px] items-center px-4 py-2.5 text-sm"
            >
              <span className="truncate text-slate-300">{criterion.label}</span>

              <span className="font-mono text-xs text-slate-500">
                {criterion.weight}%
              </span>

              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4, 5].map((scoreOption) => {
                  const isActive = criterion.score === scoreOption;

                  return (
                    <button
                      key={scoreOption}
                      type="button"
                      onClick={() =>
                        updateCriterionScore(criterion.id, scoreOption)
                      }
                      className={[
                        "grid h-6 w-6 place-items-center border font-mono text-[11px]",
                        isActive
                          ? "border-cyan-400 bg-cyan-400/10 text-cyan-300"
                          : "border-slate-800 text-slate-500 hover:border-cyan-500/50 hover:text-cyan-300",
                      ].join(" ")}
                      aria-label={`Asignar ${scoreOption} puntos a ${criterion.label}`}
                    >
                      {scoreOption}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="shrink-0 border-t border-slate-800 p-4">
        <div className="grid grid-cols-2 border border-slate-800">
          <div className="border-r border-slate-800 p-3">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate-500">
              Puntaje
            </p>

            <p className="mt-2 font-mono text-2xl text-cyan-300">
              {totalScore}
              <span className="text-sm text-slate-600"> / 100</span>
            </p>
          </div>

          <div className="p-3">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate-500">
              Resultado
            </p>

            <p className={`mt-2 font-mono text-2xl ${result.className}`}>
              {result.label}
            </p>
          </div>
        </div>

        <div className="min-h-26 border-x border-b border-slate-800 p-3">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate-500">
            Nota
          </p>

          <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-400">
            {result.note}
          </p>
        </div>
      </div>
    </div>
  );
}