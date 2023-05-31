
function showSalary() {
    var empDetails = document.getElementById('calc');
    var valorHora = document.getElementById('vHora');
    var turno1 = document.getElementById('dias_1');
    var turno2 = document.getElementById('dias_2');
    var turno3 = document.getElementById('dias_3');
    var auxTransport = document.getElementById('auxTransp');
    let total = 0;
    //total += (turno1.value * 570) + (turno2.value * 570) + (turno3.value * 570)
    console.log(valorHora.value)
    console.log(turno1.value)
    if(parseInt(valorHora.value) === 1600){
        total += (turno1.value * 10800) + (turno2.value * 12476) + (turno3.value * 13700);
    }else if(parseInt(valorHora.value) === 1650){
        total += (turno1.value * 11137.5) + (turno2.value * 12856.25) + (turno3.value * 14128.125);
    } else if(parseInt(valorHora.value) === 1700){
        total += (turno1.value * 11475) + (turno2.value * 13245.83) + (turno3.value * 14556.26);
    }
    total += (turno1.value * auxTransport.value) + (turno2.value * auxTransport.value) + (turno3.value * auxTransport.value)
    var diasTrabalhados = parseInt(turno1.value) + parseInt(turno2.value) + parseInt(turno3.value);
    total *= 0.83,56
    if(isNaN(total) || total === 0){
        empDetails.innerHTML = "Esqueceu de colocar algum dia<br> ou<br> O valor da hora trabalhada";
    } else {
        empDetails.innerHTML = "Seu salário líquido é: " + total.toFixed(2) + "<br>Totalizando " + diasTrabalhados + " dias trabalhados.";
    }
}


