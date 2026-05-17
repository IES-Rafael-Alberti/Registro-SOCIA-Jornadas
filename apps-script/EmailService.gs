// ═══════════════════════════════════════════════════════════════════
//  EmailService.gs  —  Email con imagen corporativa SOCIA
//  Jornadas Formativas SOCIA · IES Rafael Alberti
// ═══════════════════════════════════════════════════════════════════

var SOCIA_LOGO = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDc4MyA3ODMiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyI+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjUzMDA3LDAsMCwxLjUzMDA3LDAsMCkiPgogICAgICAgIDxwYXRoIGQ9Ik0yNTMuMzg0LDY5LjYxM0MyNjUuMjA3LDY5LjMxIDI3Ny4zMjYsNzAuNDU4IDI4OC45MDMsNzIuMzdDMzc1LjIyOCw4Ni42MjcgNDM5LjU3MywxNTEuNzU2IDQ4NS4wNjQsMjIyLjQ1M0M1MDEuMDM2LDI0Ny4yNzUgNTAyLjk1MiwyNDYuOTE3IDQ4Ni45MTgsMjcyLjYyNEM0NzAuMTU0LDI5OS44NDMgNDUwLjU0LDMyNS4xOTkgNDI4LjQwNywzNDguMjY2QzM4Mi43NTQsMzk1LjQ3MSAzMjYuODE4LDQzMi4xMzUgMjU5LjI4Miw0MzMuMjc2QzE5NS45NzEsNDMzLjgxNiAxNDEuNzM4LDQwMi4xNTMgOTYuNjM1LDM1OS45NzdDNjguOTU5LDMzMy44NzEgNDQuODYsMzA0LjIxNiAyNC45NjgsMjcxLjc4NEMyMC45NDEsMjY1LjI4NiAxNC44NDMsMjU3LjAzMiAxNC40MTIsMjQ5LjMxNEMxMy44NzQsMjM5LjY5MSAyMS4zMDMsMjMxLjQ5NyAyNi4zOSwyMjMuNzM3Qzc4LjA3MywxNDQuODk4IDE1NC4xMTYsNzIuNzUxIDI1My4zODQsNjkuNjEzWiIgc3R5bGU9ImZpbGw6cmdiKDM2LDQ1LDYxKTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEuNTMwMDcsMCwwLDEuNTMwMDcsMCwwKSI+CiAgICAgICAgPHBhdGggZD0iTTE0Ny40MzMsMTI5LjU4QzE1MC4xOTYsMTI2LjkxMiAxNTkuOTU3LDEyMC43MTUgMTYzLjQ1MSwxMTguNTg1QzE5Mi41NjMsMTAwLjYyNyAyMjYuMjIsOTEuNDA3IDI2MC40MjEsOTIuMDIxQzI5Ni44NTIsOTIuNjM3IDMzMS41NTMsMTA0LjczOCAzNjEuMTcyLDEyNS43NDlDMzY0LjEwNiwxMjcuODMgMzc3LjQyNywxMzcuMjQ2IDM3OS4wNSwxMzkuNTY5QzQwNy45MSwxNjEuODEzIDQzNS43ODYsMTkzLjMyMyA0NTYuNjMxLDIyMi45MzZDNDYwLjEzNiwyMjcuOTM5IDQ2My41NDEsMjMzLjAxMyA0NjYuODQzLDIzOC4xNTNDNDY4Ljg5NywyNDEuMzkzIDQ3MS4wNSwyNDUuMTE5IDQ3My4xNzEsMjQ4LjI0OUM0NTIuOTY2LDI4NC44NDggNDI3LjAwNCwzMTcuOTU5IDM5Ni4yODMsMzQ2LjMxM0MzOTIuOTQ4LDM0OS4zNzkgMzg0LjQ3MywzNTcuNDk4IDM4MS4wNzYsMzU5Ljg3NEMzNzcuMjg2LDM2My4zNzQgMzcyLjgzMywzNjYuOTAxIDM2OC43NzQsMzcwLjA5OEMzMzguMzczLDM5NC4wNDMgMzAzLjQxMiw0MDguNDQ4IDI2NC41OTYsNDEwLjQ3M0MyMjIuMDk1LDQxMi42OTEgMTgyLjM1NCwzOTcuODE3IDE0OC4zODcsMzcyLjc1MkMxNDIuNDMzLDM2OC40MzQgMTM2LjcwMSwzNjMuODE3IDEzMS4yMTQsMzU4LjkxOUM5My44OTMsMzI4LjQ4NSA2My4xODQsMjg5LjY3NCAzOC45NDEsMjQ4LjMwNEM0Mi41MDUsMjQxLjU2MiA1MC43MDEsMjI5LjgxMiA1NS4yNjYsMjIzLjQyNkM3Ni45MTIsMTkyLjU4OSAxMDIuOCwxNjQuOTYgMTMyLjE2NSwxNDEuMzU2QzEzMi4zMTYsMTQxLjE3NCAxMzQuMDA3LDEzOS44MjEgMTM0LjMwNCwxMzkuNTc4QzEzNS44OTEsMTM4LjAzIDE0NS43MTMsMTMwLjYxMiAxNDcuNDMzLDEyOS41OFoiIHN0eWxlPSJmaWxsOndoaXRlO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS41MzAwNywwLDAsMS41MzAwNywwLDApIj4KICAgICAgICA8cGF0aCBkPSJNMTQ3LjQzMywxMjkuNThDMTUwLjE5NiwxMjYuOTEyIDE1OS45NTcsMTIwLjcxNSAxNjMuNDUxLDExOC41ODVDMTkyLjU2MywxMDAuNjI3IDIyNi4yMiw5MS40MDcgMjYwLjQyMSw5Mi4wMjFDMjk2Ljg1Miw5Mi42MzcgMzMxLjU1MywxMDQuNzM4IDM2MS4xNzIsMTI1Ljc0OUMzNjQuMTA2LDEyNy44MyAzNzcuNDI3LDEzNy4yNDYgMzc5LjA1LDEzOS41NjlDNDA3LjkxLDE2MS44MTMgNDM1Ljc4NiwxOTMuMzIzIDQ1Ni42MzEsMjIyLjkzNkM0NjAuMTM2LDIyNy45MzkgNDYzLjU0MSwyMzMuMDEzIDQ2Ni44NDMsMjM4LjE1M0M0NjguODk3LDI0MS4zOTMgNDcxLjA1LDI0NS4xMTkgNDczLjE3MSwyNDguMjQ5QzQ1Mi45NjYsMjg0Ljg0OCA0MjcuMDA0LDMxNy45NTkgMzk2LjI4MywzNDYuMzEzQzM5Mi45NDgsMzQ5LjM3OSAzODQuNDczLDM1Ny40OTggMzgxLjA3NiwzNTkuODc0QzM3Ny4yODYsMzYzLjM3NCAzNzIuODMzLDM2Ni45MDEgMzY4Ljc3NCwzNzAuMDk4QzMzOC4zNzMsMzk0LjA0MyAzMDMuNDEyLDQwOC40NDggMjY0LjU5Niw0MTAuNDczQzIyMi4wOTUsNDEyLjY5MSAxODIuMzU0LDM5Ny44MTcgMTQ4LjM4NywzNzIuNzUyQzE0Mi40MzMsMzY4LjQzNCAxMzYuNzAxLDM2My44MTcgMTMxLjIxNCwzNTguOTE5QzkzLjg5MywzMjguNDg1IDYzLjE4NCwyODkuNjc0IDM4Ljk0MSwyNDguMzA0QzQyLjUwNSwyNDEuNTYyIDUwLjcwMSwyMjkuODEyIDU1LjI2NiwyMjMuNDI2Qzc2LjkxMiwxOTIuNTg5IDEwMi44LDE2NC45NiAxMzIuMTY1LDE0MS4zNTZDMTMyLjMxNiwxNDEuMTc0IDEzNC4wMDcsMTM5LjgyMSAxMzQuMzA0LDEzOS41NzhDMTM4LjM4NSwxNDQuMTA0IDE0My42NzYsMTQ5LjIxNiAxNDcuOTk0LDE1My41NDZMMTY3Ljk4NSwxNzMuNTU2QzE1MC43NzUsMTkzLjgzNiAxMzguODM1LDIyMC41NDggMTM3LjQ0OCwyNDcuMjY5QzEzNS41MTQsMjc5Ljc0NCAxNDYuODMsMzExLjYxNSAxNjguODEsMzM1LjU5OEMxOTAuNTk0LDM1OS45NTYgMjIxLjIzNiwzNzQuNTU5IDI1My44NzYsMzc2LjE0QzI4NC44MjIsMzc3LjQ2MiAzMTUuMDU0LDM2Ni42MDggMzM4LjA5MywzNDUuOTA0QzM2Mi4yNzUsMzIzLjkwMSAzNzYuNzc5LDI5My4yMyAzNzguNDQzLDI2MC41NzdDMzc5LjgzOCwyMjcuNjUyIDM2OC4xODQsMTk1LjUwNiAzNDYuMDEzLDE3MS4xMjRDMzI1LjAzLDE0OC4xMDEgMjk2LjIzNSwxMzIuNzcgMjY0LjgzNiwxMzEuMzIyQzIzMy40OCwxMjkuNjIzIDIwMi43NTUsMTQwLjU4NyAxNzkuNTU3LDE2MS43NTJDMTc1Ljc3NSwxNTcuNzI2IDE3MS4yMTMsMTUzLjM1OSAxNjcuMjc0LDE0OS40MTNMMTQ3LjQzMywxMjkuNThaIiBzdHlsZT0iZmlsbDpyZ2IoMjM1LDE3LDc1KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEuNTMwMDcsMCwwLDEuNTMwMDcsMCwwKSI+CiAgICAgICAgPHBhdGggZD0iTTEzMi4xNjUsMTQxLjM1NkMxMzEuOTA1LDE0Mi40NzQgMTI2Ljc0NiwxNDguNjk2IDEyNS42ODYsMTUwLjE0OEMxMjAuNjQyLDE1Ni45NjkgMTE2LjE0NSwxNjQuMTc4IDExMi4yMzksMTcxLjcwOEM4My4zMSwyMjguMTU2IDg1LjkxMiwyOTYuMzg3IDEyMy4xOTgsMzQ4LjQwMUMxMjUuMjEzLDM1MS4yMTMgMTI5Ljk2MywzNTYuMzg0IDEzMS4yMTQsMzU4LjkxOUM5My44OTMsMzI4LjQ4NSA2My4xODQsMjg5LjY3NCAzOC45NDEsMjQ4LjMwNEM0Mi41MDUsMjQxLjU2MiA1MC43MDEsMjI5LjgxMiA1NS4yNjYsMjIzLjQyNkM3Ni45MTIsMTkyLjU4OSAxMDIuOCwxNjQuOTYgMTMyLjE2NSwxNDEuMzU2WiIgc3R5bGU9ImZpbGw6d2hpdGU7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjUzMDA3LDAsMCwxLjUzMDA3LDAsMCkiPgogICAgICAgIDxwYXRoIGQ9Ik0zNzkuMDUsMTM5LjU2OUM0MDcuOTEsMTYxLjgxMyA0MzUuNzg2LDE5My4zMjMgNDU2LjYzMSwyMjIuOTM2QzQ2MC4xMzYsMjI3LjkzOSA0NjMuNTQxLDIzMy4wMTMgNDY2Ljg0MywyMzguMTUzQzQ2OC44OTcsMjQxLjM5MyA0NzEuMDUsMjQ1LjExOSA0NzMuMTcxLDI0OC4yNDlDNDUyLjk2NiwyODQuODQ4IDQyNy4wMDQsMzE3Ljk1OSAzOTYuMjgzLDM0Ni4zMTNDMzkyLjk0OCwzNDkuMzc5IDM4NC40NzMsMzU3LjQ5OCAzODEuMDc2LDM1OS44NzRDMzgxLjE2LDM1OS41ODggMzkxLjU5NSwzNDUuNjQ0IDM5Mi41NTcsMzQ0LjE5MUM0MDUuMDI4LDMyNS41MDkgNDEzLjU0NiwzMDQuNDc0IDQxNy41ODcsMjgyLjM3OEM0MTkuODksMjY5LjYyNyA0MjAuMTUzLDI1Ny4zNTMgNDE5Ljc2NCwyNDQuNDE1QzQxOC45NiwyMTcuNjczIDQxMC45OTMsMTg5LjY5IDM5Ny42NzksMTY2LjQ2NUMzOTQuMzgyLDE2MC43MjEgMzkwLjc2NCwxNTUuMTY2IDM4Ni44NDMsMTQ5LjgyOEMzODQuMzM1LDE0Ni40NDYgMzgxLjQxNSwxNDIuOTgxIDM3OS4wNSwxMzkuNTY5WiIgc3R5bGU9ImZpbGw6d2hpdGU7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLjUzMDA3LDAsMCwxLjUzMDA3LDAsMCkiPgogICAgICAgIDxwYXRoIGQ9Ik0yNTMuMTYyLDE1MC44NTZDMjU1LjM2OCwxNTAuNTEzIDI2Mi4xMzQsMTUwLjcyMSAyNjQuNDcsMTUwLjg3N0MyODIuODY2LDE1Mi4wOTcgMzAwLjUzMSwxNTguNTQ1IDMxNS4zODcsMTY5LjQ2MUMzMzguMDk5LDE4NS45NzMgMzUzLjM0LDIxMC44MTIgMzU3Ljc3NCwyMzguNTM5QzM2Mi4wNTksMjY1LjcyNSAzNTUuMzY2LDI5My41IDMzOS4xNjcsMzE1Ljc0OUMzMjMuODU4LDMzNi45MjMgMzAwLjc2NywzNTEuMTUxIDI3NC45NywzNTUuMzA0QzI0OC4xMSwzNTkuNTU1IDIyMC42NjcsMzUyLjg2NyAxOTguNzczLDMzNi43MzZDMTc2Ljg4NywzMjAuNjU2IDE2Mi4yMDQsMjk2LjYxMSAxNTcuODk4LDI2OS43OTZDMTUzLjU4OCwyNDEuOTAxIDE2MS41MzksMjE0LjQ2OSAxNzguMTAyLDE5MS44ODZMMTgxLjc3OSwxODcuMDk5QzE4OS44NjksMTk1LjQ2OCAxOTguMDM0LDIwMy43NjQgMjA2LjI3NCwyMTEuOTg1QzE5OS42NjcsMjIwLjA0MiAxOTQuODg1LDIzMC40MjUgMTkyLjcwOCwyNDAuNTkzQzE4OS4wNiwyNTcuODYgMTkyLjQ5LDI3NS44NjkgMjAyLjIzMSwyOTAuNTg3QzIxMS42MTksMzA1LjAyMyAyMjYuODgzLDMxNS44OTggMjQzLjc5MiwzMTkuNDU1QzI2MS4xMzMsMzIzLjA3NSAyNzkuMjAxLDMxOS42MjggMjkzLjk5MSwzMDkuODc5QzMwOC44NDYsMzAwLjEwOSAzMTkuMTE4LDI4NC43NDUgMzIyLjQ2OSwyNjcuMjg0QzMyNi4wMiwyNDkuNDg3IDMyMi4zMTQsMjMxLjAxIDMxMi4xNzUsMjE1Ljk1OEMzMDIuNDk4LDIwMS41OTYgMjg3LjMwNCwxOTAuNzQ3IDI3MC4xNzgsMTg3LjY5OUMyNDkuNzk0LDE4NC4wNzEgMjM0LjQ1OSwxODguNzg2IDIxNy44MzUsMjAwLjEzM0MyMTUuOTQzLDE5Ny44NiAyMTEuNjIyLDE5My43NzIgMjA5LjM2NywxOTEuNTA0QzIwNC4wMDksMTg2LjA4NSAxOTguNjIzLDE4MC42OTQgMTkzLjIwOSwxNzUuMzMxQzE5Ny4wMDgsMTcyLjUwNyAxOTkuOTk4LDE2OS44MSAyMDQuMDk5LDE2Ny4xMzJDMjE5LjU4MSwxNTcuMDE4IDIzNC45MTEsMTUyLjE3OSAyNTMuMTYyLDE1MC44NTZaIiBzdHlsZT0iZmlsbDpyZ2IoMjM1LDE3LDc1KTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEuNTMwMDcsMCwwLDEuNTMwMDcsMCwwKSI+CiAgICAgICAgPHBhdGggZD0iTTI1NC41NzcsMjA2LjM1NEMyNjYuNTk2LDIwNS4xOCAyNzguNjA2LDIwOS41MzEgMjg3LjY3MiwyMTcuMzQyQzI5Ny40NzMsMjI1Ljg4NSAzMDMuNDcyLDIzNy45NzcgMzA0LjM0NSwyNTAuOTQ5QzMwNS4xMDEsMjYzLjQxNiAzMDAuOTY1LDI3NS42ODUgMjkyLjgxNywyODUuMTVDMjg0LjUzNCwyOTQuNjYyIDI3Mi43NTYsMzAwLjQyMiAyNjAuMTYxLDMwMS4xMThDMjQ3Ljg3MywzMDEuODUxIDIzNS44LDI5Ny42NTcgMjI2LjYxMSwyODkuNDY2QzIxNi44NTgsMjgwLjgwOCAyMTEuNTMzLDI2OS4wMzQgMjEwLjczNCwyNTYuMTAxQzIxMC40MzYsMjQ0LjQzMyAyMTMuNjcyLDIzNS41NTQgMjE5Ljk5OCwyMjUuOTE3QzIyNS4yNjQsMjMxLjY5MiAyMzIuNjMzLDIzOC45ODcgMjM4LjI1OSwyNDQuNDgxQzIzNi40MzMsMjQ4Ljc1MiAyMzUuNjk3LDI1Mi44NDEgMjM2LjM5NSwyNTcuNDkyQzIzNy4yMjIsMjYyLjc4OSAyNDAuMTIzLDI2Ny41NCAyNDQuNDU3LDI3MC42OTdDMjQ4Ljc4MSwyNzMuODA4IDI1NC4xNjMsMjc1LjA3NiAyNTkuNDIxLDI3NC4yMjNDMjY0Ljk4NSwyNzMuMjk2IDI2OS43ODQsMjcwLjU2NyAyNzMuMDM5LDI2NS44OTFDMjc2LjE2NSwyNjEuMzM3IDI3Ny4zMzUsMjU1LjcyIDI3Ni4yODYsMjUwLjI5NkMyNzUuMjgyLDI0NC44MTUgMjcyLjEwOCwyMzkuOTcgMjY3LjQ4NCwyMzYuODZDMjYyLjQ4MSwyMzMuNTEyIDI1Ny4wNjUsMjMyLjkxMSAyNTEuMjc2LDIzNC4wNjZDMjQ0Ljc1MywyMjcuNDY3IDIzOC4xMywyMjAuNjA0IDIzMS40NiwyMTQuMTY1QzI0MC4xNDIsMjA5LjU0OSAyNDQuMjAyLDIwNy4xMDUgMjU0LjU3NywyMDYuMzU0WiIgc3R5bGU9ImZpbGw6cmdiKDIzNSwxNyw3NSk7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=';

