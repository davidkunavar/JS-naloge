
function prva__prva(){
    let x = prompt("Vnesi ime");
    let y = document.getElementById("prva__prva")
    y.innerText = 'Pozdravljen' + x}
function prva__druga(){
    let x = Number(prompt("Vnesi stevilko:"));
    let y = document.getElementById("prva__druga");
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
   let v = s/t;
   let y = document.getElementById("prva__tretja");

    y.innerText = "Hitrost je" + v "m/s";
}
function prva__cetrta(){
    let s = Number(prompt("Vnesi visino pravokotnika"));
    let t = Number(prompt("Vnesi dolzino katete"));
    let p = s*t/2;
    let y = document.getElementById("prva__cetrta");
    y.innerText ="Povrsina je" + p;
}
function prva__peta(){
    let x = Number(prompt("Vnesi stevilo"));
    let y = document.getElementById("prva__peta");
    if (x/2 == 0 && x/7 == 0){
        y.innerText = "Je deljivo";
    }
    else{
        y.innerText = "Ni deljivo";
    }
}