# Jornadas Formativas SOCIA — Materiales y sistema de registro

Repositorio de materiales para las **Jornadas Formativas del Proyecto SOCIA** organizadas por el IES Rafael Alberti (Cádiz).

El Proyecto SOCIA (*Un SOC en tu aula*) forma a profesorado de FP en ciberseguridad, conectando centros educativos con entornos reales de trabajo.

---

## Contenido

### Carteles y programas
Programas de las jornadas en formato HTML, PDF y PNG, listos para imprimir o proyectar.

| Archivo | Descripción |
|---------|-------------|
| `programa_jornadas_profesorado/` | Programa de la jornada para profesorado |
| `programa_jornadas_alumnado/` | Programa de la jornada para alumnado |
| `Díptico SOCIA.pdf` | Díptico informativo del proyecto |
| `Informe de necesidades/` | Justificación y memoria de las jornadas |

### Sistema de registro VPN (`vpn-registro/`)

Sistema automatizado para distribuir accesos VPN WireGuard a los asistentes. Cuando un profesor rellena el formulario Google, recibe automáticamente su fichero `.conf` y el QR de conexión por email.

```
setup_opnsense.py   → crea peers WireGuard en OPNsense
run.py              → script maestro interactivo (gestiona todo)
apps-script/        → Google Apps Script (Form + Sheets + email)
docs/index.html     → página de proyección con QR para pantalla
```

**Uso rápido:**
```bash
cd vpn-registro/setup
python3 run.py
```

---

## Infraestructura

- **Firewall/VPN**: OPNsense en `REDACTED_IP_OPNSENSE` (IES Rafael Alberti)
- **WireGuard**: 50 perfiles alumnoN, IPs `10.0.3.101–150`
- **Google**: Spreadsheet + Form + Apps Script (trigger automático)
- **Página QR**: `docs/index.html` — abrir en Chrome + F11 para proyectar

---

## Logos y assets

En `Logos/` están los recursos gráficos del proyecto: logo SOCIA, sello del IES Rafael Alberti y logos de entidades colaboradoras.

---

## Seguridad

Las claves privadas WireGuard y las credenciales de OPNsense **no se suben al repositorio**. Ver `vpn-registro/setup/.env.example` para la configuración necesaria.
