export default{
    title: 'Fatturato e stipendi',
    data: {
        labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
        datasets: [
            {
                type: 'bar',
                label: 'Fatturato',
                data: [72, 52, 74, 34, 61, 39, 35, 28, 88, 55, 34, 56],  // Dati di Product A
                borderColor: 'rgba(75, 192, 192, 1)',  // Colore linea
                backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Area sotto la linea
                //fill: true,  // Riempi l'area sotto la linea
                tension: 0,  // Smoothing della linea
            },
            {
                type: 'line',
                label: 'Stipendi',
                data: [36, 89, 21, 55, 63, 80, 63, 56, 99, 28, 70, 21],  // Dati di Product B
                borderColor: 'rgba(255, 99, 132, 1)',  // Colore linea
                backgroundColor: 'rgba(255, 99, 132, 0.2)',  // Area sotto la linea
                fill: false,
                tension: 0.4,
            },
            {
                type: 'line',
                label: 'Spese per materiali',
                data: [25, 20, 30, 40, 25, 25, 25, 15, 60, 25, 20, 40],  // Dati di Product A
                borderColor: 'rgba(255, 159, 64, 1)',  // Colore linea
                backgroundColor: 'rgba(255, 159, 64, 0.2)',  // Area sotto la linea
                fill: true,  // Riempi l'area sotto la linea
                tension: 0,  // Smoothing della linea
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
                max: 150
            },
        },
        plugins: {
            title: {
                display: true,
                text: 'Analitica fatture e costi in migliaia di euro (Media nazionale)',
            }
        }
    },
    type: 'line'
} 