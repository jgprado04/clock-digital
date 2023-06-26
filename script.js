
function setTime() {
    let date = new Date()
    let h1 = document.querySelector("h1");
    h1.textContent = date.toLocaleTimeString();

    let p1 = document.querySelector("p1");
    p1.textContent = date.toDateString();
}

setInterval(setTime, 1000);

