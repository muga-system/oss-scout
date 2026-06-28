export type IssueStatus = "apto" | "revisar" | "alto riesgo";

export type Issue = {
  id: string;
  title: string;
  repo: string;
  status: IssueStatus;
};

export const issues: Issue[] = [
  {
    id: "#512",
    title: "Clarificar ejemplo de islands con client:visible",
    repo: "withastro/docs",
    status: "apto",
  },
  {
    id: "#511",
    title: "Mejorar mensaje de error en configuración",
    repo: "withastro/astro",
    status: "revisar",
  },
  {
    id: "#510",
    title: "Actualizar referencia de integración Tailwind",
    repo: "withastro/docs",
    status: "apto",
  },
  {
    id: "#509",
    title: "Investigar comportamiento de hidratación parcial",
    repo: "withastro/astro",
    status: "alto riesgo",
  },
  {
    id: "#508",
    title: "Agregar captura faltante en guía de despliegue",
    repo: "withastro/docs",
    status: "apto",
  },
];

export const statusClassByStatus: Record<IssueStatus, string> = {
  apto: "text-emerald-300",
  revisar: "text-amber-300",
  "alto riesgo": "text-rose-300",
};