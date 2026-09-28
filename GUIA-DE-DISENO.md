# Sitio web Karla Lara — Guía de diseño para desarrollo

Diseño de referencia (inicio, conferencias y sobre mí, en escritorio y móvil):
https://claude.ai/artifact/8zE76DWVjoh5xdJS7MwN2X

Todos los textos finales están en el diseño. Esta guía resume lo que se necesita para construirlo en WordPress.

---

## 1. Páginas y URLs

| Página | URL sugerida | Objetivo |
|---|---|---|
| Inicio | `/` | Presentar a Karla como conferencista de liderazgo en la era de la IA y llevar a "Consultar fechas" |
| Conferencias | `/conferencias` | Detalle de "Liderazgo para la era de la IA" + otras dos conferencias |
| Sobre mí | `/sobre-mi` | Historia, enfoque, medios y empresas |
| Código Humano | `/codigo-humano` (después) | Serie de 10 episodios, una página por episodio con resumen y transcripción |

Menú: Conferencias · Sobre mí · Resultados (ancla en inicio) · Código Humano · botón WhatsApp.

Todos los botones "Consultar fechas" y "WhatsApp" abren:
`https://wa.me/525529100162?text=Hola%20Karla%2C%20me%20interesa%20la%20conferencia%20Liderazgo%20para%20la%20era%20de%20la%20IA%20para%20mi%20organizaci%C3%B3n.`

El formulario del inicio (nombre, empresa, correo corporativo, fecha del evento, número de asistentes) debe enviar al correo de Karla.

---

## 2. Colores

| Uso | Hex |
|---|---|
| Azul principal (botones, enlaces, acentos) | `#3D63F5` |
| Azul noche (textos y fondos oscuros) | `#0B1230` |
| Pie de página | `#070C22` |
| Texto secundario sobre blanco | `#4A5578` |
| Texto secundario sobre oscuro | `#C9D3FF` |
| Texto terciario / notas sobre oscuro | `#8C98C4` |
| Fondo azul claro de secciones y tarjetas | `#F3F6FF` |
| Bordes sobre blanco | `#E1E6F5` |
| Tarjetas sobre fondo oscuro | `#1A2344` |
| Bordes sobre fondo oscuro | `#2E3A66` |
| Blanco | `#FFFFFF` |

**Titulares en fondo oscuro:** degradado de texto de `#FFFFFF` a `#B7C3FF` (de arriba hacia abajo).

**Fondo oscuro con cuadrícula** (portadas y cierres):
```css
background-color: #0B1230;
background-image:
  radial-gradient(ellipse 70% 60% at 25% 0%, rgba(61,99,245,.38), rgba(61,99,245,0) 70%),
  linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px);
background-size: auto, 72px 72px, 72px 72px; /* 48px en móvil */
```

**Colores del Mapa Humano–IA** (solo en conferencias): Eliminar `#8C98C4`, Automatizar `#3D63F5`, Aumentar `#6A3FC4`, Practicar `#E8A04A`, Proteger `#A6560A`.

---

## 3. Tipografía

Una sola familia: **Plus Jakarta Sans** (Google Fonts), pesos 400, 500, 600, 700 y 800.

| Elemento | Escritorio | Móvil |
|---|---|---|
| H1 portada | 88–96 px, 800, interlineado 1, tracking −3 px | 46–48 px, tracking −1.5 px |
| H2 secciones | 52 px, 800, interlineado 1.1, tracking −1.5 px | 32 px, tracking −1 px |
| H3 tarjetas | 20–24 px, 700–800 | 18–20 px |
| Texto de cuerpo | 17–19 px, 400, interlineado 1.6 | 16–17 px |
| Etiquetas y notas | 14–15 px | 13–14 px |
| Botones | 17–18 px, 700 | 16–18 px |

---

## 4. Retícula y espaciado

- Ancho de diseño: 1440 px escritorio, 390 px móvil.
- Márgenes laterales: 96 px escritorio, 24 px móvil.
- Retícula de 12 columnas con 24 px de separación.
- Espacio vertical de secciones: 120 px arriba y abajo (64 px en móvil).
- Las secciones alternan blanco y `#F3F6FF`; portadas y cierres usan el fondo oscuro con cuadrícula.

---

## 5. Componentes

- **Botón principal:** fondo `#3D63F5`, texto blanco, 700, radio 14 px, alto 58–62 px.
- **Botón secundario (sobre oscuro):** borde 1.5 px `#5A6488`, texto blanco, radio 14 px.
- **Botón WhatsApp del menú:** fondo `rgba(61,99,245,.22)`, borde `#4F6BD8`, radio 12 px.
- **Tarjetas:** fondo `#F3F6FF` (o blanco sobre secciones azul claro), radio 20 px, padding 32 px, sin sombra.
- **Etiquetas (chips):** radio 12 px; en portada fondo `rgba(26,35,68,.8)` con borde `#2E3A66`.
- **Fotos:** radio 20 px.
- **Logos:** alineados en retícula, opacidad 80 %, todos en azul noche (ya vienen así en la carpeta `logos`).
- **Preguntas frecuentes:** abiertas, sin acordeón, para que Google pueda leerlas.

---

## 6. Fotos

| Archivo | Dónde va |
|---|---|
| `inicio-portada-escenario.jpg` | Inicio, portada (vertical, a la derecha) |
| `inicio-sobre-mi-retrato-azul.jpg` | Inicio, sección "Sobre Karla" |
| `conferencias-sobre-karla-yves-rocher.jpg` | Conferencias, sección "Sobre Karla" |
| `sobre-mi-portada-estudio.jpg` | Sobre mí, portada |
| `sobre-mi-historia-saco-verde.jpg` | Sobre mí, "Mi historia" |

La foto de la portada del inicio viene en baja resolución (768 px). Conviene pedir el original a Karla.
Exportar todas en WebP, máximo 1600 px de ancho, con texto alternativo descriptivo.

---

## 7. SEO (Rank Math)

- **Inicio** — Título: "Karla Lara | Conferencista de liderazgo en la era de la IA". Palabra clave: conferencista de liderazgo e inteligencia artificial.
- **Conferencias** — Título: "Conferencia Liderazgo para la era de la IA | Karla Lara". Palabra clave: conferencia de IA para empresas.
- **Sobre mí** — Título: "Sobre Karla Lara | Conferencista y coach". Palabra clave: Karla Lara conferencista.
- Datos estructurados: Persona (Karla Lara), Servicio (conferencias) y FAQPage en las preguntas frecuentes.
- Un solo H1 por página. Tema ligero (Kadence o GeneratePress), caché e imágenes WebP para que cargue rápido.
- Conectar el Perfil de Empresa de Google.

---

## 8. Pendientes de contenido

- Testimonio de un cliente corporativo (inicio).
- Video corto en escenario, de 1 a 2 minutos (inicio).
- Episodios de Código Humano (cuando estén listos).
