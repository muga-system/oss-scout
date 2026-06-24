# oss-scout — Specs mínimas

## 1. Propósito del proyecto

`oss-scout` es una mini app hecha con Astro para aprender el modelo de islas mientras se construye una herramienta útil para analizar issues open source.

El proyecto debe ayudar a evaluar si un issue vale la pena para una primera contribución.

## 2. Objetivo de aprendizaje

Aprender a separar:

* HTML estático renderizado por Astro.
* Componentes visuales sin estado.
* Islas interactivas hidratadas en el navegador.
* Estado local mínimo.
* Persistencia simple con `localStorage`, más adelante.

La prioridad no es hacer una app completa.
La prioridad es entender cuándo una parte necesita JavaScript y cuándo no.

## 3. Alcance de la primera versión

### v0.1

La primera versión solo debe incluir:

* una home estática;
* una página `/evaluate`;
* una isla interactiva llamada `IssueChecklistIsland`;
* una checklist de criterios para evaluar un issue;
* un resultado calculado según la cantidad de criterios marcados.

No debe incluir todavía:

* base de datos;
* login;
* API externa;
* conexión con GitHub;
* diseño complejo;
* filtros avanzados;
* persistencia;
* dashboard.

## 4. Estructura inicial del proyecto

```txt
oss-scout/
  src/
    components/
      SectionHeader.astro
    islands/
      IssueChecklistIsland.jsx
    layouts/
      BaseLayout.astro
    pages/
      index.astro
      evaluate.astro
  public/
  astro.config.mjs
  package.json
  README.md
  SPECS.md
```

## 5. Responsabilidad de cada carpeta

### `src/pages/`

Contiene las rutas del sitio.

* `index.astro`: presentación breve del proyecto.
* `evaluate.astro`: página donde se usa la isla de evaluación.

### `src/layouts/`

Contiene estructuras compartidas.

* `BaseLayout.astro`: define HTML base, metadata, estructura general y estilos globales si hace falta.

### `src/components/`

Contiene componentes Astro sin estado interactivo.

Ejemplo:

* títulos de sección;
* bloques de texto;
* tarjetas estáticas;
* layout visual.

Estos componentes no deberían usar React ni estado del navegador.

### `src/islands/`

Contiene componentes interactivos.

Una isla existe solo si necesita:

* estado;
* eventos;
* interacción del usuario;
* acceso al navegador;
* `localStorage`;
* render dinámico en cliente.

## 6. Primera isla: `IssueChecklistIsland`

La isla debe mostrar una lista de criterios.

Criterios iniciales:

* El issue está abierto.
* Tiene contexto claro.
* Tiene etiqueta `good first issue` o similar.
* No requiere tocar el core del proyecto.
* Se puede resolver en pocos archivos.
* Hay actividad reciente de maintainers.

Cada criterio marcado suma 1 punto.

Resultado:

* 0 a 2 puntos: descartar.
* 3 a 4 puntos: revisar con cuidado.
* 5 a 6 puntos: buen candidato.

## 7. Regla de hidratación

La isla `IssueChecklistIsland` debe cargarse con:

```astro
<IssueChecklistIsland client:load />
```

Motivo:

La checklist es la interacción principal de la página `/evaluate`, por eso debe estar disponible apenas carga la página.

Más adelante se podrán probar otras directivas:

* `client:idle` para componentes secundarios.
* `client:visible` para componentes que están más abajo en la página.

## 8. Reglas del proyecto

### Hacer

* Mantener cada paso chico.
* Crear una sola cosa por vez.
* Leer el resultado en navegador antes de seguir.
* Nombrar archivos de forma explícita.
* Separar estructura estática de interacción.
* Hacer commits conscientes.

### No hacer

* No agregar features antes de terminar `v0.1`.
* No conectar APIs externas.
* No usar librerías de UI.
* No convertir todo en React.
* No resolver diseño antes de entender la isla.
* No pedirle a la IA que genere todo el proyecto completo.

## 9. Flujo de trabajo con IA

La IA puede ayudar a:

* explicar el siguiente paso;
* revisar errores;
* proponer estructura;
* explicar por qué algo va en Astro o en una isla;
* revisar código escrito por el usuario;
* sugerir commits;
* detectar desvíos de alcance.

La IA no debe:

* construir todo el proyecto de una sola vez;
* agregar archivos no pedidos;
* cambiar la estructura sin justificar;
* resolver varias fases juntas;
* adelantar features futuras;
* ocultar decisiones técnicas.

## 10. Forma correcta de pedir ayuda a la IA

Usar pedidos chicos.

Ejemplos:

```txt
Explicame qué responsabilidad tiene este archivo antes de crearlo.
```

```txt
Revisá este componente y decime si debería ser Astro estático o una isla.
```

```txt
Tengo este error. Explicame la causa probable antes de darme la solución.
```

```txt
Decime cuál es el próximo paso mínimo sin adelantar features.
```

```txt
Ayudame a escribir un commit claro para este cambio.
```

## 11. Definition of Done de v0.1

La versión `v0.1` está terminada cuando:

* el proyecto corre localmente;
* existe una home estática;
* existe la ruta `/evaluate`;
* la checklist se puede usar;
* el resultado cambia al marcar criterios;
* la isla está separada en `src/islands/`;
* el resto de la página no depende de JavaScript;
* el README explica qué es el proyecto;
* el usuario entiende por qué esa parte es una isla.

## 12. Próximas versiones posibles

### v0.2

Agregar persistencia con `localStorage`.

### v0.3

Agregar lista local de proyectos open source.

### v0.4

Agregar filtros por tipo de contribución.

### v0.5

Agregar notas personales por proyecto.

Nada de esto se hace antes de cerrar `v0.1`.
