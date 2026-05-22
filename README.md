# JM Náutica ⚓

Guía de navegación de bolsillo. Funciona en móvil, tablet y ordenador.

## Contenido

- **RIPA** — Reglamento Internacional para Prevenir Abordajes (COLREGS 72), organizado por capítulos
- **Balizas** — Sistema IALA región A con ilustraciones SVG
- **Banderas** — Código Internacional de Señales con imágenes reales
- **Luces** — Diagramas de sectores luminosos
- **Pitidos** — Señales acústicas de maniobra y niebla
- **Marcas** — Marcas de día reglamentarias
- **Maniobras** — Reglas de paso y prioridad
- **VHF** — Canales y procedimientos (MAYDAY, PAN PAN, SÉCURITÉ)
- **Meteo** — Predicción en tiempo real de Sada vía Open-Meteo + escala Beaufort, nubes y frentes
- **Nudos** — Nudos marineros con diagramas
- **Emergencia** — Protocolos de actuación (HMA, incendio, vía de agua, varada, etc.)

## Desarrollo local

```bash
npm install
npm run dev
```

## Desplegar en Netlify

### Opción 1: Desde GitHub (recomendado)

1. Sube el proyecto a un repositorio de GitHub:
   ```bash
   git init
   git add .
   git commit -m "Primera versión"
   git remote add origin https://github.com/TU_USUARIO/jm-nautica.git
   git push -u origin main
   ```

2. Entra en [netlify.com](https://netlify.com) → "Add new site" → "Import an existing project"
3. Conecta GitHub y selecciona el repositorio
4. La configuración se detectará automáticamente desde `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy"

### Opción 2: Arrastrar carpeta

1. Ejecuta `npm install && npm run build` localmente
2. Arrastra la carpeta `dist` a [app.netlify.com/drop](https://app.netlify.com/drop)

## Añadir a pantalla de inicio (iPhone)

1. Abre la URL en Safari
2. Toca el botón compartir
3. "Añadir a pantalla de inicio"

Funcionará como una app nativa, sin barra del navegador.

## Datos meteorológicos

La predicción de Sada se obtiene de [Open-Meteo](https://open-meteo.com) — API gratuita sin clave, con CORS habilitado. Coordenadas: 43.358N / 8.247O.
