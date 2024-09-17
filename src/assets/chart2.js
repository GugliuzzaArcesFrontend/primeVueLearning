export default{
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                type: 'line',
                label: 'Fatturato',
                data: [72, 52, 74, 34, 61, 39, 35, 28, 88, 5, 34, 56],  // Dati di Product A
                borderColor: 'rgba(75, 192, 192, 1)',  // Colore linea
                backgroundColor: 'rgba(75, 192, 192, 0.2)',  // Area sotto la linea
                //fill: true,  // Riempi l'area sotto la linea
                tension: 0,  // Smoothing della linea
            },
            {
                type: 'bar',
                label: 'Stipendi',
                data: [36, 89, 17, 55, 63, 80, 63, 56, 99, 28, 70, 21],  // Dati di Product B
                borderColor: 'rgba(255, 99, 132, 1)',  // Colore linea
                backgroundColor: 'rgba(255, 99, 132, 0.2)',  // Area sotto la linea
                fill: true,
                tension: 0.4,
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