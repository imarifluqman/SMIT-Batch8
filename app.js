

setInterval(function name() {
    let r = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);
    let g = Math.floor(Math.random() * 100);
    let colorcode = `rgb(${r},${g},${b})`;
    let box = document.getElementById("box");
    box.style.background = colorcode;

    box.innerText = colorcode;


}, 1000)

