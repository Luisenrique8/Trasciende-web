/* Asistente guiado de Trasciende Technology (sin IA: respuestas fijas y paso a WhatsApp) */
(function () {
  "use strict";
  if (window.__asistenteTrasciende) return; window.__asistenteTrasciende = true;

  var SRC = (document.currentScript && document.currentScript.src) || "";
  var RAIZ = SRC.replace(/asistente\.js.*$/, "");
  var LOCAL = location.protocol === "file:";
  function pag(slug) { return RAIZ + "servicios/" + slug + "/" + (LOCAL ? "index.html" : ""); }
  function inicio(hash) { return RAIZ + (LOCAL ? "index.html" : "") + (hash || ""); }

  var TEL_T = "51971980366", TEL_S = "51971980366";
  function wa(texto, tel) { return "https://wa.me/" + (tel || TEL_T) + "?text=" + encodeURIComponent(texto); }

  // ===== Contenido =====
  // Cada nodo: m = mensajes del asistente; o = opciones [texto, destino]. Destino: id de nodo, o {url}, o {wa, tel}.
  var N = {
    inicio: { m: ["Hola, soy el asistente de Trasciende Technology.", "¿En qué te ayudo?"], o: [
      ["Quiero una página web", "web"], ["Quiero una app", "app"], ["Publicar mi app en las tiendas", "tiendas"],
      ["Formalizar mi negocio", "tramites"], ["Correo y redes para mi negocio", "arranque"],
      ["Seguridad y salud en el trabajo", "ssoma"], ["Soy una empresa grande", "empresa"],
      ["Precios", "precios"], ["Preguntas frecuentes", "faq"], ["Hablar con una persona", "persona"]] },

    web: { m: ["Hacemos webs que se ven bien en celular y computadora, con botón de WhatsApp, Google Maps, carta o catálogo con QR y formulario de contacto.",
               "El plan Web Negocio cuesta desde S/ 900 con IGV e incluye 1 año de dominio .pe. Está lista en unos 5 días hábiles desde que nos envías tus textos, fotos y logo."],
      o: [["¿Y si quiero hacerle cambios?", "aldia"], ["Ver la página del servicio", { url: pag("paginas-web") }],
          ["Cotizar por WhatsApp", { wa: "Hola Trasciende, quiero información sobre una página web para mi negocio" }], ["Volver al inicio", "inicio"]] },
    aldia: { m: ["Con el Plan Al día, desde S/ 60 al mes, nos encargamos del alojamiento y el dominio, hacemos cambios pequeños cada mes (precios, fotos, horarios), guardamos copias de seguridad y te damos soporte por WhatsApp."],
      o: [["Quiero el Plan Al día", { wa: "Hola Trasciende, quiero información sobre el Plan Al día" }], ["Volver a páginas web", "web"], ["Volver al inicio", "inicio"]] },

    app: { m: ["Llevamos tu idea a una app que la gente usa: registro y acceso con Google, base de datos en la nube, fotos, chat en tiempo real y avisos por correo. Funciona en la web, se instala en el celular y la publicamos en Google Play.",
               "La App a medida cuesta desde S/ 6,000 con IGV. El plazo depende de lo que necesites y te lo damos en la primera conversación, que es gratis."],
      o: [["¿Qué apps han hecho?", "cedelo"], ["Ver la página del servicio", { url: pag("apps-y-plataformas") }],
          ["Cotizar mi app", { wa: "Hola Trasciende, quiero cotizar una app" }], ["Volver al inicio", "inicio"]] },
    cedelo: { m: ["Hicimos Cédelo pe, una plataforma para donar, vender barato o intercambiar lo que ya no usas. Tiene chat en tiempo real, acceso con Google y base de datos en la nube.",
                  "Ya está en Google Play con cuenta de organización a nombre de la empresa, y la publicación en App Store está en trámite."],
      o: [["Ver el caso Cédelo", { url: inicio("#caso") }], ["Cotizar mi app", { wa: "Hola Trasciende, quiero cotizar una app" }], ["Volver al inicio", "inicio"]] },

    tiendas: { m: ["Publicamos tu app en Google Play y App Store: creamos la cuenta de organización a nombre de tu empresa, armamos la ficha con capturas, preparamos la política de privacidad y acompañamos la revisión hasta la aprobación.",
                   "Las tasas de las tiendas van aparte: Google Play cobra un pago único y Apple una membresía anual. Te detallamos los montos antes de empezar."],
      o: [["¿Necesito tener empresa?", "tiendas_empresa"], ["Ver la página del servicio", { url: pag("publicacion-en-tiendas") }],
          ["Cotizar por WhatsApp", { wa: "Hola Trasciende, quiero publicar mi app en las tiendas" }], ["Volver al inicio", "inicio"]] },
    tiendas_empresa: { m: ["Para una cuenta de organización, sí: la tienda verifica los datos de tu empresa. Si aún no la tienes, te ayudamos con el paquete Emprende en regla."],
      o: [["Formalizar mi negocio", "tramites"], ["Volver al inicio", "inicio"]] },

    tramites: { m: ["Con Emprende en regla te acompañamos en la constitución de tu empresa en SUNARP, registramos tu marca en INDECOPI, compramos tu dominio .pe con correo y dejamos lista tu cuenta de Google Play o Apple.",
                    "Cuesta desde S/ 500 con IGV, más las tasas oficiales (notaría, SUNARP, INDECOPI y registro del dominio), que te detallamos antes de empezar."],
      o: [["¿Necesito RUC antes?", "tramites_ruc"], ["Ver la página del servicio", { url: pag("tramites-para-emprender") }],
          ["Empezar por WhatsApp", { wa: "Hola Trasciende, quiero formalizar mi negocio" }], ["Volver al inicio", "inicio"]] },
    tramites_ruc: { m: ["No. La constitución de la empresa es el primer paso; el RUC viene después. También puedes contratar solo el trámite que necesites, por ejemplo solo la marca."],
      o: [["Empezar por WhatsApp", { wa: "Hola Trasciende, quiero formalizar mi negocio" }], ["Volver al inicio", "inicio"]] },

    arranque: { m: ["Con Arranque digital dejamos tu negocio conectado: correo con tu dominio, Facebook e Instagram ordenados, redes vinculadas y 4 publicaciones de lanzamiento.",
                    "El precio depende de tus cuentas y redes; te lo damos por escrito antes de empezar."],
      o: [["Ver la página del servicio", { url: pag("arranque-digital") }], ["Cotizar por WhatsApp", { wa: "Hola Trasciende, quiero información sobre Arranque digital" }], ["Volver al inicio", "inicio"]] },

    ssoma: { m: ["Ruta SSOMA es nuestra línea de seguridad y salud en el trabajo. Te ponemos en regla con SUNAFIL: documentos, capacitaciones e inspecciones.", "¿Qué necesitas?"],
      o: [["Que alguien se encargue cada mes", "ssoma_sup"], ["Implementar mi Sistema de Gestión SST", "ssoma_sg"], ["Capacitar a mi personal", "ssoma_cap"],
          ["Kits para hacerlo yo mismo", "ssoma_kits"], ["¿Estoy obligado?", "ssoma_ley"], ["Revisión gratis", { wa: "Hola, quiero una revisión gratis de SST para mi empresa", tel: TEL_S }],
          ["Volver al inicio", "inicio"]] },
    ssoma_sup: { m: ["Con el Supervisor SST externo, desde S/ 350 al mes, un especialista llena y ordena tus registros obligatorios, visita tu empresa una vez al mes, da una capacitación o charla mensual, mantiene tus indicadores y programa anual al día y te acompaña si llega SUNAFIL.",
                     "El precio final depende del número de trabajadores y del riesgo de tu actividad."],
      o: [["Cotizar", { wa: "Hola, quiero cotizar el servicio de Supervisor SST externo para mi empresa.", tel: TEL_S }], ["Ver Ruta SSOMA", { url: pag("ruta-ssoma") }], ["Volver a SSOMA", "ssoma"]] },
    ssoma_sg: { m: ["Implementamos tu Sistema de Gestión SST con los datos reales de tu empresa: política, IPERC, mapa de riesgos, programa anual, registros y reglamento. Solo firmas y aplicas.",
                    "Desde S/ 1,200 para microempresa y desde S/ 2,500 para pequeña empresa. El mapa de riesgos solo cuesta desde S/ 250."],
      o: [["Cotizar", { wa: "Hola, quiero cotizar la implementación del Sistema de Gestión SST.", tel: TEL_S }], ["Volver a SSOMA", "ssoma"]] },
    ssoma_cap: { m: ["La ley pide al menos 4 capacitaciones al año. Las damos con constancia para cada participante:",
                     "S/ 50 por persona y curso, virtual en vivo. S/ 450 por un curso de 2 horas en tu empresa, hasta 15 personas. S/ 1,500 por las 4 capacitaciones obligatorias del año, en tu empresa. Trabajos de alto riesgo: S/ 90 por persona."],
      o: [["Elegir cursos", { url: pag("ruta-ssoma") + "#capacitaciones" }], ["Cotizar por WhatsApp", { wa: "Hola, quiero cotizar capacitaciones de SST para mi empresa.", tel: TEL_S }], ["Volver a SSOMA", "ssoma"]] },
    ssoma_kits: { m: ["Tenemos kits editables que recibes hoy por WhatsApp y correo, desde S/ 29. El más completo es el Pack MYPE en regla, a S/ 179: Sistema de Gestión SST, registros obligatorios, Plan y Programa Anual 2027 y Kit Inspección SUNAFIL.",
                      "Ojo: un kit ahorra tiempo, pero debe completarlo y validarlo el responsable de SST."],
      o: [["Ver los kits", { url: pag("ruta-ssoma") + "#kits" }], ["Comprar el Pack MYPE", { wa: "Hola, quiero comprar: Pack MYPE en regla", tel: TEL_S }], ["Volver a SSOMA", "ssoma"]] },
    ssoma_ley: { m: ["Sí. La Ley 29783 aplica a todo empleador con al menos un trabajador, en cualquier rubro, y SUNAFIL puede fiscalizarlo. En minería se suma el DS 024-2016-EM y sus modificatorias."],
      o: [["Revisión gratis", { wa: "Hola, quiero una revisión gratis de SST para mi empresa", tel: TEL_S }], ["Volver a SSOMA", "ssoma"]] },

    empresa: { m: ["Sí trabajamos con empresas grandes. Para proyectos de mayor escala trabajamos con especificación técnica, cumplimiento normativo y SSOMA, integración con tus procesos y soporte continuo.",
                   "Se cotiza según el alcance. La primera conversación es gratis."],
      o: [["Conversar mi proyecto", { wa: "Hola Trasciende, quiero conversar un proyecto empresarial" }], ["Ver proyectos corporativos", { url: inicio("#capacidad") }], ["Volver al inicio", "inicio"]] },

    precios: { m: ["Estos son nuestros precios base, con IGV incluido:",
                   "Web Negocio: desde S/ 900. App a medida: desde S/ 6,000. Emprende en regla: desde S/ 500 más tasas oficiales. Plan Al día: desde S/ 60 al mes. Supervisor SST externo: desde S/ 350 al mes.",
                   "Los proyectos empresariales se cotizan según alcance. Siempre te damos el monto final por escrito antes de empezar."],
      o: [["Ver todos los precios", { url: inicio("#precios") }], ["Pedir una cotización", "persona"], ["Volver al inicio", "inicio"]] },

    faq: { m: ["¿Qué quieres saber?"], o: [
      ["¿Los precios incluyen IGV?", "f_igv"], ["¿El dominio queda a mi nombre?", "f_nombre"], ["No tengo empresa ni RUC", "f_ruc"],
      ["¿Atienden fuera de Cajamarca?", "f_lugar"], ["¿Cómo empezamos?", "f_pasos"], ["Volver al inicio", "inicio"]] },
    f_igv: { m: ["Sí. Los precios de los planes para pymes ya incluyen IGV, y te damos el monto final por escrito antes de empezar. Las tasas oficiales de trámites y tiendas van aparte."], o: [["Otra pregunta", "faq"], ["Volver al inicio", "inicio"]] },
    f_nombre: { m: ["Sí. El dominio y las cuentas de las tiendas se registran a nombre de tu negocio o de tu empresa."], o: [["Otra pregunta", "faq"], ["Volver al inicio", "inicio"]] },
    f_ruc: { m: ["Te ayudamos a formalizarte primero con el paquete Emprende en regla, o puedes empezar como persona natural."], o: [["Formalizar mi negocio", "tramites"], ["Otra pregunta", "faq"]] },
    f_lugar: { m: ["Sí. Trabajamos desde Cajamarca para todo el Perú. La asesoría SSOMA y las capacitaciones virtuales también funcionan en todo el país; las visitas presenciales fuera de Cajamarca ciudad se cotizan aparte."], o: [["Otra pregunta", "faq"], ["Volver al inicio", "inicio"]] },
    f_pasos: { m: ["Son cinco pasos: conversamos (sin costo), diseñamos y ves cómo quedará, construimos con avances que puedes revisar, publicamos en tu dominio y en las tiendas, y te acompañamos con el Plan Al día o soporte a medida."], o: [["Empezar ahora", "persona"], ["Otra pregunta", "faq"]] },

    persona: { m: ["Te paso con una persona del equipo por WhatsApp. ¿Sobre qué tema?"],
      o: [["Webs, apps o trámites", { wa: "Hola Trasciende, quiero información" }], ["Seguridad y salud (SSOMA)", { wa: "Hola, quiero información sobre Ruta SSOMA", tel: TEL_S }], ["Volver al inicio", "inicio"]] }
  };

  // Palabras clave para lo que la persona escribe
  var CLAVES = [
    [/sunafil|ssoma|\bsst\b|seguridad|salud ocup|capacita|iperc|pets|multa|kit|extintor|riesgo|29783|supervisor/i, "ssoma"],
    [/igv/i, "f_igv"],
    [/play|app ?store|tienda|publicar mi app/i, "tiendas"],
    [/\bapp|aplicaci|plataforma|sistema web/i, "app"],
    [/sunarp|indecopi|marca|\bruc\b|formaliz|constitu|empresa nueva|s\.?r\.?l|e\.?i\.?r\.?l/i, "tramites"],
    [/correo|facebook|instagram|redes|tiktok/i, "arranque"],
    [/web|p[aá]gina|sitio|dominio|cat[aá]logo|carta|men[uú]/i, "web"],
    [/precio|cu[aá]nto|costo|cuesta|tarifa|cobran/i, "precios"],
    [/c[eé]delo/i, "cedelo"],
    [/corporativ|empresa grande|minera|proyecto grande/i, "empresa"],
    [/persona|asesor|humano|llamar|whats/i, "persona"],
    [/hola|buen(os|as)/i, "inicio"]
  ];

  // ===== Estilos =====
  var css = `
.ast-btn{position:fixed;right:calc(20px + env(safe-area-inset-right,0px));bottom:calc(20px + env(safe-area-inset-bottom,0px));z-index:60;width:60px;height:60px;border-radius:50%;border:0;background:#2450E6;color:#fff;display:grid;place-items:center;cursor:pointer;box-shadow:0 14px 34px -10px rgba(36,80,230,.6);transition:transform .2s ease}
.ast-btn:hover{transform:scale(1.06)}
.ast-btn:focus-visible{outline:3px solid #9FB4FF;outline-offset:3px}
.ast-btn .ast-punto{position:absolute;top:4px;right:4px;width:14px;height:14px;border-radius:50%;background:#30C46B;border:2px solid #fff}
.ast-saludo{position:fixed;right:calc(92px + env(safe-area-inset-right,0px));bottom:calc(30px + env(safe-area-inset-bottom,0px));z-index:60;background:#fff;color:#14161C;border:1px solid #E6E6E9;border-radius:16px 16px 4px 16px;padding:10px 14px;font:500 14px/1.4 Inter,system-ui,sans-serif;box-shadow:0 14px 34px -14px rgba(20,22,28,.35);max-width:220px;cursor:pointer;opacity:0;transform:translateY(8px);transition:opacity .4s ease,transform .4s ease}
.ast-saludo.ver{opacity:1;transform:none}
.ast-panel{position:fixed;right:calc(20px + env(safe-area-inset-right,0px));bottom:calc(92px + env(safe-area-inset-bottom,0px));z-index:61;width:380px;max-width:calc(100vw - 32px);height:min(600px,calc(100vh - 120px));background:#FBFBFA;color:#14161C;border-radius:24px;box-shadow:0 30px 80px -20px rgba(20,22,28,.45);display:flex;flex-direction:column;overflow:hidden;font:15px/1.5 Inter,system-ui,sans-serif;transform-origin:100% 100%;opacity:0;transform:scale(.92) translateY(12px);pointer-events:none;transition:opacity .25s ease,transform .3s cubic-bezier(.2,.7,.2,1)}
.ast-panel.abierto{opacity:1;transform:none;pointer-events:auto}
@media(max-width:520px){.ast-panel{right:0;left:0;bottom:0;width:auto;max-width:none;height:min(86vh,640px);border-radius:24px 24px 0 0;padding-bottom:env(safe-area-inset-bottom,0px)}}
.ast-cab{display:flex;align-items:center;gap:12px;padding:16px 16px 14px 18px;background:#14161C;color:#F5F5F7}
.ast-cab .ast-logo{width:36px;height:36px;border-radius:10px;background:#2450E6;display:grid;place-items:center;flex:none}
.ast-cab b{display:block;font:600 16px/1.2 'Space Grotesk',system-ui,sans-serif}
.ast-cab small{display:flex;align-items:center;gap:6px;color:#B6B8C2;font-size:12.5px;margin-top:2px}
.ast-cab small i{width:7px;height:7px;border-radius:50%;background:#30C46B}
.ast-cerrar{margin-left:auto;width:36px;height:36px;border-radius:50%;border:0;background:#2A2D38;color:#fff;cursor:pointer;display:grid;place-items:center}
.ast-cerrar:focus-visible{outline:2px solid #9FB4FF}
.ast-log{flex:1;overflow-y:auto;padding:18px 16px 8px;display:flex;flex-direction:column;gap:8px;scroll-behavior:smooth}
.ast-msg{max-width:86%;padding:10px 14px;border-radius:18px;white-space:pre-line;animation:astIn .3s ease both}
.ast-bot{align-self:flex-start;background:#fff;border:1px solid #E6E6E9;border-bottom-left-radius:6px}
.ast-yo{align-self:flex-end;background:#2450E6;color:#fff;border-bottom-right-radius:6px}
.ast-escribe{align-self:flex-start;background:#fff;border:1px solid #E6E6E9;border-radius:18px;padding:12px 14px;display:flex;gap:4px}
.ast-escribe i{width:6px;height:6px;border-radius:50%;background:#9A9CA6;animation:astPunto 1s infinite}
.ast-escribe i:nth-child(2){animation-delay:.15s}.ast-escribe i:nth-child(3){animation-delay:.3s}
.ast-ops{display:flex;flex-wrap:wrap;gap:8px;margin:6px 0 4px;animation:astIn .3s ease both}
.ast-op{font:500 14px/1.3 Inter,system-ui,sans-serif;padding:9px 14px;border-radius:999px;border:1px solid #2450E6;background:#fff;color:#2450E6;cursor:pointer;text-align:left;text-decoration:none;display:inline-flex;align-items:center;gap:6px}
.ast-op:hover{background:#2450E6;color:#fff}
.ast-op:focus-visible{outline:2px solid #2450E6;outline-offset:2px}
.ast-op.wa{border-color:#1FA855;color:#14763D}
.ast-op.wa:hover{background:#1FA855;color:#fff}
.ast-op.sec{border-color:#D4D5DA;color:#55575F}
.ast-op.sec:hover{background:#ECECEF;color:#14161C}
.ast-form{display:flex;gap:8px;padding:10px 12px 12px;border-top:1px solid #E6E6E9;background:#fff}
.ast-form input{flex:1;min-width:0;font:15px Inter,system-ui,sans-serif;padding:11px 14px;border-radius:999px;border:1px solid #D4D5DA;background:#FBFBFA;color:#14161C}
.ast-form input:focus{outline:none;border-color:#2450E6}
.ast-form button{width:44px;height:44px;flex:none;border-radius:50%;border:0;background:#2450E6;color:#fff;cursor:pointer;display:grid;place-items:center}
.ast-nota{text-align:center;font-size:11.5px;color:#8A8C95;padding:0 12px 10px;background:#fff}
@keyframes astIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
@keyframes astPunto{0%,100%{opacity:.3}50%{opacity:1}}
@media(prefers-reduced-motion:reduce){.ast-panel,.ast-msg,.ast-ops,.ast-saludo{transition:none;animation:none}.ast-escribe i{animation:none}}
`;
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  // ===== Interfaz =====
  var ICO_CHAT = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/></svg>';
  var ICO_X = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
  var ICO_ENV = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
  var ICO_T = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 7h10M10 7v12"/><path d="M15 12l4-4M19 8v4M19 8h-4"/></svg>';

  var btn = document.createElement("button");
  btn.className = "ast-btn"; btn.type = "button"; btn.setAttribute("aria-label", "Abrir el asistente de Trasciende"); btn.setAttribute("aria-expanded", "false");
  btn.innerHTML = ICO_CHAT + '<span class="ast-punto" aria-hidden="true"></span>';

  var saludo = document.createElement("div");
  saludo.className = "ast-saludo"; saludo.textContent = "¿Tienes una pregunta? Te ayudo en segundos.";

  var panel = document.createElement("div");
  panel.className = "ast-panel"; panel.setAttribute("role", "dialog"); panel.setAttribute("aria-label", "Asistente de Trasciende");
  panel.innerHTML =
    '<div class="ast-cab"><span class="ast-logo">' + ICO_T + '</span><div><b>Asistente Trasciende</b><small><i></i>Responde al instante</small></div>' +
    '<button class="ast-cerrar" type="button" aria-label="Cerrar el asistente">' + ICO_X + '</button></div>' +
    '<div class="ast-log" aria-live="polite"></div>' +
    '<form class="ast-form" autocomplete="off"><input type="text" name="q" placeholder="Escribe tu pregunta…" aria-label="Escribe tu pregunta" maxlength="300"><button type="submit" aria-label="Enviar">' + ICO_ENV + '</button></form>' +
    '<div class="ast-nota">Asistente automático. Para cotizar te pasamos a WhatsApp.</div>';

  document.body.appendChild(saludo); document.body.appendChild(panel); document.body.appendChild(btn);
  var wf = document.querySelector(".wa-flotante"); if (wf) wf.style.display = "none";

  var log = panel.querySelector(".ast-log"), form = panel.querySelector(".ast-form"), input = form.querySelector("input");
  var reducido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var iniciado = false, abierto = false;

  function bajar() { log.scrollTop = log.scrollHeight; }
  function burbuja(txt, quien) { var d = document.createElement("div"); d.className = "ast-msg " + (quien === "yo" ? "ast-yo" : "ast-bot"); d.textContent = txt; log.appendChild(d); bajar(); }
  function limpiarOps() { log.querySelectorAll(".ast-ops").forEach(function (o) { o.remove(); }); }

  function opciones(lista) {
    var c = document.createElement("div"); c.className = "ast-ops";
    lista.forEach(function (op) {
      var t = op[0], dst = op[1], el;
      if (typeof dst === "string") {
        el = document.createElement("button"); el.type = "button"; el.className = "ast-op" + (/^Volver|^Otra/.test(t) ? " sec" : "");
        el.textContent = t; el.addEventListener("click", function () { burbuja(t, "yo"); ir(dst); });
      } else {
        el = document.createElement("a"); el.className = "ast-op" + (dst.wa ? " wa" : "");
        el.textContent = t + (dst.wa ? "" : " ›");
        el.href = dst.wa ? wa(dst.wa, dst.tel) : dst.url;
        if (dst.wa) { el.target = "_blank"; el.rel = "noopener"; }
      }
      c.appendChild(el);
    });
    log.appendChild(c); bajar();
  }

  function ir(id) {
    var n = N[id] || N.inicio; limpiarOps();
    var msgs = n.m.slice(), i = 0;
    (function sig() {
      if (i >= msgs.length) { opciones(n.o); return; }
      if (reducido) { burbuja(msgs[i++]); sig(); return; }
      var e = document.createElement("div"); e.className = "ast-escribe"; e.innerHTML = "<i></i><i></i><i></i>"; log.appendChild(e); bajar();
      setTimeout(function () { e.remove(); burbuja(msgs[i++]); sig(); }, Math.min(900, 350 + msgs[i].length * 4));
    })();
  }

  function entender(q) {
    for (var k = 0; k < CLAVES.length; k++) if (CLAVES[k][0].test(q)) return CLAVES[k][1];
    return null;
  }

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var q = input.value.trim(); if (!q) return;
    input.value = ""; burbuja(q, "yo");
    var id = entender(q);
    if (id) { ir(id); return; }
    limpiarOps();
    var tel = /ssoma|sst|sunafil/i.test(location.pathname) ? TEL_S : TEL_T;
    setTimeout(function () {
      burbuja("No tengo una respuesta exacta para eso, pero una persona del equipo sí. Te dejo tu pregunta lista para enviarla por WhatsApp.");
      opciones([["Enviar mi pregunta por WhatsApp", { wa: "Hola, tengo una consulta: " + q, tel: tel }], ["Ver los temas", "inicio"]]);
    }, reducido ? 0 : 500);
  });

  function primerNodo() {
    var p = location.pathname;
    if (/ruta-ssoma/.test(p)) return "ssoma";
    if (/paginas-web/.test(p)) return "web";
    if (/apps-y-plataformas/.test(p)) return "app";
    if (/publicacion-en-tiendas/.test(p)) return "tiendas";
    if (/tramites-para-emprender/.test(p)) return "tramites";
    if (/arranque-digital/.test(p)) return "arranque";
    return "inicio";
  }

  function abrir() {
    abierto = true; panel.classList.add("abierto"); btn.setAttribute("aria-expanded", "true"); btn.innerHTML = ICO_X;
    saludo.classList.remove("ver"); saludo.style.display = "none";
    if (!iniciado) {
      iniciado = true; var p = primerNodo();
      if (p === "inicio") ir("inicio");
      else { burbuja("Hola, soy el asistente de Trasciende Technology. Veo que estás viendo este servicio:"); ir(p); }
    }
    if (!window.matchMedia('(pointer: coarse)').matches) setTimeout(function () { input.focus({ preventScroll: true }); }, 200);
    else setTimeout(function () { panel.querySelector('.ast-cerrar').focus({ preventScroll: true }); }, 200);
  }
  function cerrar() {
    abierto = false; panel.classList.remove("abierto"); btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = ICO_CHAT; btn.focus();
  }
  btn.addEventListener("click", function () { abierto ? cerrar() : abrir(); });
  saludo.addEventListener("click", abrir);
  panel.querySelector(".ast-cerrar").addEventListener("click", cerrar);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && abierto) cerrar(); });

  // Saludo breve a los 6 segundos, una sola vez por visita
  var visto = false; try { visto = sessionStorage.getItem("astSaludo") === "1"; } catch (e) {}
  if (!visto) setTimeout(function () { if (!abierto) { saludo.classList.add("ver"); try { sessionStorage.setItem("astSaludo", "1"); } catch (e) {} setTimeout(function () { saludo.classList.remove("ver"); }, 7000); } }, 6000);
})();
