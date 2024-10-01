export default {
    title: 'Fidelizzazione clienti',
    data: {
        labels: ["Fidelizzato", 'Attivo', 'Semi-attivo', "Inattivo"],
        datasets: [{
            label: 'Stato clienti',
            data: [7, 11, 15, 5],
            backgroundColor: ['rgba(0,0,255,.5)','rgba(128,255,128,.5)', 'rgba(255,128,0,.5)',  'rgba(255,0,0,.5)'],
            borderColor: [],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        aspectRatio: 2,
        plugins: {
            title: {
                display: true,
                text: 'Stato clienti',
            }
        }
    },
    type: 'doughnut'
}