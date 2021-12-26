
function prva__prva(){
    let x = prompt("Vnesi ime");
    let y = document.getElementById("prva__prva")
    y.innerText = "Pozdravljen " + x;
}
function prva__druga(){
    let x = Number(prompt("Vnesi stevilko:"));
    let y = document.getElementById("prva__cetrta");
    if(x > 0) {
        y.innerText = "Stevilka je pozitivna";
    }
    else {
        y.innerText = "Stevilka je negativna";
    }
}
function prva__tretja(){
   let s = Number(prompt("Vnesi pot"));
   let t = Number(prompt("Vnesi cas"));
   let y = document.getElementById("prva__tretja");

    y.innerText = "Hitrost je " + s/t " m/s";
}
function prva__cetrta(){
    let s = Number(prompt("Vnesi visino pravokotnika"));
    let t = Number(prompt("Vnesi dolzino katete"));
    let y = document.getElementById("prva__cetrta");
    y.innerText = "Ploscina je " + s*t/2 ;
}