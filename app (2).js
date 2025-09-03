// Water Quality Monitoring Application
class WaterQualityApp {
    constructor() {
        this.data = [];
        this.thresholds = {
            ph: { ok_min: 6.5, ok_max: 8.5, watch_min: 6.0, watch_max: 9.0 },
            ce: { ok_max: 800, watch_max: 1500 },
            tds: { ok_max: 500, watch_max: 1000 },
            temperatura: { ok_min: 18, ok_max: 30, watch_min: 15, watch_max: 34 },
            orp: { ok_min: 50, watch_min: 0 }
        };
        this.chart = null;
        this.currentSection = 'dashboard';
        this.init();
    }

    init() {
        this.loadData();
        this.loadThresholds();
        this.setupSections();
        this.bindEvents();
        this.updateDashboard();
        this.updateAlertsSection();
        this.loadThresholdInputs();
        this.setCurrentDateTime();
        this.showSection('dashboard');
    }

    setupSections() {
        // Ensure all sections are properly set up for switching
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Show dashboard initially
        const dashboard = document.getElementById('dashboard');
        if (dashboard) {
            dashboard.style.display = 'block';
        }
    }

    // Data Management
    loadData() {
        const stored = localStorage.getItem('waterQualityData');
        this.data = stored ? JSON.parse(stored) : [];
    }

    saveData() {
        localStorage.setItem('waterQualityData', JSON.stringify(this.data));
    }

    loadThresholds() {
        const stored = localStorage.getItem('waterQualityThresholds');
        if (stored) {
            this.thresholds = { ...this.thresholds, ...JSON.parse(stored) };
        }
    }

    saveThresholds() {
        localStorage.setItem('waterQualityThresholds', JSON.stringify(this.thresholds));
    }

