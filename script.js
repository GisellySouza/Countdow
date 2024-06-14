const dia = document.getElementById("dia")
const hora = document.getElementById("hora")
const min = document.getElementById("min")
const seg = document.getElementById("seg")

const lancamento ="14 oct 2024"

function CountDow(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;

    const finaldias = Math.floor(segTotal / 60 / 60 / 24);
    const finalhoras = Math.floor(segTotal / 60 / 60 ) % 24;
    const finalminutos = Math.floor(segTotal / 60 ) % 24;
    const finalsegundos = Math.floor(segTotal) %60;

    dia.innerHTML = finaldias
    hora.innerHTML = formatoTempo(finalhoras)
    min.innerHTML = formatoTempo(finalminutos)
    seg.innerHTML = formatoTempo(finalsegundos)

}

function formatoTempo(tempo){
    return tempo <10? `0${tempo}` : tempo;
}

CountDow();
setInterval(CountDow, 1000)