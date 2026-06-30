import type { EvaluationCriterion } from "../data/evaluationCriteria";

export type EvaluationResult = {
    label: "Apto" | "Revisar" | "Descartar";
    className: string;
    note: string;
}

export function calculateTotalScore(criteria: EvaluationCriterion[]) {
    return Math.round(
        criteria.reduce((total, criterion) => {
            return total + (criterion.score / 5) * criterion.weight;
        }, 0),
    );
}

export function getEvaluationResult(totalScore: number): EvaluationResult {
  if (totalScore >= 75) {
    return {
      label: "Apto",
      className: "text-emerald-300",
      note: "Candidato razonable para una primera contribución. Conviene revisar comentarios recientes antes de tomarlo.",
    };
  }

  if (totalScore >= 50) {
    return {
      label: "Revisar",
      className: "text-amber-300",
      note: "Puede servir, pero requiere revisar alcance, actividad y complejidad antes de avanzar.",
    };
  }

  return {
    label: "Descartar",
    className: "text-rose-300",
    note: "No parece una buena primera contribución. Conviene buscar un issue con menor riesgo.",
  };
}