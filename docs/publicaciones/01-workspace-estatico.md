# Publicación 01 — De carcasa estática a primera isla interactiva

## Estado del proyecto

Proyecto: `oss-scout`  
Stack actual: Astro, Tailwind CSS, React, Lucide icons.  
Package manager: `pnpm`  
Fase: workspace técnico componentizado con primera isla interactiva.

## Objetivo del proyecto

`oss-scout` es una herramienta pequeña para aprender el modelo de islas de Astro construyendo una interfaz útil para evaluar oportunidades de contribución open source.

La idea no es hacer una landing ni una demo visual.  
La idea es construir una herramienta de trabajo: una pantalla clara, técnica y mínima para analizar issues antes de decidir si vale la pena entrar.

## Punto de partida

El proyecto comenzó con una decisión simple:

Antes de escribir interacción, había que fijar el alcance.

Por eso el primer paso fue crear specs mínimas:

- qué va a hacer el proyecto;
- qué no va a hacer todavía;
- qué partes van a ser estáticas;
- qué partes podrían convertirse en islas;
- cómo evitar que la IA construya todo sin proceso.

La regla inicial fue clara:

> La IA puede guiar, revisar y ordenar, pero no reemplazar el aprendizaje.

## Decisiones técnicas iniciales

Se definió el stack base:

- Astro como estructura principal.
- Tailwind CSS para diseñar sin CSS manual disperso.
- `pnpm` como package manager.
- Lucide icons para iconografía técnica.
- React solo para las islas que realmente necesiten interacción.

Una decisión importante fue no convertir toda la app en React.

Astro mantiene la estructura.
React entra solo donde hay estado, eventos o interacción real.

## Cambio de dirección visual

La primera carcasa visual se parecía demasiado a otros proyectos propios. Eso no servía.

`oss-scout` necesitaba otra identidad:

- más herramienta;
- menos landing;
- más lectura;
- menos decoración;
- más espacio de trabajo;
- menos marca visual repetida.

Se decidió ir hacia una estética de workspace técnico:

- fondo oscuro;
- tablero de puntos;
- bordes finos;
- divisiones limpias;
- acento cyan;
- uso de pantalla completa;
- sin gradientes llamativos;
- sin animaciones innecesarias;
- sin cards promocionales.

El objetivo visual fue que la interfaz destaque por eficiencia, no por ruido.

## Construcción de la UI estática

Antes de crear una isla, se armó una UI funcional estática.

La pantalla principal quedó dividida en:

- rail lateral;
- panel de issues;
- panel de evaluación;
- headers de panel;
- tabla de issues;
- checklist de criterios;
- puntaje;
- resultado;
- nota.

Todo esto se construyó primero sin estado y sin interacción.

Ese paso fue importante porque permitió separar estructura visual de comportamiento.

## Componentización progresiva

Después de tener la UI visible, se refactorizó por sectores.

Componentes extraídos:

- `AppRail`
- `WorkspaceLayout`
- `WorkspacePanel`
- `PanelHeader`
- `IssueTable`
- `EvaluationPanel`

El objetivo no fue componentizar por moda, sino por responsabilidad.

Cada componente quedó con una función clara:

- `AppRail`: navegación lateral.
- `WorkspaceLayout`: grilla principal del workspace.
- `WorkspacePanel`: estructura común de panel.
- `PanelHeader`: encabezado reutilizable.
- `IssueTable`: tabla estática de issues.
- `EvaluationPanel`: panel estático de evaluación.

Después de este refactor, `index.astro` dejó de ser un archivo largo y pasó a funcionar como composición de piezas.

## Estado antes de las islas

Antes de React, la app ya tenía:

- layout full-screen;
- fondo técnico de puntos;
- rail lateral;
- dos paneles principales;
- tabla estática;
- evaluación estática;
- estructura componentizada;
- commits separados por hito;
- documentación inicial del proceso.

Ese fue el punto correcto para recién instalar React.

No antes.

## Primera isla interactiva

La primera isla fue:

`IssueEvaluatorIsland`

Su responsabilidad:

- mantener criterios de evaluación;
- permitir modificar puntajes;
- recalcular el puntaje total;
- cambiar el resultado según el total;
- actualizar la nota sin recargar la página.

Se montó con:

```astro
<IssueEvaluatorIsland client:load />