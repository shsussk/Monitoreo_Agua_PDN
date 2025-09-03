// ----- CONFIGURACIÓN ----- //
const SOURCES = ["Canal Mayor", "Drenaje Almonte", "Laguna Reservorio"];
const PARAMETERS = [
    {key: "ph", label: "pH", unit: "", min: 0, max: 14},
    {key: "ce", label: "CE", unit: "µS/cm"},
    {key: "tds", label: "TDS", unit: "ppm"},
    {key: "temperatura", label: "Temperatura", unit: "°C"},
    {key: "orp", label: "ORP", unit: "mV"},
    {key: "lluvia", label: "Lluvia 15d", unit: "mm"},
    {key: "caudal", label: "Caudal", unit: "L/s"}
];
// Umbrales para alertas (ajusta aquí si lo necesitas)
const THRESHOLDS = {
    ph:    {ok: [6.5, 8.5], watch: [6.0, 9.0]},
    ce:    {ok: [0, 800],  watch: [0, 1500]},
    tds:   {ok: [0, 500],  watch: [0, 1000]},
    temperatura: {ok: [18, 30], watch: [15, 34]},
    orp:   {ok: [50, Infinity], watch: [0, 49]}
};

// ----- LOCAL STORAGE ----- //
function getData() {
    return JSON.parse(localStorage.getItem("waterData") || "[]");
}
function saveData(data) {
    localStorage.setItem("waterData", JSON.stringify(data));
}

// ----- PANEL DE CONTROL ----- //
function updateMiniCards() {
    const data = getData();
    let cards = "";
    SOURCES.forEach(src => {
        const srcData = data.filter(d => d.source === src);
        let last = srcData.length ? srcData[srcData.length-1] : null;
        if (!last) {
            cards += `<div class="miniCard">${src}<br><b>Sin datos</b></div>`;
            return;
        }
        // Determinar estado general por CE, pH, ORP
        let ceStat = getStatus("ce", +last.ce);
        let phStat = getStatus("ph", +last.ph);
        let orpStat = getStatus("orp", +last.orp);
        let estado = ceStat === "alert" || orpStat === "alert" ? "alert" :
                     (ceStat === "watch" || phStat === "watch" || orpStat === "watch" ? "watch" : "ok");
        let color = estado === "ok" ? "#28a745" : (estado === "watch" ? "#ffc107" : "#dc3545");
        cards += `
        <div class="miniCard" style="background:${color}22;">
            <div><b>${src}</b></div>
            <div>CE: ${last.ce} µS/cm (${ceStat})</div>
            <div>pH: ${last.ph} (${phStat})</div>
            <div>ORP: ${last.orp} mV (${orpStat})</div>
            <div><small>${last.datetime.replace("T"," ")}</small></div>
        </div>`;
    });
    document.getElementById("miniCards").innerHTML = cards;
}

// ----- FORMULARIO ----- //
document.getElementById("waterForm").onsubmit = function(ev) {
    ev.preventDefault();
    const formdata = new FormData(this);
    let entry = {};
    for (let f of formdata.entries()) {
        entry[f[0]] = f[1];
    }
    entry.ce   = +entry.ce;
    entry.ph   = +entry.ph;
    entry.tds  = +entry.tds;
    entry.temperatura = +entry.temperatura;
    entry.orp  = +entry.orp;
    entry.lluvia = +entry.lluvia;
    entry.caudal = +entry.caudal;
    let data = getData();
    data.push(entry);
    saveData(data);
    this.reset();
    updateMiniCards();
    updateTrendUI();
    updateAlerts();
    updateSmallMultiples();
    alert("¡Medición guardada!");
    showSection('dashboard');
    return false;
}

// ----- NAVEGACIÓN ENTRE SECCIONES ----- //
function showSection(sec) {
    document.querySelectorAll('.app-section').forEach(e=>e.style.display="none");
    document.getElementById(sec).style.display = "";
}

// ----- UMRALES Y ESTADO ----- //
function getStatus(key, value) {
    const t = THRESHOLDS[key];
    if (!t) return "ok";
    if (key==="orp") {
        if (value < 0) return "alert";
        if (value < t.ok[0]) return "watch";
        return "ok";
    }
    if (key==="ph") {
        if (value < t.watch[0] || value > t.watch[1]) return "alert";
        if (value < t.ok[0] || value > t.ok[1]) return "watch";
        return "ok";
    }
    if (t.ok && t.ok[1]!==undefined && value > t.ok[1]) { // upper bound
        if (t.watch && value > t.watch[1]) return "alert";
        return "watch";
    }
    if (t.ok && t.ok[0]!==undefined && value < t.ok[0]) { // lower bound
        if (t.watch && value < t.watch[0]) return "alert";
        return "watch";
    }
    return "ok";
}

