export default {
    title: 'Fidelizzazione clienti',
    data: {
        labels: ['Nuovo', "Fidelizzato", "Vip"],
        datasets: [{
            // label: ['Sopralluoghi'],
            data: [11, 15, 7],
            backgroundColor: ['rgb(255,128,0)', 'rgb(128,255,128)', 'rgb(0,0,255)'],
            borderColor: [],
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        aspectRatio: 2,
    },
    type: 'doughnut'
}