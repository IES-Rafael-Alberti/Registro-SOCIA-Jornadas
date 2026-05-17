# Instrucciones de infraestructura — Jornadas Formativas SOCIA

> **Cómo usar este archivo:**
> 1. Rellena las secciones de abajo con tus instrucciones reales
> 2. Convierte el contenido a HTML (puedes usar https://markdowntohtml.com)
> 3. Pega el HTML resultante en `apps-script/Config.gs` → variable `INFRA_HTML`
>
> O bien escribe directamente HTML en `INFRA_HTML` si te resulta más cómodo.

---

## Sección 1 — Acceso a la plataforma formativa

> ✏️ *Describe aquí cómo acceder a la plataforma o herramienta principal de las jornadas
> (Moodle, Google Classroom, servidor interno, aplicación web, etc.)*

**URL de acceso:** `https://...`

**Credenciales:** ...

**Pasos:**
1. ...
2. ...
3. ...

---

## Sección 2 — Recursos disponibles en la red

> ✏️ *Indica qué recursos son accesibles una vez conectado a la VPN
> (servidores, carpetas compartidas, aplicaciones internas, etc.)*

Una vez conectado a la VPN podrás acceder a:

- **Recurso 1:** `172.17.33.XX` — descripción
- **Recurso 2:** `172.17.34.XX` — descripción
- **Carpeta compartida:** `\\servidor\carpeta` o `smb://servidor/carpeta`

---

## Sección 3 — Herramientas / software necesario

> ✏️ *Lista el software que los profesores deben tener instalado o descargado*

| Software | Enlace de descarga | Versión mínima |
|----------|--------------------|----------------|
| ...      | ...                | ...            |

---

## Sección 4 — Soporte y contacto

> ✏️ *Indica a quién contactar si tienen problemas*

Para cualquier incidencia técnica:

- **Email:** soporte@iesrafaelalberti.com
- **Aula de soporte:** ...
- **Horario de atención:** ...

---

## Ejemplo de INFRA_HTML para Config.gs

Una vez tengas el contenido listo, el bloque HTML en Config.gs quedaría así:

```javascript
INFRA_HTML: `
  <p style="color:#555;line-height:1.7;">
    Una vez conectado a la VPN tendrás acceso a los siguientes recursos:
  </p>
  <ul style="color:#555;line-height:2.0;">
    <li><strong>Plataforma formativa:</strong>
        <a href="https://..." style="color:#1565c0;">https://...</a></li>
    <li><strong>Servidor de recursos:</strong> 172.17.33.XX</li>
  </ul>
  <h3 style="color:#333;font-size:15px;">🛠️ Software necesario</h3>
  <p style="color:#555;">...</p>
  <h3 style="color:#333;font-size:15px;">📞 Soporte técnico</h3>
  <p style="color:#555;">
    Acude al <strong>Aula XX</strong> o escribe a
    <a href="mailto:soporte@iesrafaelalberti.com" style="color:#1565c0;">
      soporte@iesrafaelalberti.com
    </a>
  </p>
`
```
