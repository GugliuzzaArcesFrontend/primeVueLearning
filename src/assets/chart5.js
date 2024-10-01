import { plugins } from "chart.js";

export default {
    title: 'Riepilogo pratiche',
    data: {
        labels: ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì'],
        datasets: [{
            type: 'bar',
            label: ['Sopralluoghi'],
            data: [11, 15, 7, 12, 9],
            backgroundColor: ['rgba(255,128,0,.5)'],
            borderColor: [],
            borderWidth: 1,
            yAxisID: 'y'
        },
        {
            type: 'bar',
            label: ['Preventivi'],
            data: [5, 8, 3, 6, 3],
            backgroundColor: ['rgba(128,255,128,.5)'],
            borderColor: [],
            borderWidth: 1,
            yAxisID: 'y'
        }, {
            type: 'bar',
            label: ['Delibere'],
            data: [12, 7, 5, 9, 10],
            backgroundColor: ['rgba(0,0,255,.5)'],
            borderColor: [],
            borderWidth: 1,
            yAxisID: 'y'
        }, {
            type: 'line',
            label: 'Deliberato',
            data: [11500, 15750, 7800, 12100, 9550],
            backgroundColor:['rgb(0,0,0)'],
            borderColor: ['rgb(0,0,0)'],
            borderWidth: 1,
            yAxisID: 'y1',
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
            y1: {
                beginAtZero: false,
                stacked: true,                
                position: 'right',
            }
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