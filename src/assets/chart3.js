export default{
    title: 'Categorizzazione clienti',
    data : {
        labels: ['Condominii', 'Privati', 'Enti pubblici', 'Amministratori', 'Subappalti'],
        datasets: [{
            label: 'Distribuzione per categoria',
            data: [25, 15, 30, 10, 20], // Percentuali o valori
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    }, 
    options: {
        maintainAspectRatio: false,
        responsive: true,
    },
    type: 'pie'
}