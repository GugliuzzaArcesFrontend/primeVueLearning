export default {
    title: 'Analitica fatture e costi',
    data: {
        labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
        datasets: [
            {
                type: 'bar',
                label: 'Fatturato',
                data: [48, 61, 75, 89, 55, 60, 70, 85, 105, 112, 121, 140],  // Dati di Product A
                borderColor: 'rgba(75, 192, 192, 1)',  // Colore linea
                backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Area sotto la linea
                fill: false,  // Riempi l'area sotto la linea
                tension: 0,  // Smoothing della linea
                stack: 0
            },
            {
                type: 'line',
                label: 'Stipendi',
                data: [20, 30, 35, 40, 20, 35, 30, 25, 60, 70, 80, 85],  // Dati di Product B
                borderColor: 'rgba(255, 99, 132, 1)',  // Colore linea
                backgroundColor: 'rgba(255, 99, 132, 0.2)',  // Area sotto la linea
                fill: false,
                tension: 0,
                stack: 1
            },
            {
                type: 'line',
                label: 'Spese per materiali',
                data: [15, 20, 30, 40, 25, 25, 25, 15, 50, 25, 15, 40],  // Dati di Product A
                borderColor: 'rgba(255, 159, 64, 1)',  // Colore linea
                backgroundColor: 'rgba(255, 159, 64, 0.2)',  // Area sotto la linea
                fill: false,  // Riempi l'area sotto la linea
                tension: 0.75,  // Smoothing della linea
                stack: 1
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        aspectRatio: 2,
        scales: {
            y: {
                beginAtZero: false,
                stacked: true,
                max:150
            },
            x: {
                stacked: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Analitica fatture e costi in migliaia di euro (sede)',
            }
        }
    },
    type: 'line'
}