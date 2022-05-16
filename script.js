
const cargarGraficoGoles = () =>{
    var xValues = ["Liverpool", "Colombia", "Porto", "Junior F.C.", "Barranquilla"];
    var yValues = [6, 7, 38, 20, 3];
    var barColors = [
    "#b91d47",
    "#eaf200",
    "#364bd6",
    "#5ae0de",
    "#5ae05e"
    ];

    new Chart("myChart", {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor: barColors,
        data: yValues
        }]
    },
    options: {
        title: {
        display: true,
        text: "Goles anotados en la carrera de Luis Diaz"
        },
    
    }
    });
    document.getElementById('boton1').style.display = 'none';
    document.getElementById('boton2').style.display = 'block';
    document.getElementById('myChart').style.display = 'block';
}

function ocultar(){
    document.getElementById('myChart').style.display = 'none';
    document.getElementById('boton2').style.display = 'none';
    document.getElementById('boton1').style.display = 'block';
}

