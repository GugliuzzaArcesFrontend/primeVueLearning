export default {
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                type: 'line',
                label: 'Fatturato',
                data: [30, 40, 45, 50, 55, 60, 70, 65, 75, 85, 90, 100],  // Dati di Product A
                borderColor: 'rgba(75, 192, 192, 1)',  // Colore linea
                backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Area sotto la linea
                fill: false,  // Riempi l'area sotto la linea
                tension: 0,  // Smoothing della linea
            },
            {
                type: 'bar',
                label: 'Stipendi',
                data: [20, 30, 35, 40, 45, 55, 60, 55, 60, 70, 80, 85],  // Dati di Product B
                borderColor: 'rgba(255, 99, 132, 1)',  // Colore linea
                backgroundColor: 'rgba(255, 99, 132, 0.2)',  // Area sotto la linea
                fill: false,
                tension: 0.4,
            },
            {
                type: 'line',
                label: 'Spese per materiali',
                data: [15, 20, 30, 40, 25, 50, 65, 55, 60, 25, 15, 40],  // Dati di Product A
                borderColor: 'rgba(255, 159, 64, 1)',  // Colore linea
                backgroundColor: 'rgba(255, 159, 64, 0.2)',  // Area sotto la linea
                fill: false,  // Riempi l'area sotto la linea
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
                beginAtZero: true,
            },
        },
    },
    type: 'line'
}