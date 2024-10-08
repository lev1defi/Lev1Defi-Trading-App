const { createChart } = require('lightweight-charts');

const chartContainer = document.getElementById('chart-container');
if (chartContainer) {
    const chart = createChart(chartContainer, {
        width: chartContainer.clientWidth,
        height: chartContainer.clientHeight,
        layout: {
            backgroundColor: '#FFFFFF',
            textColor: '#000',
        },
    });

    // Add a candlestick series
    const candlestickSeries = chart.addCandlestickSeries();

    // 32 Candlesticks data (simulated)
    const candleData = [
        { time: '2023-01-01', open: 100, high: 105, low: 95, close: 102 },
        { time: '2023-01-02', open: 102, high: 108, low: 101, close: 106 },
        { time: '2023-01-03', open: 106, high: 110, low: 104, close: 107 },
        { time: '2023-01-04', open: 107, high: 112, low: 105, close: 109 },
        { time: '2023-01-05', open: 109, high: 115, low: 108, close: 113 },
        { time: '2023-01-06', open: 113, high: 118, low: 110, close: 117 },
        { time: '2023-01-07', open: 117, high: 120, low: 114, close: 119 },
        { time: '2023-01-08', open: 119, high: 125, low: 118, close: 124 },
        { time: '2023-01-09', open: 124, high: 128, low: 120, close: 122 },
        { time: '2023-01-10', open: 122, high: 125, low: 120, close: 123 },
        { time: '2023-01-11', open: 123, high: 127, low: 121, close: 126 },
        { time: '2023-01-12', open: 126, high: 130, low: 123, close: 129 },
        { time: '2023-01-13', open: 129, high: 133, low: 127, close: 131 },
        { time: '2023-01-14', open: 131, high: 135, low: 129, close: 133 },
        { time: '2023-01-15', open: 133, high: 137, low: 130, close: 136 },
        { time: '2023-01-16', open: 136, high: 140, low: 134, close: 139 },
        { time: '2023-01-17', open: 139, high: 144, low: 136, close: 142 },
        { time: '2023-01-18', open: 142, high: 147, low: 139, close: 145 },
        { time: '2023-01-19', open: 145, high: 150, low: 143, close: 148 },
        { time: '2023-01-20', open: 148, high: 153, low: 146, close: 150 },
        { time: '2023-01-21', open: 150, high: 155, low: 148, close: 153 },
        { time: '2023-01-22', open: 153, high: 158, low: 151, close: 155 },
        { time: '2023-01-23', open: 155, high: 160, low: 153, close: 158 },
        { time: '2023-01-24', open: 158, high: 162, low: 156, close: 160 },
        { time: '2023-01-25', open: 160, high: 164, low: 158, close: 162 },
        { time: '2023-01-26', open: 162, high: 166, low: 159, close: 165 },
        { time: '2023-01-27', open: 165, high: 170, low: 162, close: 168 },
        { time: '2023-01-28', open: 168, high: 172, low: 165, close: 170 },
        { time: '2023-01-29', open: 170, high: 175, low: 167, close: 172 },
        { time: '2023-01-30', open: 172, high: 178, low: 170, close: 175 },
        { time: '2023-01-31', open: 175, high: 180, low: 172, close: 178 },
        { time: '2023-02-01', open: 178, high: 183, low: 175, close: 181 },
    ];

    // Set the candlestick data
    candlestickSeries.setData(candleData);

    // Simulate Bollinger Bands (Upper and Lower Bands)
    const upperBand = chart.addLineSeries({
        color: 'rgba(0, 150, 136, 0.6)',  // Green for the upper band
        lineWidth: 2,
    });
    const lowerBand = chart.addLineSeries({
        color: 'rgba(255, 82, 82, 0.6)',  // Red for the lower band
        lineWidth: 2,
    });

    // Simulated Bollinger Bands data (using some simple calculations)
    const upperBandData = [
        { time: '2023-01-01', value: 107 },
        { time: '2023-01-02', value: 112 },
        { time: '2023-01-03', value: 113 },
        { time: '2023-01-04', value: 115 },
        { time: '2023-01-05', value: 118 },
        { time: '2023-01-06', value: 122 },
        { time: '2023-01-07', value: 124 },
        { time: '2023-01-08', value: 128 },
        { time: '2023-01-09', value: 126 },
        { time: '2023-01-10', value: 125 },
        { time: '2023-01-11', value: 128 },
        { time: '2023-01-12', value: 130 },
        { time: '2023-01-13', value: 133 },
        { time: '2023-01-14', value: 135 },
        { time: '2023-01-15', value: 137 },
        { time: '2023-01-16', value: 140 },
        { time: '2023-01-17', value: 143 },
        { time: '2023-01-18', value: 146 },
        { time: '2023-01-19', value: 149 },
        { time: '2023-01-20', value: 151 },
        { time: '2023-01-21', value: 154 },
        { time: '2023-01-22', value: 156 },
        { time: '2023-01-23', value: 159 },
        { time: '2023-01-24', value: 161 },
        { time: '2023-01-25', value: 163 },
        { time: '2023-01-26', value: 166 },
        { time: '2023-01-27', value: 169 },
        { time: '2023-01-28', value: 171 },
        { time: '2023-01-29', value: 173 },
        { time: '2023-01-30', value: 176 },
        { time: '2023-01-31', value: 179 },
        { time: '2023-02-01', value: 182 },
    ];

    const lowerBandData = [
        { time: '2023-01-01', value: 97 },
        { time: '2023-01-02', value: 102 },
        { time: '2023-01-03', value: 101 },
        { time: '2023-01-04', value: 103 },
        { time: '2023-01-05', value: 105 },
        { time: '2023-01-06', value: 109 },
        { time: '2023-01-07', value: 111 },
        { time: '2023-01-08', value: 115 },
        { time: '2023-01-09', value: 115 },
        { time: '2023-01-10', value: 120 },
        { time: '2023-01-11', value: 118 },
        { time: '2023-01-12', value: 115 },
        { time: '2023-01-13', value: 112 },
        { time: '2023-01-14', value: 110 },
        { time: '2023-01-15', value: 108 },
        { time: '2023-01-16', value: 105 },
        { time: '2023-01-17', value: 102 },
        { time: '2023-01-18', value: 101 },
        { time: '2023-01-19', value: 98 },
        { time: '2023-01-20', value: 96 },
        { time: '2023-01-21', value: 94 },
        { time: '2023-01-22', value: 91 },
        { time: '2023-01-23', value: 90 },
        { time: '2023-01-24', value: 88 },
        { time: '2023-01-25', value: 86 },
        { time: '2023-01-26', value: 84 },
        { time: '2023-01-27', value: 82 },
        { time: '2023-01-28', value: 81 },
        { time: '2023-01-29', value: 80 },
        { time: '2023-01-30', value: 79 },
        { time: '2023-01-31', value: 77 },
        { time: '2023-02-01', value: 75 },
    ];

    // Set Bollinger Bands data
    upperBand.setData(upperBandData);
    lowerBand.setData(lowerBandData);

}
