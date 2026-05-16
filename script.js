let chart;

function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

function checkRisk(){
let amount = Number(document.getElementById("amount").value);
let country = document.getElementById("country").value;
let device = document.getElementById("device").value;

let risk = 10;

if(amount > 5000) risk += 40;
else if(amount > 2000) risk += 20;

if(country === "Неизвестно") risk += 30;
if(device === "Неизвестное устройство") risk += 20;
if(device === "Общественный компьютер") risk += 10;

let title = risk >= 80 ? "🔴 Высокий риск" :
risk >= 50 ? "🟡 Средний риск" :
"🟢 Низкий риск";

let text = risk >= 80 ? "Опасная транзакция" :
risk >= 50 ? "Будьте осторожны" :
"Всё безопасно";

document.getElementById("resultTitle").innerText = title;
document.getElementById("resultText").innerText = text;

updateChart(risk);
}

function updateChart(risk){
if(chart) chart.destroy();

chart = new Chart(document.getElementById("chart"),{
type:"doughnut",
data:{
labels:["Риск","Безопасно"],
datasets:[{
data:[risk,100-risk],
backgroundColor:["#ef4444","#2563eb"]
}]
}
});
}

function openFraud(title,text){
document.getElementById('fraudModal').style.display='flex';
document.getElementById('fraudTitle').innerText=title;
document.getElementById('fraudText').innerText=text;
}

function closeFraud(){
document.getElementById('fraudModal').style.display='none';
}

window.onclick=function(e){
const modal=document.getElementById('fraudModal');
if(e.target===modal){
modal.style.display='none';
}
}

updateChart(20);