export type EvaluationCriterion = {
  id: string;
  label: string;
  weight: number;
  score: number;
};

export const initialEvaluationCriteria: EvaluationCriterion[] = [
  {
    id: "scope",
    label: "Alcance claro",
    weight: 20,
    score: 4,
  },
  {
    id: "context",
    label: "Contexto suficiente",
    weight: 15,
    score: 3,
  },
  {
    id: "complexity",
    label: "Complejidad baja",
    weight: 20,
    score: 4,
  },
  {
    id: "core",
    label: "No toca core",
    weight: 15,
    score: 5,
  },
  {
    id: "activity",
    label: "Actividad reciente",
    weight: 15,
    score: 3,
  },
  {
    id: "firstContribution",
    label: "Buen primer aporte",
    weight: 15,
    score: 4,
  },
];