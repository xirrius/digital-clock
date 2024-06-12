const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const day = document.getElementById('day');
const date = document.getElementById('date');
const month = document.getElementById('month');
const year = document.getElementById('year');

const arr = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
]

const id = setInterval(() =>{
    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let dt = new Date().getDate();
    let mnth = new Date().getMonth();
    let yr = new Date().getFullYear();
    let dy = new Date().getDay();

    hour.innerHTML = hr
    minute.innerHTML = min
    second.innerHTML = sec
    day.innerHTML = arr[dy-1] + ","
    date.innerHTML = dt
    month.innerHTML = mnth
    year.innerHTML = yr

}, 1000)