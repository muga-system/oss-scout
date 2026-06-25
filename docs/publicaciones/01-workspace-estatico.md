# Publicación 01 — Workspace estático antes de islas

## Estado del proyecto

Proyecto: oss-scout  
Stack actual: Astro, Tailwind CSS, React preparado para islas, Lucide icons.  
Fase: UI estática componentizada antes de hidratar interacción.

## Trabajo realizado

- Creación de specs mínimas.
- Inicialización del proyecto Astro con pnpm.
- Instalación de Tailwind CSS.
- Definición de una UI técnica tipo workspace.
- Eliminación de estética muga.dev para evitar repetición visual.
- Creación de layout full-screen con fondo de puntos.
- Construcción de tabla estática de issues.
- Construcción de panel estático de evaluación.
- Refactor progresivo en componentes:
  - AppRail
  - WorkspaceLayout
  - WorkspacePanel
  - PanelHeader
  - IssueTable
  - EvaluationPanel

## Idea central

Antes de crear una isla interactiva, la estructura estática tiene que estar clara.

Astro renderiza la base.
React entra solo donde hace falta interacción.
La UI no se convierte completa en React.

## Pendiente

- Crear primera isla React.
- Hidratar solo el panel de evaluación.
- Agregar estado para modificar puntajes.
- Calcular resultado dinámico.