    // Event Binding
    bindEvents() {
        // Navigation
        document.querySelectorAll('.nav__btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const section = e.target.dataset.section;
                console.log('Navigation clicked:', section);
                this.showSection(section);
            });
        });

        // Form submission
        const form = document.getElementById('measurement-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit();
            });
        }

        // Chart controls
        const chartSource = document.getElementById('chart-source');
        const chartParameter = document.getElementById('chart-parameter');
        if (chartSource) chartSource.addEventListener('change', () => this.updateChart());
        if (chartParameter) chartParameter.addEventListener('change', () => this.updateChart());

        // Alerts filter
        const alertFilter = document.getElementById('alert-filter');
        if (alertFilter) alertFilter.addEventListener('change', () => this.updateAlertsTable());

        // Configuration
        const saveBtn = document.getElementById('save-thresholds');
        const resetBtn = document.getElementById('reset-thresholds');
        if (saveBtn) saveBtn.addEventListener('click', () => this.saveThresholdSettings());
        if (resetBtn) resetBtn.addEventListener('click', () => this.resetThresholds());

        // Data management
        const exportBtn = document.getElementById('export-data');
        const importBtn = document.getElementById('import-data');
        const clearBtn = document.getElementById('clear-data');
        if (exportBtn) exportBtn.addEventListener('click', () => this.exportData());
        if (importBtn) importBtn.addEventListener('click', () => this.importData());
        if (clearBtn) clearBtn.addEventListener('click', () => this.clearAllData());
    }

    // Navigation
    showSection(sectionName) {
        console.log('Switching to section:', sectionName);
        
        // Update navigation buttons
        document.querySelectorAll('.nav__btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        const activeBtn = document.querySelector(`[data-section="${sectionName}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }

        // Hide all sections
        document.querySelectorAll('.section').forEach(section => {
            section.style.display = 'none';
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.style.display = 'block';
            targetSection.classList.add('active');
            this.currentSection = sectionName;
            console.log('Section switched to:', sectionName);
        } else {
            console.error('Section not found:', sectionName);
        }

        // Update content based on section
        if (sectionName === 'trends') {
            setTimeout(() => this.updateChart(), 200);
        } else if (sectionName === 'alerts') {
            this.updateAlertsSection();
        } else if (sectionName === 'dashboard') {
            this.updateDashboard();
        }
    }

    // Form handling
    setCurrentDateTime() {
        const datetimeInput = document.getElementById('datetime');
        if (datetimeInput) {
            const now = new Date();
            const offset = now.getTimezoneOffset();
            const localTime = new Date(now.getTime() - offset * 60 * 1000);
            const formattedDateTime = localTime.toISOString().slice(0, 16);
            datetimeInput.value = formattedDateTime;
        }
    }

    handleFormSubmit() {
        const formData = {
            datetime: document.getElementById('datetime').value,
            source: document.getElementById('source').value,
            ph: parseFloat(document.getElementById('ph').value),
            ce: parseInt(document.getElementById('ce').value),
            tds: parseInt(document.getElementById('tds').value),
            temperatura: parseFloat(document.getElementById('temperatura').value),
            orp: parseInt(document.getElementById('orp').value),
            lluvia: parseFloat(document.getElementById('lluvia').value) || 0,
            caudal: parseFloat(document.getElementById('caudal').value) || 0,
            notes: document.getElementById('notes').value || ''
        };

        // Validate required fields
        if (!formData.datetime || !formData.source || isNaN(formData.ph) || 
            isNaN(formData.ce) || isNaN(formData.tds) || isNaN(formData.temperatura) || 
            isNaN(formData.orp)) {
            this.showMessage('form-message', 'Por favor complete todos los campos requeridos', 'error');
            return;
        }

        this.data.push(formData);
        this.saveData();
        this.showMessage('form-message', 'Medición guardada correctamente', 'success');
        document.getElementById('measurement-form').reset();
        this.setCurrentDateTime();
        this.updateDashboard();
        this.updateAlertsSection();
    }

    // Status calculation
    getParameterStatus(param, value) {
        const t = this.thresholds[param];
        
        if (param === 'ph' || param === 'temperatura') {
            if (value >= t.ok_min && value <= t.ok_max) return 'OK';
            if (value >= t.watch_min && value <= t.watch_max) return 'VIGILANCIA';
            return 'ALERTA';
        } else if (param === 'ce' || param === 'tds') {
            if (value <= t.ok_max) return 'OK';
            if (value <= t.watch_max) return 'VIGILANCIA';
            return 'ALERTA';
        } else if (param === 'orp') {
            if (value >= t.ok_min) return 'OK';
            if (value >= t.watch_min) return 'VIGILANCIA';
            return 'ALERTA';
        }
        return 'OK';
    }

    getOverallStatus(measurement) {
        const params = ['ph', 'ce', 'tds', 'temperatura', 'orp'];
        let hasAlert = false;
        let hasWatch = false;

        for (const param of params) {
            const status = this.getParameterStatus(param, measurement[param]);
            if (status === 'ALERTA') hasAlert = true;
            if (status === 'VIGILANCIA') hasWatch = true;
        }

        if (hasAlert) return 'ALERTA';
        if (hasWatch) return 'VIGILANCIA';
        return 'OK';
    }

    // Dashboard updates
    updateDashboard() {
        const sources = ['Canal Mayor', 'Drenaje Almonte', 'Laguna Reservorio'];
        
        sources.forEach(source => {
            const sourceData = this.data.filter(d => d.source === source);
            const cardId = source.toLowerCase().replace(/\s+/g, '-');
            
            if (sourceData.length === 0) {
                this.updateSourceCard(cardId, 'Sin datos', 'no-data', '-', 'No hay mediciones');
            } else {
                const latest = sourceData[sourceData.length - 1];
                const status = this.getOverallStatus(latest);
                const statusClass = status.toLowerCase().replace('vigilancia', 'watch').replace('alerta', 'alert');
                const reading = `pH: ${latest.ph} | T: ${latest.temperatura}°C`;
                const date = new Date(latest.datetime).toLocaleString('es-ES');
                
                this.updateSourceCard(cardId, status, statusClass, reading, date);
            }
        });
    }

    updateSourceCard(cardId, status, statusClass, reading, date) {
        const statusEl = document.getElementById(`status-${cardId}`);
        const readingEl = document.getElementById(`reading-${cardId}`);
        const dateEl = document.getElementById(`date-${cardId}`);
        
        if (statusEl) {
            statusEl.textContent = status;
            statusEl.className = `status-indicator ${statusClass}`;
        }
        if (readingEl) readingEl.textContent = reading;
        if (dateEl) dateEl.textContent = date;
    }

    // Charts
    updateChart() {
        const sourceFilter = document.getElementById('chart-source')?.value;
        const parameter = document.getElementById('chart-parameter')?.value || 'ph';
        
        let filteredData = this.data;
        if (sourceFilter) {
            filteredData = this.data.filter(d => d.source === sourceFilter);
        }

        // Sort by datetime
        filteredData.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));

        const canvas = document.getElementById('trends-chart');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        
        if (this.chart) {
            this.chart.destroy();
        }

        if (filteredData.length === 0) {
            this.chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [],
                    datasets: []
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'No hay datos disponibles'
                        }
                    }
                }
            });
            return;
        }

        const datasets = [];
        const colors = ['#1FB8CD', '#FFC185', '#B4413C'];

        if (sourceFilter) {
            // Single source chart
            datasets.push({
                label: sourceFilter,
                data: filteredData.map(d => ({
                    x: d.datetime,
                    y: d[parameter]
                })),
                borderColor: colors[0],
                backgroundColor: colors[0] + '20',
                fill: false,
                tension: 0.1
            });
        } else {
            // Multiple sources chart
            const sources = ['Canal Mayor', 'Drenaje Almonte', 'Laguna Reservorio'];
            sources.forEach((source, index) => {
                const sourceData = filteredData.filter(d => d.source === source);
                if (sourceData.length > 0) {
                    datasets.push({
                        label: source,
                        data: sourceData.map(d => ({
                            x: d.datetime,
                            y: d[parameter]
                        })),
                        borderColor: colors[index],
                        backgroundColor: colors[index] + '20',
                        fill: false,
                        tension: 0.1
                    });
                }
            });
        }

        // Add threshold lines
        const thresholdLines = this.getThresholdLines(parameter, filteredData);

        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [...datasets, ...thresholdLines]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            parser: 'YYYY-MM-DDTHH:mm',
                            tooltipFormat: 'DD/MM/YYYY HH:mm',
                            displayFormats: {
                                hour: 'DD/MM HH:mm',
                                day: 'DD/MM/YYYY'
                            }
                        },
                        title: {
                            display: true,
                            text: 'Fecha y Hora'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: this.getParameterLabel(parameter)
                        }
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: `Tendencias - ${this.getParameterLabel(parameter)}`
                    },
                    legend: {
                        display: true,
                        position: 'top'
                    }
                }
            }
        });
    }

    getThresholdLines(parameter, data) {
        const t = this.thresholds[parameter];
        const lines = [];
        
        if (data.length === 0) return lines;

        const allDates = data.map(d => d.datetime).sort();
        const minDate = allDates[0];
        const maxDate = allDates[allDates.length - 1];

        if (t.ok_min !== undefined) {
            lines.push({
                label: 'Límite OK Mín',
                data: [
                    { x: minDate, y: t.ok_min },
                    { x: maxDate, y: t.ok_min }
                ],
                borderColor: '#28a745',
                borderDash: [5, 5],
                fill: false,
                pointRadius: 0
            });
        }

        if (t.ok_max !== undefined) {
            lines.push({
                label: 'Límite OK Máx',
                data: [
                    { x: minDate, y: t.ok_max },
                    { x: maxDate, y: t.ok_max }
                ],
                borderColor: '#28a745',
                borderDash: [5, 5],
                fill: false,
                pointRadius: 0
            });
        }

        if (t.watch_min !== undefined && t.watch_min !== t.ok_min) {
            lines.push({
                label: 'Límite Vigilancia Mín',
                data: [
                    { x: minDate, y: t.watch_min },
                    { x: maxDate, y: t.watch_min }
                ],
                borderColor: '#ffc107',
                borderDash: [10, 5],
                fill: false,
                pointRadius: 0
            });
        }

        if (t.watch_max !== undefined && t.watch_max !== t.ok_max) {
            lines.push({
                label: 'Límite Vigilancia Máx',
                data: [
                    { x: minDate, y: t.watch_max },
                    { x: maxDate, y: t.watch_max }
                ],
                borderColor: '#ffc107',
                borderDash: [10, 5],
                fill: false,
                pointRadius: 0
            });
        }

        return lines;
    }

    getParameterLabel(param) {
        const labels = {
            ph: 'pH',
            ce: 'CE (µS/cm)',
            tds: 'TDS (ppm)',
            temperatura: 'Temperatura (°C)',
            orp: 'ORP (mV)'
        };
        return labels[param] || param;
    }

    // Alerts management
    updateAlertsSection() {
        this.updateAlertsSummary();
        this.updateAlertsTable();
    }

    updateAlertsSummary() {
        let okCount = 0, watchCount = 0, alertCount = 0;

        this.data.forEach(measurement => {
            const status = this.getOverallStatus(measurement);
            if (status === 'OK') okCount++;
            else if (status === 'VIGILANCIA') watchCount++;
            else if (status === 'ALERTA') alertCount++;
        });

        const okEl = document.getElementById('ok-count');
        const watchEl = document.getElementById('watch-count');
        const alertEl = document.getElementById('alert-count');
        
        if (okEl) okEl.textContent = okCount;
        if (watchEl) watchEl.textContent = watchCount;
        if (alertEl) alertEl.textContent = alertCount;
    }

    updateAlertsTable() {
        const filter = document.getElementById('alert-filter')?.value;
        const tbody = document.getElementById('alerts-table-body');
        
        if (!tbody) return;
        
        tbody.innerHTML = '';

        const alerts = [];
        this.data.forEach(measurement => {
            const params = ['ph', 'ce', 'tds', 'temperatura', 'orp'];
            params.forEach(param => {
                const status = this.getParameterStatus(param, measurement[param]);
                if (status !== 'OK' && (!filter || status === filter)) {
                    alerts.push({
                        datetime: measurement.datetime,
                        source: measurement.source,
                        parameter: param,
                        value: measurement[param],
                        status: status
                    });
                }
            });
        });

        // Sort by datetime descending
        alerts.sort((a, b) => new Date(b.datetime) - new Date(a.datetime));

        if (alerts.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" class="no-data">No hay alertas</td></tr>';
            return;
        }

        alerts.forEach(alert => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${new Date(alert.datetime).toLocaleString('es-ES')}</td>
                <td>${alert.source}</td>
                <td>${this.getParameterLabel(alert.parameter)}</td>
                <td>${alert.value}</td>
                <td><span class="alert-status ${alert.status.toLowerCase().replace('vigilancia', 'watch').replace('alerta', 'alert')}">${alert.status}</span></td>
            `;
            tbody.appendChild(row);
        });
    }

    // Configuration
    loadThresholdInputs() {
        Object.keys(this.thresholds).forEach(param => {
            Object.keys(this.thresholds[param]).forEach(type => {
                const input = document.querySelector(`[data-param="${param}"][data-type="${type}"]`);
                if (input) {
                    input.value = this.thresholds[param][type];
                }
            });
        });
    }

    saveThresholdSettings() {
        const inputs = document.querySelectorAll('.threshold-input');
        inputs.forEach(input => {
            const param = input.dataset.param;
            const type = input.dataset.type;
            const value = parseFloat(input.value);
            
            if (!isNaN(value)) {
                this.thresholds[param][type] = value;
            }
        });

        this.saveThresholds();
        this.showMessage('config-message', 'Configuración guardada correctamente', 'success');
        this.updateDashboard();
        this.updateAlertsSection();
        if (this.chart) {
            this.updateChart();
        }
    }

    resetThresholds() {
        if (confirm('¿Está seguro de que desea restaurar los valores por defecto?')) {
            this.thresholds = {
                ph: { ok_min: 6.5, ok_max: 8.5, watch_min: 6.0, watch_max: 9.0 },
                ce: { ok_max: 800, watch_max: 1500 },
                tds: { ok_max: 500, watch_max: 1000 },
                temperatura: { ok_min: 18, ok_max: 30, watch_min: 15, watch_max: 34 },
                orp: { ok_min: 50, watch_min: 0 }
            };
            this.saveThresholds();
            this.loadThresholdInputs();
            this.showMessage('config-message', 'Configuración restaurada a valores por defecto', 'success');
            this.updateDashboard();
            this.updateAlertsSection();
            if (this.chart) {
                this.updateChart();
            }
        }
    }

    // Data import/export
    exportData() {
        if (this.data.length === 0) {
            this.showMessage('data-message', 'No hay datos para exportar', 'error');
            return;
        }

        const header = 'datetime,source,ph,ce,tds,temperatura,orp,lluvia,caudal';
        const rows = this.data.map(d => 
            `${d.datetime},${d.source},${d.ph},${d.ce},${d.tds},${d.temperatura},${d.orp},${d.lluvia},${d.caudal}`
        );
        const csv = [header, ...rows].join('\n');

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `calidad_agua_${new Date().toISOString().slice(0, 10)}.csv`;
        a.click();
        URL.revokeObjectURL(url);

        this.showMessage('data-message', 'Datos exportados correctamente', 'success');
    }

    importData() {
        const fileInput = document.getElementById('import-file');
        const file = fileInput?.files[0];

        if (!file) {
            this.showMessage('data-message', 'Por favor seleccione un archivo CSV', 'error');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const csv = e.target.result;
                const lines = csv.split('\n').filter(line => line.trim());
                const header = lines[0];
                
                if (header !== 'datetime,source,ph,ce,tds,temperatura,orp,lluvia,caudal') {
                    throw new Error('Formato de archivo incorrecto');
                }

                const newData = [];
                for (let i = 1; i < lines.length; i++) {
                    const values = lines[i].split(',');
                    if (values.length === 9) {
                        newData.push({
                            datetime: values[0],
                            source: values[1],
                            ph: parseFloat(values[2]),
                            ce: parseInt(values[3]),
                            tds: parseInt(values[4]),
                            temperatura: parseFloat(values[5]),
                            orp: parseInt(values[6]),
                            lluvia: parseFloat(values[7]),
                            caudal: parseFloat(values[8]),
                            notes: ''
                        });
                    }
                }

                this.data = [...this.data, ...newData];
                this.saveData();
                this.updateDashboard();
                this.updateAlertsSection();
                this.showMessage('data-message', `${newData.length} mediciones importadas correctamente`, 'success');
                fileInput.value = '';
            } catch (error) {
                this.showMessage('data-message', 'Error al importar el archivo: ' + error.message, 'error');
            }
        };
        reader.readAsText(file);
    }

    clearAllData() {
        if (confirm('¿Está seguro de que desea eliminar todas las mediciones? Esta acción no se puede deshacer.')) {
            this.data = [];
            this.saveData();
            this.updateDashboard();
            this.updateAlertsSection();
            if (this.chart) {
                this.updateChart();
            }
            this.showMessage('data-message', 'Todos los datos han sido eliminados', 'info');
        }
    }

    // Utility functions
    showMessage(containerId, message, type) {
        const container = document.getElementById(containerId);
        if (container) {
            container.textContent = message;
            container.className = `message ${type}`;
            container.classList.remove('hidden');
            
            setTimeout(() => {
                container.classList.add('hidden');
            }, 5000);
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing app...');
    new WaterQualityApp();
});