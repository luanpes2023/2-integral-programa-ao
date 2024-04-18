const dataATual=new Date();
let dataObjetivo=prompt("Data final Ano-mes-dia Ex:2024-04-10");
dataObjetivo=new Date(dataObjetivo + "T23:59:")
let diasQueFaltam=math.floor((dataObjetivo-dataAtual)/86400000);
document.querySelector("#dias_restantes").textContent = diasQuefaltam;