var EmailService = {

  send: function(nombre, email, centro, slot, ip, conf) {
    var qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=280x280&ecc=M&data='
                + encodeURIComponent(conf);
    var confBlob = Utilities.newBlob(conf, 'text/plain', slot + '.conf');
    var html = EmailService._buildHtml(nombre, slot, ip, qrUrl, centro);

    GmailApp.sendEmail(
      email,
      CONFIG.EMAIL_SUBJECT,
      'Hola ' + nombre + ',\n\nTu acceso VPN esta listo. Perfil: ' + slot + ' | IP: ' + ip + '\n\nEl archivo ' + slot + '.conf esta adjunto.\n\nJornadas SOCIA · IES Rafael Alberti',
      {
        name:        CONFIG.EMAIL_FROM_NAME,
        htmlBody:    html,
        attachments: [confBlob],
        replyTo:     CONFIG.ADMIN_EMAIL,
      }
    );
  },

  _buildHtml: function(nombre, slot, ip, qrUrl, centro) {
    var primerNombre = nombre.split(' ')[0];
    return '<!DOCTYPE html>' +
'<html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>Acceso VPN — Jornadas SOCIA</title></head>' +
'<body style="margin:0;padding:0;background:#e8e8e8;font-family:Arial,Helvetica,sans-serif;">' +
'<table width="100%" cellpadding="0" cellspacing="0" style="background:#e8e8e8;padding:28px 0;"><tr><td align="center">' +
'<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:4px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.13);border:1px solid #e0e0e0;">' +

'<tr><td style="background:#eb114b;padding:28px 32px 20px;">' +
'<table width="100%" cellpadding="0" cellspacing="0"><tr>' +
'<td valign="bottom">' +
'<div style="font-family:Arial Black,Arial,sans-serif;font-weight:900;font-size:48px;line-height:1;color:#fff;text-transform:uppercase;letter-spacing:-1px;">PROYECTO</div>' +
'<div style="font-family:Arial Black,Arial,sans-serif;font-weight:900;font-size:60px;line-height:1;color:#fff;text-transform:uppercase;letter-spacing:-1px;margin-top:-4px;">SOCIA</div>' +
'<div style="font-size:14px;color:rgba(255,255,255,.88);margin-top:8px;font-style:italic;">Un SOC en tu aula</div>' +
'</td>' +
'<td width="90" align="right" valign="middle">' +
'<img src="' + SOCIA_LOGO + '" width="80" height="80" alt="SOCIA" style="display:block;">' +
'</td>' +
'</tr>' +
'<tr><td colspan="2" style="padding-top:14px;">' +
'<table cellpadding="0" cellspacing="0"><tr><td style="background:rgba(0,0,0,.2);border:1px solid rgba(255,255,255,.22);border-radius:20px;padding:5px 14px;">' +
'<span style="color:rgba(255,255,255,.88);font-size:10px;font-weight:bold;letter-spacing:2.5px;text-transform:uppercase;">Jornadas Formativas &middot; Track Profesorado</span>' +
'</td></tr></table>' +
'</td></tr></table>' +
'</td></tr>' +

'<tr><td style="padding:28px 32px 16px;">' +
'<p style="font-size:17px;color:#1a1a1a;margin:0 0 10px;"><strong>Hola ' + primerNombre + ',</strong></p>' +
'<p style="color:#555;line-height:1.7;margin:0;font-size:14px;">Tu perfil VPN ha sido configurado para las Jornadas Formativas SOCIA. Con el podras acceder a los recursos de la red del centro desde cualquier dispositivo.</p>' +
'</td></tr>' +

'<tr><td style="padding:0 32px 16px;"><table width="100%" cellpadding="0" cellspacing="0"><tr>' +
'<td style="padding-right:10px;white-space:nowrap;"><span style="font-size:10px;font-weight:bold;color:#eb114b;letter-spacing:2.5px;text-transform:uppercase;">Tu perfil</span></td>' +
'<td style="border-bottom:1px solid #e8e8e8;">&nbsp;</td>' +
'</tr></table></td></tr>' +

'<tr><td style="padding:0 32px 24px;">' +
'<table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(235,17,75,.06);border-left:4px solid #eb114b;"><tr>' +
'<td style="padding:12px 18px;border-right:1px solid rgba(235,17,75,.15);">' +
'<div style="color:#eb114b;font-size:10px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:3px;">Perfil</div>' +
'<strong style="font-size:16px;color:#1a1a1a;">' + slot + '</strong>' +
'</td>' +
'<td style="padding:12px 18px;border-right:1px solid rgba(235,17,75,.15);">' +
'<div style="color:#eb114b;font-size:10px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:3px;">IP asignada</div>' +
'<strong style="font-size:16px;color:#1a1a1a;font-family:monospace;">' + ip + '</strong>' +
'</td>' +
'<td style="padding:12px 18px;">' +
'<div style="color:#eb114b;font-size:10px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:3px;">Centro</div>' +
'<strong style="font-size:13px;color:#1a1a1a;">' + (centro || '—') + '</strong>' +
'</td>' +
'</tr></table>' +
'</td></tr>' +

'<tr><td style="padding:0 32px 16px;"><table width="100%" cellpadding="0" cellspacing="0"><tr>' +
'<td style="padding-right:10px;white-space:nowrap;"><span style="font-size:10px;font-weight:bold;color:#eb114b;letter-spacing:2.5px;text-transform:uppercase;">Instalar en movil</span></td>' +
'<td style="border-bottom:1px solid #e8e8e8;">&nbsp;</td>' +
'</tr></table></td></tr>' +

'<tr><td style="padding:0 32px 24px;">' +
'<p style="color:#555;margin:0 0 16px;line-height:1.6;font-size:14px;">Instala <strong>WireGuard</strong> desde App Store o Google Play, abre la app, pulsa <strong>+</strong> y escanea este codigo QR:</p>' +
'<div style="text-align:center;">' +
'<img src="' + qrUrl + '" width="200" height="200" style="border:2px solid #eb114b;border-radius:8px;display:block;margin:0 auto;" alt="QR WireGuard"/>' +
'</div>' +
'<p style="color:#999;font-size:11px;text-align:center;margin:10px 0 0;">Si el QR no carga, usa el archivo <strong>' + slot + '.conf</strong> adjunto.</p>' +
'</td></tr>' +

'<tr><td style="padding:0 32px 16px;"><table width="100%" cellpadding="0" cellspacing="0"><tr>' +
'<td style="padding-right:10px;white-space:nowrap;"><span style="font-size:10px;font-weight:bold;color:#eb114b;letter-spacing:2.5px;text-transform:uppercase;">Instalar en ordenador</span></td>' +
'<td style="border-bottom:1px solid #e8e8e8;">&nbsp;</td>' +
'</tr></table></td></tr>' +

'<tr><td style="padding:0 32px 24px;">' +
'<table width="100%" cellpadding="0" cellspacing="0"><tr>' +
'<td width="48%" valign="top" style="padding-right:8px;">' +
'<div style="background:#fafafa;border-radius:4px;padding:16px;border-top:3px solid #eb114b;">' +
'<p style="margin:0 0 8px;font-weight:bold;color:#eb114b;font-size:11px;letter-spacing:1px;text-transform:uppercase;">Windows</p>' +
'<ol style="margin:0;padding-left:18px;color:#555;font-size:13px;line-height:1.9;">' +
'<li>Descarga <a href="https://www.wireguard.com/install/" style="color:#eb114b;">wireguard.com/install</a></li>' +
'<li>Abre WireGuard</li>' +
'<li>Clic en <em>Importar tunel desde archivo</em></li>' +
'<li>Selecciona <strong>' + slot + '.conf</strong></li>' +
'<li>Pulsa <strong>Activar</strong></li>' +
'</ol></div>' +
'</td>' +
'<td width="4%"></td>' +
'<td width="48%" valign="top" style="padding-left:8px;">' +
'<div style="background:#fafafa;border-radius:4px;padding:16px;border-top:3px solid #242d3d;">' +
'<p style="margin:0 0 8px;font-weight:bold;color:#242d3d;font-size:11px;letter-spacing:1px;text-transform:uppercase;">macOS</p>' +
'<ol style="margin:0;padding-left:18px;color:#555;font-size:13px;line-height:1.9;">' +
'<li>Instala <strong>WireGuard</strong> desde Mac App Store</li>' +
'<li>Abre WireGuard</li>' +
'<li>Clic en <em>Importar tunel(es) desde archivo</em></li>' +
'<li>Selecciona <strong>' + slot + '.conf</strong></li>' +
'<li>Pulsa <strong>Activar</strong></li>' +
'</ol></div>' +
'</td>' +
'</tr></table>' +
'</td></tr>' +

'<tr><td style="padding:0 32px 16px;"><table width="100%" cellpadding="0" cellspacing="0"><tr>' +
'<td style="padding-right:10px;white-space:nowrap;"><span style="font-size:10px;font-weight:bold;color:#eb114b;letter-spacing:2.5px;text-transform:uppercase;">Uso de la infraestructura</span></td>' +
'<td style="border-bottom:1px solid #e8e8e8;">&nbsp;</td>' +
'</tr></table></td></tr>' +

'<tr><td style="padding:0 32px 28px;">' +
CONFIG.INFRA_HTML +
'</td></tr>' +

'<tr><td style="background:#242d3d;padding:18px 32px;text-align:center;">' +
'<p style="color:#eb114b;font-size:10px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;margin:0 0 4px;">PROYECTO SOCIA &middot; IES Rafael Alberti</p>' +
'<p style="color:rgba(255,255,255,.5);font-size:11px;margin:0;">Este mensaje es automatico. Contacta con el equipo tecnico si tienes problemas de conexion.</p>' +
'</td></tr>' +

'</table></td></tr></table>' +
'</body></html>';
  }

};
