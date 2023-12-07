let max = 100;
let suma = 0;

function getRandomInt(num) {

    let r = Math.floor(Math.random() * max);
    num = parseInt(num)

    switch (num) {
        case 1:
            document.getElementById('idBtn1').innerText = r
            break;
        case 2:
            document.getElementById('idBtn2').innerText = r
            break;
        case 3:
            document.getElementById('idBtn3').innerText = r
            break;
        case 4:
            document.getElementById('idBtn4').innerText = r
            break;
        case 5:
            document.getElementById('idBtn5').innerText = r
            break;
        case 6:
            document.getElementById('idBtn6').innerText = r
            break;
        case 7:
            document.getElementById('idBtn7').innerText = r
            break;
        case 8:
            document.getElementById('idBtn8').innerText = r
            break;
        case 9:
            document.getElementById('idBtn9').innerText = r
            break;
        default:
            break;
    }
    suma = suma + r;
    document.getElementById('idRespuesta').innerText = suma;
}