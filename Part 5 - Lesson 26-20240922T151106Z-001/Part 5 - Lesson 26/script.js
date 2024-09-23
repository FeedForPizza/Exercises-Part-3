function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {

        color += letters[Math.floor(Math.random() * 16)];
    }
    var transparent = Math.floor(Math.random() * 100);
    return color + transparent;
}

const data = {
    labels: ['1', '2', '3', '4', '5'],
    datasets: [{
        label: 'Bars',
        data: [randomNumber(0, 100), randomNumber(0, 100), randomNumber(0, 100), randomNumber(0, 100), randomNumber(0, 100)],
        backgroundColor: [
            getRandomColor(),
            getRandomColor(),
            getRandomColor(),
            getRandomColor(),
            getRandomColor()
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)'

        ],
        borderWidth: 1
    }]
};

new Chart(document.getElementById("myChart"), {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
})
const DISPLAY = true;
const BORDER = true;
const CHART_AREA = true;
const TICKS = true;
const data2 = {
    labels: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7'
    ],
    datasets: [{
        /*        label: 'My First Dataset',*/
        data: [
            randomNumber(0, 100),
            randomNumber(0, 100),
            randomNumber(0, 100),
            randomNumber(0, 100),
            randomNumber(0, 100),
            randomNumber(0, 100),
            randomNumber(0, 100)],
        backgroundColor: [
            getRandomColor(),
            getRandomColor(),
            getRandomColor(),
            getRandomColor(),
            getRandomColor(),
            getRandomColor(),
            getRandomColor()
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)'
        ],
        hoverOffset: 4,
        borderWidth: 1,
    }]
};

new Chart(document.getElementById("myDoughnut"), {
    type: 'doughnut',
    data: data2,
})