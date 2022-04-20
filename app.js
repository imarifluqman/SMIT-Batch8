
function myFunction() {
    let colorcode = document.getElementById("colorcode").value;
    document.getElementById("hexcode").innerHTML = colorcode;
}

let r = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);
let g = Math.floor(Math.random() * 100);

document.body.style.background= rba(r,g,b);

console.log(r, b, g);