//
function Calcular() {
    const monto = document.querySelector("#monto").value;
    let meses = document.querySelector("#meses").value
    let inter = (meses * 0.25);
    const interes = (monto * inter) / meses;
    const total = ((monto / meses) + interes).toFixed(2);
    document.querySelector("#total")
        alert ("Cuotas de : " + total);
}
