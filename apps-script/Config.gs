// ═══════════════════════════════════════════════════════════════════
//  Config.gs  —  Configuración central del sistema VPN
//  Jornadas Formativas SOCIA · IES Rafael Alberti
// ═══════════════════════════════════════════════════════════════════

var CONFIG = {

  // ── WireGuard (servidor ya configurado, no tocar) ──────────────
  WG_ENDPOINT:    'REDACTED_IP_PUBLICA:8822',
  WG_SERVER_PUBKEY: 'REDACTED_SERVER_PUBKEY',
  WG_DNS:         '1.1.1.1, 8.8.8.8',
  WG_ALLOWED_IPS: '10.0.3.0/24, 172.17.33.0/24, 172.17.34.0/24, 172.18.1.0/24, 172.31.0.0/24',
  WG_KEEPALIVE:   15,

  // ── Google Sheets ──────────────────────────────────────────────
  SHEET_SLOTS: 'Slots',   // nombre de la pestaña con los 50 slots

  // Columnas de la hoja Slots (índice 1 = columna A)
  COL_SLOT:       1,   // A: alumno1 … alumno50
  COL_IP:         2,   // B: 10.0.3.101 … 10.0.3.150
  COL_PRIVKEY:    3,   // C: clave privada cliente
  COL_PUBKEY:     4,   // D: clave pública cliente
  COL_PSK:        5,   // E: pre-shared key
  COL_CONF:       6,   // F: contenido .conf completo
  COL_UUID:       7,   // G: uuid OPNsense
  COL_LIBRE:      8,   // H: TRUE / FALSE
  COL_NOMBRE:     9,   // I: nombre del profesor asignado
  COL_EMAIL:      10,  // J: email del profesor
  COL_CENTRO:     11,  // K: centro educativo
  COL_ENVIADO_EN: 12,  // L: timestamp de envío

  // ── Email ──────────────────────────────────────────────────────
  EMAIL_SUBJECT:   'Tu acceso VPN — Jornadas Formativas SOCIA',
  EMAIL_FROM_NAME: 'Jornadas SOCIA · IES Rafael Alberti',
  ADMIN_EMAIL:     'actios@iesrafaelalberti.com',  // recibe avisos de slots agotados

  // ── Campos del formulario Google Form ─────────────────────────
  // Posición en e.values[] (0 = timestamp, luego van en orden del form)
  FORM_NOMBRE:  1,
  FORM_EMAIL:   2,
  FORM_CENTRO:  3,

  // ── Instrucciones de infraestructura ──────────────────────────
  //
  //  ┌─────────────────────────────────────────────────────────┐
  //  │  AQUÍ VAN TUS INSTRUCCIONES DE INFRAESTRUCTURA          │
  //  │                                                         │
  //  │  1. Edita el archivo:                                   │
  //  │     instrucciones/infraestructura.md                    │
  //  │                                                         │
  //  │  2. Convierte a HTML y pégalo entre los backticks       │
  //  │     de INFRA_HTML (justo debajo de este comentario)     │
  //  │                                                         │
  //  │  Puedes usar: <h3> <p> <ul> <li> <b> <a> <br>          │
  //  └─────────────────────────────────────────────────────────┘

  INFRA_HTML: `
    <div style="font-family:Arial,sans-serif;">
<p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 10px;">Una vez conectado a la VPN, tendrás acceso a las siguientes herramientas.
El usuario de acceso es <strong>analista-SOCIA</strong> en todas ellas;
la contraseña te será facilitada durante las jornadas.</p>
<hr style="border:none;border-top:1px solid #e8e8e8;margin:16px 0;">
<h4 style="color:#1a1a1a;font-size:14px;font-weight:bold;margin:12px 0 6px;">Graylog — Gestión de logs</h4>
<p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 10px;">Plataforma central de análisis y correlación de eventos de seguridad.</p>
<p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 10px;"><strong>URL:</strong> <a style="color:#eb114b;" href="http://REDACTED_IP_OPNSENSE53:9000">http://REDACTED_IP_OPNSENSE53:9000</a><br />
<strong>Usuario:</strong> <code style="background:#f5f5f5;padding:2px 5px;border-radius:3px;font-size:12px;font-family:monospace;">analista-SOCIA</code></p>
<hr style="border:none;border-top:1px solid #e8e8e8;margin:16px 0;">
<h4 style="color:#1a1a1a;font-size:14px;font-weight:bold;margin:12px 0 6px;">Malcolm — Análisis de tráfico de red</h4>
<p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 10px;">Herramienta de análisis de capturas de red y detección de amenazas.</p>
<p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 10px;"><strong>URL:</strong> <a style="color:#eb114b;" href="https://REDACTED_IP_OPNSENSE03">https://REDACTED_IP_OPNSENSE03</a><br />
<strong>Usuario:</strong> <code style="background:#f5f5f5;padding:2px 5px;border-radius:3px;font-size:12px;font-family:monospace;">analista-SOCIA</code></p>
<hr style="border:none;border-top:1px solid #e8e8e8;margin:16px 0;">
<h4 style="color:#1a1a1a;font-size:14px;font-weight:bold;margin:12px 0 6px;">Velociraptor — Respuesta en endpoint</h4>
<p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 10px;">Plataforma de hunting y respuesta a incidentes en endpoints.</p>
<p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 10px;"><strong>URL:</strong> <a style="color:#eb114b;" href="https://REDACTED_IP_OPNSENSE01:8889/app/index.html">https://REDACTED_IP_OPNSENSE01:8889</a><br />
<strong>Usuario:</strong> <code style="background:#f5f5f5;padding:2px 5px;border-radius:3px;font-size:12px;font-family:monospace;">analista-SOCIA</code></p>
<hr style="border:none;border-top:1px solid #e8e8e8;margin:16px 0;">
<h4 style="color:#1a1a1a;font-size:14px;font-weight:bold;margin:12px 0 6px;">TheHive — Gestión de casos de IR</h4>
<p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 10px;">Plataforma colaborativa de respuesta a incidentes donde resolveréis
los casos planteados durante las jornadas.</p>
<p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 10px;"><em>El acceso a TheHive se realizará </em><em>por parejas</em><em> y será habilitado directamente durante las sesiones formativas.</em></p>
<hr style="border:none;border-top:1px solid #e8e8e8;margin:16px 0;">
<blockquote style="margin:12px 0;padding:10px 14px;background:#fff8e1;border-left:4px solid #f59e0b;border-radius:0 4px 4px 0;">
<p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 10px;"><strong>Importante:</strong> Estas herramientas son accesibles únicamente
a través de la VPN. Asegúrate de tener WireGuard activo antes
de intentar acceder.</p>
</blockquote>
</div>
  `

};
