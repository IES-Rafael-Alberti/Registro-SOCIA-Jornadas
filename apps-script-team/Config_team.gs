// ═══════════════════════════════════════════════════════════════════
//  Config_team.gs  —  Configuración del sistema VPN por equipos
//  Jornadas Formativas SOCIA · IES Rafael Alberti
// ═══════════════════════════════════════════════════════════════════

var CONFIG_TEAM = {

  // ── Google Sheets ──────────────────────────────────────────────
  SHEET_SLOTS:   'Slots_Equipos',
  SHEET_THEHIVE: 'TheHive',

  // Columnas de Slots_Equipos (índice 1 = columna A)
  COL_EQUIPO:        1,   // A: equipo1 … equipo25
  COL_SLOT_M1:       2,   // B: equipo1_m1
  COL_IP_M1:         3,   // C: 10.0.3.151
  COL_PRIVKEY_M1:    4,   // D
  COL_PUBKEY_M1:     5,   // E
  COL_PSK_M1:        6,   // F
  COL_CONF_M1:       7,   // G
  COL_UUID_M1:       8,   // H
  COL_SLOT_M2:       9,   // I: equipo1_m2
  COL_IP_M2:         10,  // J: 10.0.3.152
  COL_PRIVKEY_M2:    11,  // K
  COL_PUBKEY_M2:     12,  // L
  COL_PSK_M2:        13,  // M
  COL_CONF_M2:       14,  // N
  COL_UUID_M2:       15,  // O
  COL_LIBRE:         16,  // P: TRUE / FALSE
  COL_NOMBRE_EQUIPO: 17,  // Q
  COL_NOMBRE_M1:     18,  // R
  COL_EMAIL_M1:      19,  // S
  COL_CENTRO_M1:     20,  // T
  COL_NOMBRE_M2:     21,  // U
  COL_EMAIL_M2:      22,  // V
  COL_CENTRO_M2:     23,  // W
  COL_THEHIVE_URL:   24,  // X
  COL_ENVIADO_EN:    25,  // Y

  // Columnas de TheHive
  COL_TH_URL:      1,   // A: URL de TheHive
  COL_TH_LIBRE:    2,   // B: TRUE / FALSE
  COL_TH_EQUIPO:   3,   // C: nombre del equipo asignado
  COL_TH_ASIGNADO: 4,   // D: timestamp de asignación

  // ── Email ──────────────────────────────────────────────────────
  EMAIL_SUBJECT:   'Tu acceso VPN — Jornadas Formativas SOCIA',
  EMAIL_FROM_NAME: 'Jornadas SOCIA · IES Rafael Alberti',
  ADMIN_EMAIL:     'actios@iesrafaelalberti.com',

  // ── Campos del formulario (posición en e.values[]) ─────────────
  // 0 = timestamp, luego en orden del form
  // Los SectionHeaderItem no generan valor — solo los campos de texto
  FORM_NOMBRE_M1:     1,
  FORM_EMAIL_M1:      2,
  FORM_CENTRO_M1:     3,
  FORM_NOMBRE_M2:     4,
  FORM_EMAIL_M2:      5,
  FORM_CENTRO_M2:     6,

  // ── Instrucciones de infraestructura ──────────────────────────
  INFRA_HTML: `
    <div style="font-family:Arial,sans-serif;">
<p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 10px;">Una vez conectado a la VPN, tendrás acceso a las siguientes herramientas.</p>
<hr style="border:none;border-top:1px solid #e8e8e8;margin:16px 0;">
<h4 style="color:#1a1a1a;font-size:14px;font-weight:bold;margin:12px 0 6px;">Graylog — Gestión de logs</h4>
<p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 10px;">Plataforma central de análisis y correlación de eventos de seguridad.</p>
<p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 10px;"><strong>URL:</strong> <a style="color:#eb114b;" href="http://172.17.33.153:9000">http://172.17.33.153:9000</a><br />
<strong>Credenciales:</strong> <code style="background:#f5f5f5;padding:2px 5px;border-radius:3px;font-size:12px;font-family:monospace;">analista-SOCIA / analista-SOCIA</code></p>
<hr style="border:none;border-top:1px solid #e8e8e8;margin:16px 0;">
<h4 style="color:#1a1a1a;font-size:14px;font-weight:bold;margin:12px 0 6px;">Malcolm — Análisis de tráfico de red</h4>
<p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 10px;">Herramienta de análisis de capturas de red y detección de amenazas.</p>
<p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 10px;"><strong>URL:</strong> <a style="color:#eb114b;" href="https://172.17.33.103">https://172.17.33.103</a><br />
<strong>Credenciales:</strong> <code style="background:#f5f5f5;padding:2px 5px;border-radius:3px;font-size:12px;font-family:monospace;">analista-SOCIA / analista-SOCIA</code></p>
<hr style="border:none;border-top:1px solid #e8e8e8;margin:16px 0;">
<h4 style="color:#1a1a1a;font-size:14px;font-weight:bold;margin:12px 0 6px;">Velociraptor — Respuesta en endpoint</h4>
<p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 10px;">Plataforma de hunting y respuesta a incidentes en endpoints.</p>
<p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 10px;"><strong>URL:</strong> <a style="color:#eb114b;" href="https://172.17.33.101:8889/app/index.html">https://172.17.33.101:8889</a><br />
<strong>Credenciales:</strong> <code style="background:#f5f5f5;padding:2px 5px;border-radius:3px;font-size:12px;font-family:monospace;">analista-SOCIA / analista-SOCIA</code></p>
<hr style="border:none;border-top:1px solid #e8e8e8;margin:16px 0;">
<h4 style="color:#1a1a1a;font-size:14px;font-weight:bold;margin:12px 0 6px;">TheHive — Gestión de casos de IR</h4>
<p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 10px;">Plataforma colaborativa de respuesta a incidentes donde resolveréis los casos planteados durante las jornadas.</p>
<p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 10px;">El acceso a TheHive se realizará <strong>por parejas</strong>, las dos personas que forman parte del equipo accederan a la misma instacia de TheHive.
<strong>URL:</strong> <a style="color:#eb114b;" href="XXXXX">XXXXX</a></p>
<p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 10px;">En la instancia hay dos usuarios registrados:</p>
<p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 10px;"><strong>Credenciales 1:</strong> <code style="background:#f5f5f5;padding:2px 5px;border-radius:3px;font-size:12px;font-family:monospace;">analista1 / analista1</code></p>
<p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 10px;"><strong>Credenciales 2:</strong> <code style="background:#f5f5f5;padding:2px 5px;border-radius:3px;font-size:12px;font-family:monospace;">analista2 / analista2</code></p>
<hr style="border:none;border-top:1px solid #e8e8e8;margin:16px 0;">
<blockquote style="margin:12px 0;padding:10px 14px;background:#fff8e1;border-left:4px solid #f59e0b;border-radius:0 4px 4px 0;">
<p style="color:#555;font-size:14px;line-height:1.7;margin:0 0 10px;"><strong>Importante:</strong> Estas herramientas son accesibles únicamente
a través de la VPN. Asegúrate de tener WireGuard activo antes
de intentar acceder.</p>
</blockquote>
</div>
  `

};
