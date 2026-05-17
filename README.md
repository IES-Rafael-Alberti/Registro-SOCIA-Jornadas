# Registro SOCIA Jornadas

Sistema automatizado de registro y distribución de accesos VPN para las **Jornadas Formativas del Proyecto SOCIA** (IES Rafael Alberti, Cádiz).

Cuando un asistente rellena el formulario Google, recibe automáticamente su perfil WireGuard (fichero `.conf` + QR de conexión) por email.

---

## Cómo funciona

```
Asistente rellena el Form
        ↓
Apps Script detecta el envío
        ↓
Asigna el primer slot libre de la hoja Slots
        ↓
Envía el email con el .conf adjunto y el QR
```

---

## Requisitos previos

- Python 3.9+
- Node.js + `clasp` instalado globalmente (`npm install -g @google/clasp`)
- Acceso a OPNsense con usuario y contraseña
- Cuenta de Google con acceso al proyecto de Apps Script
- Autenticación de clasp activa (`clasp login`)

Instalar dependencias Python:

```bash
pip install -r setup/requirements.txt
```

---

## Configuración inicial (solo la primera vez)

### 1. Credenciales de OPNsense

```bash
cp setup/.env.example setup/.env
```

Editar `setup/.env` y rellenar:

```
OPNSENSE_HOST=https://192.168.x.x
OPNSENSE_USER=tu_usuario
OPNSENSE_PASS=tu_contraseña
```

### 2. Autenticar clasp con Google

```bash
clasp login
```

---

## Preparar una jornada

### Paso 1 — Ejecutar el script principal

```bash
python3 setup/run.py
```

El script hace todo de forma interactiva:

1. Se conecta a OPNsense y detecta los peers WireGuard existentes
2. Pregunta cuántos perfiles quieres generar
3. Pregunta si quieres **añadir** perfiles a los existentes o **reemplazar** todos
   - **Reemplazar**: borra todos los peers `alumnoN` y crea N nuevos desde `alumno1`
   - **Añadir**: mantiene los existentes y crea nuevos a partir del último
4. Crea los peers en OPNsense y recarga WireGuard
5. Exporta los perfiles a `setup/slots_vpn.csv`
6. Sube el código a Google Apps Script con los datos de los slots
7. Genera `docs/index.html` con el QR del formulario para proyectar en pantalla

### Paso 2 — Configurar Apps Script (solo si es la primera vez o se ha reseteado)

Tras el deploy, abrir Apps Script en el navegador y ejecutar la función **`setup()`**:

- Crea la pestaña **Slots** en el Google Sheet con todos los perfiles
- Crea el **Google Form** con los campos nombre, email y centro
- Instala el **trigger** automático que envía el email al recibir cada respuesta

> ⚠️ `setup()` borra y recrea la hoja Slots. Solo ejecutarla si es la primera vez o si quieres resetear todo. Pedirá confirmación antes de continuar.

### Paso 3 — Proyectar el QR

Abrir `docs/index.html` en el navegador (o usar la GitHub Page del repo) y proyectar en pantalla para que los asistentes escaneen y accedan al formulario.

---

## Durante la jornada

El sistema funciona de forma completamente automática:

1. El asistente escanea el QR y rellena el formulario (nombre, email, centro)
2. Apps Script detecta el envío en tiempo real
3. Asigna el primer slot libre y lo marca como ocupado
4. Envía el email con el fichero `.conf` adjunto y el QR de WireGuard

Sin slots libres, el sistema avisa automáticamente al administrador por email.

---

## Restaurar la hoja Slots sin tocar el formulario

Si la hoja Slots queda vacía por accidente, ejecutar en Apps Script la función **`restoreSlotsOnly()`**. Repuebla la hoja con los slots actuales sin tocar el formulario ni el trigger.

Requiere haber hecho un deploy previo con `python3 setup/run.py` o `python3 setup/deploy.py`.

---

## Solo actualizar el código (sin tocar OPNsense)

```bash
python3 setup/deploy.py
```

Inyecta el CSV existente en Bootstrap.gs, sube el código a Apps Script y restaura el archivo. Útil para cambios en el email, la configuración o la lógica del script.

---

## Estructura del proyecto

```
apps-script/
  Bootstrap.gs        Datos de slots + funciones de setup y restauración
  Code.gs             Trigger onFormSubmit y lógica principal
  Config.gs           Configuración (asunto, columnas, HTML de infraestructura)
  EmailService.gs     Construcción y envío del email corporativo
  appsscript.json     Manifiesto del proyecto Apps Script

setup/
  run.py              Script maestro interactivo (OPNsense + deploy + QR)
  deploy.py           Deploy a Apps Script sin tocar OPNsense
  setup_opnsense.py   Cliente de la API de OPNsense
  requirements.txt    Dependencias Python
  .env.example        Plantilla de credenciales (sin secretos)
  slots_vpn.csv       Perfiles generados (ignorado por git)

docs/
  index.html          Página de proyección con QR (generada por run.py)
  .nojekyll           Necesario para GitHub Pages

instrucciones/
  infraestructura.md  Texto de instrucciones que aparece en el email
```

---

## Seguridad

Las claves privadas WireGuard y las credenciales de OPNsense **nunca se suben al repositorio**:

- `setup/.env` — credenciales de OPNsense (ignorado por git)
- `setup/slots_vpn.csv` — claves privadas de los perfiles (ignorado por git)
- `.clasp.json` — vinculación a tu cuenta Google (ignorado por git)

El deploy inyecta las claves en Bootstrap.gs solo durante el `clasp push` y las elimina inmediatamente después.

---

*Plataforma SOCIA · Un SOC en tu aula · IES Rafael Alberti*
