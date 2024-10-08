import { createChart, LineData } from 'lightweight-charts';

// Create the chart and bind it to the container
const chart = createChart(document.getElementById('chart-container') as HTMLElement, {
    width: window.innerWidth,
    height: 600,
    layout: {
        textColor: '#000',
    },
    grid: {
        vertLines: {
            color: '#e0e0e0',
        },
        horzLines: {
            color: '#e0e0e0',
        },
    },
    crosshair: {
        mode: 1,
    },
    timeScale: {
        borderColor: '#e0e0e0',
    },
});

// Add a line series (for price data)
const lineSeries = chart.addLineSeries();

// Sample data (replace with real trading data)
const data: LineData[] = [
    { time: '2022-10-03', value: 145.3 },
    { time: '2022-10-04', value: 146.4 },
    { time: '2022-10-05', value: 144.2 },
    { time: '2022-10-06', value: 147.8 },
    { time: '2022-10-07', value: 150.2 },
    { time: '2022-10-08', value: 149.7 },
];

lineSeries.setData(data);

// Resize the chart when the window is resized
window.addEventListener('resize', () => {
    chart.resize(window.innerWidth, 600);
});
