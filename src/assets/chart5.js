import { plugins } from "chart.js";

export default {
    title: 'Riepilogo pratiche',
    data: {
        labels: ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì'],
        datasets: [{
            type: 'bar',
            label: ['Sopralluoghi'],
            data: [11, 15, 7, 12, 9],
            backgroundColor: ['rgb(255,128,0'],
            borderColor: [],
            borderWidth: 1
        },
        {
            type: 'bar',
            label: ['Preventivi'],
            data: [5, 8, 3, 6, 3],
            backgroundColor: ['rgb(128,255,128'],
            borderColor: [],
            borderWidth: 1
        }, {
            type: 'bar',
            label: ['Delibere'],
            data: [12, 7, 5, 9, 10],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1
        }
        ]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        aspectRatio: 2,
        scales: {
            x: {
                stacked: true
            },
            y: {
                beginAtZero: true,
                stacked: true,
            },
        },
        plugins: {
            title: {
                display: true,
                text: 'Stato opportunità',
            }
        }
    },
    type: 'bar'
}