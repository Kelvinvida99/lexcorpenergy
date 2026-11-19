# Web de LexCorp Energy

Sitio estático hecho con [Astro](https://astro.build). Una página (`/`) y una página de confirmación (`/gracias/`).

## Uso

```bash
npm install
npm run dev       # desarrollo en http://localhost:4321
npm run build     # genera la carpeta dist/
npm run preview   # sirve dist/ para revisarla
```

## Lo que falta completar (sin esto, la web muestra «por confirmar»)

Todo está en **`src/lib/config.ts`**:

| Campo | Ejemplo |
|---|---|
| `telefono` | `'+1 809 000 0000'` |
| `whatsapp` | `'18090000000'` (solo dígitos). Activa los botones de WhatsApp |
| `correo`, `direccion`, `zonaServicio` | |
| `instagram`, `facebook`, `linkedin` | URL completa |
| `anios`, `proyectos`, `certificaciones`, `marcas` | Datos reales para la ficha técnica |

**Estimador:** revisar `supuestos` en el mismo archivo (tarifa RD$/kWh, horas de sol pico, potencia del panel). Son orientativos y se muestran al visitante.

**Fotos:** `src/assets/obras/` (copias reducidas de `Recursos/`), catalogadas en `src/lib/obras.ts`. Revisa que las categorías sean correctas, sobre todo `techo-paneles.jpg` y `techo-pequeno.jpg`. Las imágenes de `Recursos/` generadas con IA o de stock (`Pic1.png`, `Pic2.png`, `Pic5.png`, `re-photovoltaics-26962.jpg`) no se usan a propósito.

## Publicar en Netlify (gratis)

1. Subir la carpeta `web/` a un repositorio de GitHub.
2. En Netlify: *Add new site → Import from Git*. Build command `npm run build`, publish directory `dist`.
3. El formulario de cotización usa **Netlify Forms**: las solicitudes aparecen en *Forms → cotizacion*, y se pueden activar avisos por correo allí.
4. Cambiar `site` en `astro.config.mjs` por el dominio real.

En local el formulario muestra un error al enviar: es lo esperado, porque Netlify Forms solo funciona una vez publicado.
