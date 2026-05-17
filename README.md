# Registro SOCIA Jornadas

Sistema automatizado de registro y distribución de accesos VPN para las **Jornadas Formativas del Proyecto SOCIA** (IES Rafael Alberti, Cádiz).

Cuando un asistente rellena el formulario Google, recibe automáticamente su perfil WireGuard (fichero `.conf` + QR) por email.

---

## Cómo funciona

1. Se generan 50 perfiles WireGuard en OPNsense (`alumno1`–`alumno50`, IPs `10.0.3.101–150`)
2. Un Google Form recoge nombre, email y centro del asistente
3. Al enviar, un trigger de Apps Script asigna el primer slot libre y manda el email con el `.conf` adjunto y el QR de conexión
4. La página `docs/index.html` muestra el QR del formulario para proyectar en pantalla durante la jornada

---

## Uso

```bash
# Primera vez o nueva edición
cd setup
cp .env.example .env      # rellenar con credenciales de OPNsense
pip install -r requirements.txt
clasp login               # autenticar Google Apps Script

# Arrancar
python3 run.py
```

El script pregunta cuántos perfiles generar y si reemplazar o añadir a los existentes. Al final abre Apps Script en el navegador — ejecutar `setup()` una sola vez para crear la hoja y el formulario.

---

## Estructura

```
apps-script/          Google Apps Script (Form, Sheets, email corporativo)
setup/                Scripts de configuración (OPNsense + deploy)
  run.py              Script maestro interactivo
  setup_opnsense.py   Gestión de peers WireGuard
  deploy.py           Deploy a Apps Script vía clasp
  .env.example        Plantilla de configuración (sin secretos)
docs/
  index.html          Página de proyección con QR (generada por run.py)
assets/
  SOCIA_logo.png      Logo del proyecto
instrucciones/
  infraestructura.md  Plantilla para las instrucciones del email
```

---

## Seguridad

Las claves privadas WireGuard y las credenciales de OPNsense no se suben al repositorio. Copiar `setup/.env.example` como `setup/.env` y rellenar los valores reales.

---

*Proyecto SOCIA · Un SOC en tu aula*
