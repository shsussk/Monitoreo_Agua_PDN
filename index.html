<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Monitor de Calidad del Agua</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #1a73e8;
            --primary-light: #e8f0fe;
            --secondary: #34a853;
            --warning: #f9ab00;
            --danger: #ea4335;
            --light: #f8f9fa;
            --dark: #202124;
            --gray: #5f6368;
            --border: #dadce0;
            --ok: #d4edda;
            --ok-dark: #155724;
            --watch: #fff3cd;
            --watch-dark: #856404;
            --alert: #f8d7da;
            --alert-dark: #721c24;
            --water: #1a73e8;
            --water-light: #e3f2fd;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background: linear-gradient(135deg, #e3f2fd 0%, #f5f7fa 100%);
            color: var(--dark);
            line-height: 1.6;
            min-height: 100vh;
        }

        header {
            background: linear-gradient(135deg, var(--primary) 0%, #0066cc 100%);
            color: white;
            padding: 1rem;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .header-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        h1 {
            font-size: 1.8rem;
            margin-bottom: 1rem;
            text-align: center;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        h1 i {
            font-size: 2rem;
        }

        nav {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            justify-content: center;
            width: 100%;
        }

        nav button {
            background-color: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        nav button:hover {
            background-color: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
        }

        nav button.active {
            background-color: rgba(255, 255, 255, 0.4);
            font-weight: bold;
        }

        main {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1.5rem 1rem;
        }

        .app-section {
            background-color: white;
            border-radius: 12px;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
            animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        h2 {
            color: var(--primary);
            margin-bottom: 1.5rem;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid var(--primary-light);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        h3 {
            margin: 1.5rem 0 1rem;
            color: var(--gray);
        }

        /* Mini Cards */
        #miniCards {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.2rem;
        }

        .miniCard {
            padding: 1.2rem;
            border-radius: 10px;
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.08);
            transition: all 0.3s;
            border-left: 4px solid var(--primary);
            position: relative;
        }

        .miniCard:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
        }

        .miniCard b {
            font-size: 1.1rem;
            display: block;
            margin-bottom: 0.8rem;
            color: var(--primary);
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .miniCard b .status-indicator {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            display: inline-block;
        }

        .miniCard div {
            margin-bottom: 0.5rem;
            display: flex;
            justify-content: space-between;
        }

        .miniCard small {
            color: var(--gray);
            display: block;
            text-align: right;
            margin-top: 0.5rem;
        }

        /* Formulario */
        #waterForm {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.2rem;
        }

        label {
            display: block;
            margin-bottom: 0.8rem;
            font-weight: 500;
            color: var(--dark);
        }

        input, select, textarea {
            width: 100%;
            padding: 0.85rem;
            border: 1px solid var(--border);
            border-radius: 6px;
            font-size: 1rem;
            margin-top: 0.4rem;
            transition: all 0.3s;
        }

        input:focus, select:focus, textarea:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(26, 115, 232, 0.2);
        }

        button[type="submit"] {
            background: linear-gradient(135deg, var(--primary) 0%, #0d62d9 100%);
            color: white;
            border: none;
            padding: 0.85rem 1.8rem;
            border-radius: 6px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 500;
            grid-column: 1 / -1;
            justify-self: start;
            margin-top: 1rem;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        button[type="submit"]:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(26, 115, 232, 0.3);
        }

        /* Tendencias */
        .trend-controls {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
            flex-wrap: wrap;
        }

        #trendSource, #trendParameter {
            padding: 0.75rem;
            border: 1px solid var(--border);
            border-radius: 6px;
            min-width: 200px;
            background-color: white;
        }

        #trendChart {
            width: 100% !important;
            max-height: 400px;
            margin-bottom: 2rem;
        }

        #smallMultiples {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
        }

        .small-multiple {
            background: white;
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }

        /* Alertas */
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
        }

        th, td {
            padding: 0.85rem;
            text-align: left;
            border-bottom: 1px solid var(--border);
        }

        th {
            background-color: var(--primary-light);
            color: var(--primary);
            font-weight: 600;
            position: sticky;
            top: 0;
        }

        tr:hover {
            background-color: #f5f5f5;
        }

        /* Configuración */
        #thresholdsForm {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.2rem;
        }

        .threshold-item {
            padding: 1.2rem;
            border: 1px solid var(--border);
            border-radius: 8px;
            background-color: var(--light);
        }

        .threshold-item h3 {
            margin-top: 0;
            color: var(--primary);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        /* Estados */
        .ok { 
            background-color: var(--ok); 
            color: var(--ok-dark);
            border-left: 4px solid var(--ok-dark);
        }
        .watch { 
            background-color: var(--watch); 
            color: var(--watch-dark);
            border-left: 4px solid var(--watch-dark);
        }
        .alert { 
            background-color: var(--alert); 
            color: var(--alert-dark);
            border-left: 4px solid var(--alert-dark);
        }

        .status-badge {
            display: inline-block;
            padding: 0.3rem 0.7rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }

        .status-ok {
            background-color: var(--ok-dark);
            color: white;
        }

        .status-watch {
            background-color: var(--watch-dark);
            color: white;
        }

        .status-alert {
            background-color: var(--alert-dark);
            color: white;
        }

        /* Botones de acción */
        .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 500;
            transition: all 0.3s;
        }

        .btn-danger {
            background-color: var(--danger);
            color: white;
        }

        .btn-danger:hover {
            background-color: #c82333;
            transform: translateY(-2px);
        }

        .btn-edit {
            background-color: var(--warning);
            color: white;
        }

        .btn-edit:hover {
            background-color: #e0a800;
            transform: translateY(-2px);
        }

        .btn-save {
            background-color: var(--secondary);
            color: white;
        }

        .btn-save:hover {
            background-color: #28a745;
            transform: translateY(-2px);
        }

        .action-buttons {
            display: flex;
            gap: 0.5rem;
            margin-top: 1.5rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
            #waterForm, #miniCards, #smallMultiples, #thresholdsForm {
                grid-template-columns: 1fr;
            }
            
            nav {
                flex-direction: column;
            }
            
            nav button {
                width: 100%;
                margin-bottom: 0.5rem;
                justify-content: center;
            }

            .trend-controls {
                flex-direction: column;
            }

            #trendSource, #trendParameter {
                width: 100%;
            }

            .action-buttons {
                flex-direction: column;
            }
        }

        /* Utilidades */
        .hidden {
            display: none;
        }

        .card-value {
            font-weight: 600;
        }

        /* Notificaciones */
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem;
            border-radius: 6px;
            color: white;
            background-color: var(--secondary);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        }

        .notification.show {
            transform: translateX(0);
        }

        .notification.error {
            background-color: var(--danger);
        }

        /* Modal */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 1000;
            justify-content: center;
            align-items: center;
        }

        .modal-content {
            background-color: white;
            padding: 2rem;
            border-radius: 10px;
            width: 90%;
            max-width: 500px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .modal-buttons {
            display: flex;
            justify-content: flex-end;
            gap: 1rem;
            margin-top: 1.5rem;
        }
    </style>
</head>
<body>
    <header>
        <div class="header-container">
            <h1><i class="fas fa-tint"></i> Monitor de Calidad del Agua</h1>
            <nav>
                <button data-target="dashboard" class="active"><i class="fas fa-chart-line"></i> Panel</button>
                <button data-target="formulario"><i class="fas fa-pencil-alt"></i> Formulario</button>
                <button data-target="tendencias"><i class="fas fa-chart-area"></i> Tendencias</button>
                <button data-target="alertas"><i class="fas fa-bell"></i> Alertas</button>
                <button data-target="configuracion"><i class="fas fa-cog"></i> Configuración</button>
            </nav>
        </div>
    </header>

    <!-- Panel -->
    <main>
        <section id="dashboard" class="app-section">
            <h2><i class="fas fa-chart-line"></i> Estado Actual</h2>
            <div id="miniCards"></div>
        </section>

        <!-- Formulario -->
        <section id="formulario" class="app-section hidden">
            <h2><i class="fas fa-pencil-alt"></i> Registrar nueva medición</h2>
            <form id="waterForm">
                <label><i class="fas fa-calendar-alt"></i> Fecha y hora <input type="datetime-local" name="datetime" required></label>
                <label><i class="fas fa-water"></i> Fuente
                  <select name="source" required>
                    <option value="Canal Mayor">Canal Mayor</option>
                    <option value="Drenaje Almonte">Drenaje Almonte</option>
                    <option value="Laguna Reservorio">Laguna Reservorio</option>
                  </select>
                </label>
                <label><i class="fas fa-vial"></i> pH <input type="number" step="0.1" name="ph" min="0" max="14" required></label>
                <label><i class="fas fa-bolt"></i> CE (µS/cm) <input type="number" name="ce" required></label>
                <label><i class="fas fa-tint"></i> TDS (ppm) <input type="number" name="tds" required></label>
                <label><i class="fas fa-thermometer-half"></i> Temperatura (°C) <input type="number" step="0.1" name="temperatura" required></label>
                <label><i class="fas fa-bolt"></i> ORP (mV) <input type="number" name="orp" required></label>
                <label><i class="fas fa-cloud-rain"></i> Lluvia 15d (mm) <input type="number" step="0.1" name="lluvia" required></label>
                <label><i class="fas fa-wind"></i> Caudal (L/s) <input type="number" step="0.1" name="caudal" required></label>
                <label><i class="fas fa-sticky-note"></i> Notas de campo <textarea name="notas" rows="2"></textarea></label>
                <button type="submit"><i class="fas fa-save"></i> Guardar medición</button>
            </form>
        </section>

        <!-- Tendencias -->
        <section id="tendencias" class="app-section hidden">
            <h2><i class="fas fa-chart-area"></i> Tendencias por Parámetro</h2>
            <div class="trend-controls">
                <select id="trendSource"></select>
                <select id="trendParameter"></select>
            </div>
            <canvas id="trendChart" width="400" height="180"></canvas>
            <h3><i class="fas fa-chart-bar"></i> Gráficos múltiples</h3>
            <div id="smallMultiples"></div>
        </section>

        <!-- Alertas -->
        <section id="alertas" class="app-section hidden">
            <h2><i class="fas fa-bell"></i> Alertas</h2>
            <div id="alertsTable"></div>
            <div class="action-buttons">
                <button class="btn btn-danger" onclick="showClearDataModal()">
                    <i class="fas fa-trash"></i> Borrar todos los datos
                </button>
            </div>
        </section>

        <!-- Configuración -->
        <section id="configuracion" class="app-section hidden">
            <h2><i class="fas fa-cog"></i> Umbrales de parámetros</h2>
            <form id="thresholdsForm"></form>
            <div class="action-buttons">
                <button class="btn btn-save" onclick="saveThresholds()">
                    <i class="fas fa-save"></i> Guardar umbrales
                </button>
                <button class="btn btn-edit" onclick="resetThresholds()">
                    <i class="fas fa-undo"></i> Restablecer valores por defecto
                </button>
            </div>
        </section>
    </main>

    <!-- Modal para confirmar borrado de datos -->
    <div id="clearDataModal" class="modal">
        <div class="modal-content">
            <h2><i class="fas fa-exclamation-triangle"></i> Confirmar borrado</h2>
            <p>¿Estás seguro de que deseas borrar todos los datos? Esta acción no se puede deshacer.</p>
            <div class="modal-buttons">
                <button class="btn" onclick="hideClearDataModal()">Cancelar</button>
                <button class="btn btn-danger" onclick="clearAllData()">Borrar todo</button>
            </div>
        </div>
    </div>

    <div id="notification" class="notification hidden">
        <i class="fas fa-check-circle"></i>
        <span id="notification-text"></span>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
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
        
        // Umbrales por defecto para alertas
        const DEFAULT_THRESHOLDS = {
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
        
        function getThresholds() {
            const thresholds = localStorage.getItem("waterThresholds");
            return thresholds ? JSON.parse(thresholds) : DEFAULT_THRESHOLDS;
        }
        
        function saveThresholdsToStorage(thresholds) {
            localStorage.setItem("waterThresholds", JSON.stringify(thresholds));
        }

        // ----- NOTIFICACIONES ----- //
        function showNotification(message, isError = false) {
            const notification = document.getElementById('notification');
            const text = document.getElementById('notification-text');
            
            text.textContent = message;
            notification.className = isError ? 'notification error' : 'notification';
            notification.classList.remove('hidden');
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => notification.classList.add('hidden'), 300);
            }, 3000);
        }

        // ----- NAVEGACIÓN ENTRE SECCIONES ----- //
        function showSection(sec) {
            document.querySelectorAll('.app-section').forEach(e => e.classList.add('hidden'));
            document.getElementById(sec).classList.remove('hidden');
            
            // Actualizar botones de navegación
            document.querySelectorAll('nav button').forEach(btn => {
                btn.classList.remove('active');
            });
            document.querySelector(`nav button[data-target="${sec}"]`).classList.add('active');
            
            // Scroll to top
            window.scrollTo(0, 0);
        }

        // Asignar eventos a los botones de navegación
        document.querySelectorAll('nav button').forEach(button => {
            button.addEventListener('click', () => {
                showSection(button.getAttribute('data-target'));
            });
        });

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
                
                // Icono según el estado
                let icon = estado === "ok" ? "fa-check-circle" : (estado === "watch" ? "fa-exclamation-triangle" : "fa-exclamation-circle");
                
                cards += `
                <div class="miniCard ${estado}">
                    <b>${src} <i class="fas ${icon}"></i></b>
                    <div>CE: <span class="card-value">${last.ce} µS/cm</span> <span class="status-badge status-${ceStat}">${ceStat}</span></div>
                    <div>pH: <span class="card-value">${last.ph}</span> <span class="status-badge status-${phStat}">${phStat}</span></div>
                    <div>ORP: <span class="card-value">${last.orp} mV</span> <span class="status-badge status-${orpStat}">${orpStat}</span></div>
                    <small><i class="far fa-clock"></i> ${last.datetime.replace("T"," ")}</small>
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
            showNotification("¡Medición guardada correctamente!");
            showSection('dashboard');
            return false;
        }

        // ----- UMBRALES Y ESTADO ----- //
        function getStatus(key, value) {
            const thresholds = getThresholds();
            const t = thresholds[key];
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
                    let op = document.createElement("option"); 
                    op.value = src; 
                    op.textContent = src; 
                    sSel.appendChild(op);
                });
            }
            if (!pSel.children.length) {
                PARAMETERS.forEach(p => {
                    let op = document.createElement("option"); 
                    op.value = p.key; 
                    op.textContent = p.label; 
                    pSel.appendChild(op);
                });
            }
            sSel.onchange = pSel.onchange = drawTrendChart;
            drawTrendChart();
        }

        function drawTrendChart() {
            let src = document.getElementById("trendSource").value;
            let param = document.getElementById("trendParameter").value;
            let data = getData().filter(d => d.source === src);
            
            if (data.length === 0) {
                document.getElementById("trendChart").getContext('2d').clearRect(0, 0, 400, 180);
                return;
            }
            
            let labels = data.map(d => {
                const date = new Date(d.datetime);
                return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            });
            
            let values = data.map(d => d[param]);
            let config = {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: PARAMETERS.find(p => p.key === param).label + ' (' + PARAMETERS.find(p => p.key === param).unit + ')',
                        data: values,
                        borderColor: "#1a73e8",
                        backgroundColor: "rgba(26, 115, 232, 0.1)",
                        fill: true,
                        tension: 0.3,
                        pointBackgroundColor: "#1a73e8",
                        pointBorderColor: "#fff",
                        pointRadius: 4,
                        pointHoverRadius: 6
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { 
                            display: true,
                            position: 'top'
                        },
                        tooltip: {
                            mode: 'index',
                            intersect: false
                        }
                    },
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: true,
                                text: 'Fecha y Hora'
                            }
                        },
                        y: {
                            display: true,
                            title: {
                                display: true,
                                text: PARAMETERS.find(p => p.key === param).unit
                            }
                        }
                    }
                }
            };
            
            if (trendChart) trendChart.destroy();
            let ctx = document.getElementById("trendChart").getContext("2d");
            trendChart = new Chart(ctx, config);
        }

        // ----- MULTIGRÁFICOS POR PARÁMETROS (small multiples) ----- //
        function updateSmallMultiples() {
            let div = document.getElementById("smallMultiples");
            div.innerHTML = "";
            
            SOURCES.forEach(src => {
                PARAMETERS.forEach(p => {
                    let id = `sm-${src.replace(/\s/g,'')}-${p.key}`;
                    div.innerHTML += `
                    <div class="small-multiple">
                        <h4>${src} - ${p.label}</h4>
                        <div id="${id}" style="height: 200px;"></div>
                    </div>`;
                });
            });
            
            // Dibujar mini gráficos después de un pequeño retraso
            setTimeout(() => {
                SOURCES.forEach(src => {
                    PARAMETERS.forEach(p => {
                        let id = `sm-${src.replace(/\s/g,'')}-${p.key}`;
                        drawMiniChart(src, p.key, id);
                    });
                });
            }, 100);
        }

        function drawMiniChart(src, key, id) {
            let data = getData().filter(d => d.source === src);
            if (data.length === 0) return;
            
            let labels = data.map(d => {
                const date = new Date(d.datetime);
                return date.toLocaleDateString('es-ES', {day: '2-digit', month: '2-digit'});
            });
            
            let values = data.map(d => d[key]);
            let div = document.getElementById(id);
            if (!div) return;
            
            div.innerHTML = '<canvas></canvas>';
            let ctx = div.firstChild.getContext("2d");
            
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: key, 
                        data: values,
                        borderColor: "#2680ff", 
                        backgroundColor: "rgba(38, 128, 255, 0.1)",
                        pointRadius: 2, 
                        fill: true,
                        tension: 0.3
                    }]
                },
                options: {
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        x: {
                            ticks: {
                                autoSkip: true,
                                maxTicksLimit: 5
                            }
                        },
                        y: {
                            beginAtZero: false
                        }
                    },
                    maintainAspectRatio: false
                }
            });
        }

        // ----- ALERTAS ----- //
        function updateAlerts() {
            let div = document.getElementById("alertsTable");
            let data = getData();
            
            if (data.length === 0) {
                div.innerHTML = '<p>No hay datos para mostrar alertas.</p>';
                return;
            }
            
            let rows = [`<tr>
                <th>Fecha</th><th>Fuente</th>${PARAMETERS.map(p => `<th>${p.label}</th>`).join("")}<th>Estado</th><th>Acciones</th>
            </tr>`];
            
            data.forEach((d, index) => {
                let ceStat = getStatus("ce", d.ce), 
                    phStat = getStatus("ph", d.ph), 
                    orpStat = getStatus("orp", d.orp);
                
                let estado = ceStat === "alert" || orpStat === "alert"
                              ? "ALERTA"
                              : (ceStat === "watch" || phStat === "watch" || orpStat === "watch"
                                 ? "VIGILANCIA" : "OK");
                
                let rowClass = estado === "ALERTA" ? "alert" : estado === "VIGILANCIA" ? "watch" : "ok";
                let icon = estado === "ALERTA" ? "fa-exclamation-circle" : estado === "VIGILANCIA" ? "fa-exclamation-triangle" : "fa-check-circle";
                
                rows.push(`<tr class="${rowClass}">
                    <td>${d.datetime.replace("T"," ")}</td>
                    <td>${d.source}</td>
                    ${PARAMETERS.map(p => `<td>${d[p.key]}</td>`).join("")}
                    <td><i class="fas ${icon}"></i> <b>${estado}</b></td>
                    <td><button class="btn btn-danger" onclick="deleteMeasurement(${index})"><i class="fas fa-trash"></i></button></td>
                </tr>`);
            });
            
            div.innerHTML = `<table>${rows.join("")}</table>`;
        }

        // Eliminar una medición específica
        function deleteMeasurement(index) {
            let data = getData();
            data.splice(index, 1);
            saveData(data);
            updateMiniCards();
            updateTrendUI();
            updateAlerts();
            updateSmallMultiples();
            showNotification("Medición eliminada correctamente");
        }

        // ----- CONFIGURACIÓN DE UMBRALES ----- //
        function updateThresholdsForm() {
            const thresholds = getThresholds();
            let form = document.getElementById("thresholdsForm");
            form.innerHTML = '';
            
            Object.keys(thresholds).forEach(key => {
                const param = PARAMETERS.find(p => p.key === key);
                if (param) {
                    const t = thresholds[key];
                    form.innerHTML += `
                        <div class="threshold-item">
                            <h3><i class="fas fa-sliders-h"></i> ${param.label} (${param.unit})</h3>
                            <label>Rango OK - Mínimo:
                                <input type="number" step="0.1" id="${key}_ok_min" value="${t.ok[0]}" ${param.min !== undefined ? `min="${param.min}"` : ''} ${param.max !== undefined ? `max="${param.max}"` : ''}>
                            </label>
                            <label>Rango OK - Máximo:
                                <input type="number" step="0.1" id="${key}_ok_max" value="${t.ok[1] === Infinity ? '' : t.ok[1]}" placeholder="Infinito" ${param.min !== undefined ? `min="${param.min}"` : ''} ${param.max !== undefined ? `max="${param.max}"` : ''}>
                            </label>
                            <label>Rango Vigilancia - Mínimo:
                                <input type="number" step="0.1" id="${key}_watch_min" value="${t.watch[0]}" ${param.min !== undefined ? `min="${param.min}"` : ''} ${param.max !== undefined ? `max="${param.max}"` : ''}>
                            </label>
                            <label>Rango Vigilancia - Máximo:
                                <input type="number" step="0.1" id="${key}_watch_max" value="${t.watch[1] === Infinity ? '' : t.watch[1]}" placeholder="Infinito" ${param.min !== undefined ? `min="${param.min}"` : ''} ${param.max !== undefined ? `max="${param.max}"` : ''}>
                            </label>
                        </div>
                    `;
                }
            });
        }

        function saveThresholds() {
            const thresholds = getThresholds();
            
            Object.keys(thresholds).forEach(key => {
                const okMin = parseFloat(document.getElementById(`${key}_ok_min`).value);
                let okMax = document.getElementById(`${key}_ok_max`).value;
                okMax = okMax === '' ? Infinity : parseFloat(okMax);
                
                const watchMin = parseFloat(document.getElementById(`${key}_watch_min`).value);
                let watchMax = document.getElementById(`${key}_watch_max`).value;
                watchMax = watchMax === '' ? Infinity : parseFloat(watchMax);
                
                thresholds[key] = {
                    ok: [okMin, okMax],
                    watch: [watchMin, watchMax]
                };
            });
            
            saveThresholdsToStorage(thresholds);
            showNotification("Umbrales guardados correctamente");
        }

        function resetThresholds() {
            if (confirm("¿Restablecer los umbrales a los valores por defecto?")) {
                saveThresholdsToStorage(DEFAULT_THRESHOLDS);
                updateThresholdsForm();
                showNotification("Umbrales restablecidos correctamente");
            }
        }

        // ----- BORRAR DATOS ----- //
        function showClearDataModal() {
            document.getElementById('clearDataModal').style.display = 'flex';
        }

        function hideClearDataModal() {
            document.getElementById('clearDataModal').style.display = 'none';
        }

        function clearAllData() {
            saveData([]);
            updateMiniCards();
            updateTrendUI();
            updateAlerts();
            updateSmallMultiples();
            hideClearDataModal();
            showNotification("Todos los datos han sido borrados");
        }

        // ----- INICIALIZACIÓN AL CARGAR ----- //
        window.onload = function() {
            // Cargar datos de ejemplo si no hay datos
            if (getData().length === 0) {
                const sampleData = [
                    {
                        datetime: new Date(Date.now() - 86400000 * 7).toISOString().slice(0, 16),
                        source: "Canal Mayor",
                        ph: 7.2,
                        ce: 650,
                        tds: 320,
                        temperatura: 22.5,
                        orp: 150,
                        lluvia: 15.2,
                        caudal: 12.8,
                        notas: "Muestra inicial"
                    },
                    {
                        datetime: new Date(Date.now() - 86400000 * 5).toISOString().slice(0, 16),
                        source: "Drenaje Almonte",
                        ph: 6.8,
                        ce: 920,
                        tds: 460,
                        temperatura: 21.8,
                        orp: 80,
                        lluvia: 8.5,
                        caudal: 9.3,
                        notas: ""
                    },
                    {
                        datetime: new Date(Date.now() - 86400000 * 3).toISOString().slice(0, 16),
                        source: "Laguna Reservorio",
                        ph: 7.8,
                        ce: 480,
                        tds: 240,
                        temperatura: 24.2,
                        orp: 180,
                        lluvia: 5.2,
                        caudal: 15.6,
                        notas: "Condiciones normales"
                    },
                    {
                        datetime: new Date().toISOString().slice(0, 16),
                        source: "Canal Mayor",
                        ph: 7.0,
                        ce: 720,
                        tds: 360,
                        temperatura: 23.1,
                        orp: 120,
                        lluvia: 12.3,
                        caudal: 11.2,
                        notas: "Medición reciente"
                    }
                ];
                saveData(sampleData);
            }
            
            updateMiniCards();
            updateTrendUI();
            updateSmallMultiples();
            updateAlerts();
            updateThresholdsForm();
            
            // Navegación por defecto
            showSection('dashboard');
        };
    </script>
</body>
</html>