// ----- GRÁFICOS DE TENDENCIA ----- //
let trendChart;
function updateTrendUI() {
    // actualiza el selector de fuente y parámetro, si no existen
    let sSel = document.getElementById("trendSource");
    let pSel = document.getElementById("trendParameter");
    if (!sSel.children.length) {
        SOURCES.forEach(src => {
            let op = document.createElement("option"); op.value=src; op.textContent=src; sSel.appendChild(op);
        });
    }
    if (!pSel.children.length) {
        PARAMETERS.forEach(p => {
            let op = document.createElement("option"); op.value=p.key; op.textContent=p.label; pSel.appendChild(op);
        });
    }
    sSel.onchange = pSel.onchange = drawTrendChart;
    drawTrendChart();
}

function drawTrendChart() {
    let src = document.getElementById("trendSource").value;
    let param = document.getElementById("trendParameter").value;
    let data = getData().filter(d => d.source === src);
    let labels = data.map(d=>d.datetime.replace("T", " "));
    let values = data.map(d=>d[param]);
    let config = {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: PARAMETERS.find(p=>p.key===param).label,
                data: values,
                borderColor: "#28a745",
                backgroundColor: "#28a74533",
                fill: false
            }]
        },
        options: {
            plugins: {
                legend: { display: true }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    };
    if (trendChart) trendChart.destroy();
    let ctx = document.getElementById("trendChart").getContext("2d");
    trendChart = new Chart(ctx, config);
}

// ----- GRÁFICOS DE RELACIÓN ENTRE VARIABLES (extra) ----- //
// Ejemplo: CE vs TDS por fuente (puedes adaptar a otras variables)
function drawRelationChart(xvar, yvar, src, id) {
    let data = getData().filter(d=>d.source===src);
    let x = data.map(d=>d[xvar]);
    let y = data.map(d=>d[yvar]);
    let chartDiv = document.getElementById(id);
    chartDiv.innerHTML = `<canvas width="320" height="160"></canvas>`;
    let ctx = chartDiv.firstChild.getContext("2d");
    new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: src + ": " + xvar+" vs "+yvar,
                data: x.map((xi, i)=>({x: xi, y: y[i]})),
                backgroundColor: "rgba(41,150,161,0.7)"
            }]
        },
        options: {
            plugins: { legend: { display: true }},
            scales: { x: { title:{display:true,text:xvar} }, y: { title: {display:true,text:yvar}} }
        }
    });
}

// ----- MULTIGRÁFICOS POR PARÁMETROS (small multiples) ----- //
function updateSmallMultiples() {
    let div = document.getElementById("smallMultiples");
    div.innerHTML = "";
    SOURCES.forEach(src => {
        PARAMETERS.forEach(p => {
            let id = `sm-${src.replace(/\s/g,'')}-${p.key}`;
            div.innerHTML += `<div style="display:inline-block;width:300px;padding:3px 9px">
                <b>${src} - ${p.label}</b>
                <div id="${id}" style="width:280px;height:100px"></div>
            </div>`;
            setTimeout(()=>{
                drawMiniChart(src, p.key, id);
            },1);
        });
    });
}
function drawMiniChart(src, key, id) {
    let data = getData().filter(d=>d.source===src);
    let labels = data.map(d=>d.datetime.slice(5,16).replace("T"," "));
    let values = data.map(d=>d[key]);
    let div = document.getElementById(id);
    if (!div) return;
    div.innerHTML = `<canvas width="260" height="80"></canvas>`;
    let ctx = div.firstChild.getContext("2d");
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: key, data: values,
                borderColor: "#2680ff", pointRadius:2, fill:false
            }]
        },
        options: {plugins:{legend:{display:false}},scales:{x:{ticks:{autoSkip:true,maxTicksLimit:5}},y:{beginAtZero:true}}}
    });
}

// ----- ALERTAS ----- //
function updateAlerts() {
    let div = document.getElementById("alertsTable");
    let data = getData();
    let rows = [`<tr>
    <th>Fecha</th><th>Fuente</th>${PARAMETERS.map(p=>`<th>${p.label}</th>`).join("")}<th>Estado</th>
    </tr>`];
    data.forEach(d=>{
        let ceStat = getStatus("ce", d.ce), phStat = getStatus("ph", d.ph), orpStat = getStatus("orp", d.orp);
        let estado = ceStat === "alert" || orpStat === "alert"
                      ? "ALERTA"
                      : (ceStat === "watch" || phStat === "watch" || orpStat === "watch"
                         ? "VIGILANCIA" : "OK");
        let col = estado === "ALERTA"? "#dc3545cc" : estado==="VIGILANCIA"?"#ffc107cc":"#28a745cc";
        rows.push(`<tr style="background:${col}">
        <td>${d.datetime.replace("T"," ")}</td>
        <td>${d.source}</td>
        ${PARAMETERS.map(p=>`<td>${d[p.key]}</td>`).join("")}
        <td><b>${estado}</b></td>
        </tr>`);
    });
    div.innerHTML = `<table>${rows.join("")}</table>`;
}

// ----- INICIALIZACIÓN AL CARGAR ----- //
window.onload = function() {
    updateMiniCards();
    updateTrendUI();
    updateSmallMultiples();
    updateAlerts();
    // Navegación default
    showSection('dashboard');
};

