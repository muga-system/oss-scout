type Criterion = {
  id: string;
  label: string;
  weight: number;
  score: number;
};

const initialCriteria: Criterion[] = [
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

function getResult(totalScore: number) {
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

export default function IssueEvaluatorIsland() {
  const totalScore = Math.round(
    initialCriteria.reduce((total, criterion) => {
      return total + (criterion.score / 5) * criterion.weight;
    }, 0),
  );

  const result = getResult(totalScore);

  return (
    <div className="h-full border border-slate-800 bg-[#02070d]/30 backdrop-blur-xs">
      <div className="border-b border-slate-800 px-4 py-3">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate-500">
          Checklist
        </p>
      </div>

      <div className="divide-y divide-slate-800">
        <div className="grid grid-cols-[1fr_72px_80px] px-4 py-3 font-mono text-xs uppercase tracking-[0.12em] text-slate-500">
          <span>Criterio</span>
          <span>Peso</span>
          <span>Puntaje</span>
        </div>

        {initialCriteria.map((criterion) => (
          <div
            key={criterion.id}
            className="grid grid-cols-[1fr_72px_80px] items-center px-4 py-3 text-sm"
          >
            <span className="text-slate-300">{criterion.label}</span>

            <span className="font-mono text-xs text-slate-500">
              {criterion.weight}%
            </span>

            <span className="font-mono text-xs text-cyan-300">
              {criterion.score} / 5
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-800 p-4">
        <div className="grid grid-cols-2 border border-slate-800">
          <div className="border-r border-slate-800 p-4">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate-500">
              Puntaje
            </p>

            <p className="mt-3 font-mono text-3xl text-cyan-300">
              {totalScore}
              <span className="text-base text-slate-600"> / 100</span>
            </p>
          </div>

          <div className="p-4">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate-500">
              Resultado
            </p>

            <p className={`mt-3 font-mono text-3xl ${result.className}`}>
              {result.label}
            </p>
          </div>
        </div>

        <div className="border-x border-b border-slate-800 p-2">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-slate-500">
            Nota
          </p>

          <p className="mt-3 text-xs leading-6 text-slate-400">
            {result.note}
          </p>
        </div>
      </div>
    </div>
  );
}