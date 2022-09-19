//
function Calcular() {
    const monto = Number(document.querySelector("#monto").value);
    let meses = Number(document.querySelector("#meses").value);
    let inter = (0.27 * monto);
    let total = ((monto + inter) / meses).toFixed(2);
    alert(`Cuotas de ${total}`);
}   
