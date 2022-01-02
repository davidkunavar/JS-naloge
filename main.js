
function prva__prva() {
    let x = prompt("Vnesi ime");
    let y = document.getElementById("prva__prva")
    y.innerText = `Pozdravljen ${x}`
}
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

    y.innerText = `Hitrost je ${v}`;
}
function prva__cetrta(){
    let s = Number(prompt("Vnesi visino pravokotnika"));
    let t = Number(prompt("Vnesi dolzino katete"));
    let p = s*t/2;
    let y = document.getElementById("prva__cetrta");
    y.innerText =`Povrsina je ${p}`;
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
function prva__sesta(){
    let x = Number(prompt("Vnesi smerni koeficient:"));
    let y = Number(prompt("Vnesi zacetni vrednost:"));
    let r = -x/y ;
    let a = document.getElementById("prva__sesta");
    a.innerText = `Nicla vrednost je ${r}`;
}

function prva__sedma(){
    let x = Number(prompt("Vnesi min:"));
    let y = Number(prompt("Vnesi max:"));
    let a = Number(prompt("Vnesi stevilko:"))
    let b = document.getElementById("prva__sedma")
    if ( a < x && a > y ){
        b.innerText = "Ni v obmocju";
    }
    else {
        b.innerText = "je v obmocju";
    }
}

function prva__osma(){
    let x1 = Number(prompt("Vnesi x1:"));
    let y1 = Number(prompt("Vnesi y1:"));
    let x2 = Number(prompt("Vnesi x2:"));
    let y2 = Number(prompt("Vnesi y2:"));
    let d = Math.sqrt((x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1));
    let q = document.getElementById("prva__osma");
    q.innerText = `Razdalja je ${d}`;
}

function druga__prva(){
    let h = Number(prompt("Vnesi ure:"));
    let m = Number(prompt("Vnesi miutne:"));
    let s = Number(prompt("Vnesi sekunde:"));
    let r = (h*60*60 + m*60 + s)*0.0084;
    let v = document.getElementById("druga__prva");
    v.innerText = `Kot je velik ${r} stopinj`;
}

function druga__druga(){
    let y = Number(prompt("Vnesi stevilko:"));
    let x = Number(prompt("Vnesi stevilko:"));
    let a = document.getElementById("druga__druga");
    if(y > x){
        a.innerText = `Vecja stevilka je ${y}`;
    }
    else {
        a.innerText = `Vecja stevilka je ${x}`;
    }
}

function druga__tretja(){
    let y = Number(prompt("Vnesi stevilko:"));
    let x = document.getElementById("druga__tretja");
    if (y > 0){
        x.innerText = `Predznak je +`;
    }
    else if (y = 0){
        x.innerText = `Nima predznaka`;
    }
    else {
        x.innerText = `Predznak je -`;
    }

}
function druga__cetrta(){
    let y = Number(prompt("Vnesi stevilko"));
    let x = document.getElementById("druga__cetrta");
    if (y == 1){
        x.innerText = "pon";
    }
    else if (y == 2){
        x.innerText = "tor";
    }
    else if (y == 3){
        x.innerText = "sre";
    }
    else if (y == 4){
        x.innerText = "cet";
    }
    else if (y == 5){
        x.innerText = "pet";
    }
    else if (y == 6){
        x.innerText = "sob";
    }
    else if (y == 7){
        x.innerText = "ned";
    }
}

function druga__peta(){
    let x1 = Number(prompt("Vnesi x tocke"));
    let y1 = Number(prompt("Vnesi y tocke"));
    let r = Number(prompt("Vnesi radij kroga"));
    let x2 = Number(prompt("Vnesi x sredisca"));
    let y2 = Number(prompt("Vnesi y sredisca"));
    let d = Math.sqrt((x2 - x1)*(x2 - x1) + (y2 - y1)*(y2 - y1));

    let q = document.getElementById("druga__peta");
    if (d > r){
        q.innerText = "ne lezi v krogu";
    }
    else {
        q.innerText = "lezi v krogu";
    }

}

function druga__sesta(){
    let y = Number(prompt("Vnesi stevilko:"));
    let x = Number(prompt("Vnesi stevilko:"));
    let e = Number(prompt("Vnesi stevilko:"));
    let a = document.getElementById("druga__sesta");
    if(y > x && y > e){
        a.innerText = `Najvecja stevilka je ${y}`;
    }
    else if(x > y && x > e){
        a.innerText = `Najvecja stevilka je ${x}`;
    }
    else {
        a.innerText = `Najvecja stevilka je ${e}`;
    }
}

function druga__sedma(){
    let y = Number(prompt("Vnesi stevilko:"));
    let x = document.getElementById("druga__sedma");
    let vsota = 0;
    for (let i = 0; i < y+1; i++) {
        vsota = i + vsota;
    }
    x.innerText = `Vsota je ${vsota}`;
}
function druga__osma(){
    let z = document.getElementById("druga__osma");
    let vsota = 0;
    while (true){
        let x = Number(prompt("Vnesi stevilko:"));
        if(x != 0){
            vsota = vsota + x;
        }
        else {
            break
        }

    }
    z.innerText = `Vsota je ${vsota} `;
}
function tretja__prva(){
    let x = document.getElementById("tretja__prva");
    let vsota = 0;
    let deljivec = 0;

    while (true){
        let z = Number(prompt("Vnesi stevilko"));

        if (z != 0){
            vsota = vsota + z;
            deljivec += 1;
        }
        else if(z == 0){
            break
        }
        }
    let rez = vsota/deljivec;
    x.innerText = `Povprecje je ${rez}`;

}

function tretja__druga(){
    let skrita = Number(prompt("Vnesi skrito stevilko:"));
    let y = document.getElementById("tretja__druga");
    while (true){
        let x = Number(prompt("Ugibaj!"));
        if (x == skrita){
            break

        }
        else {
            alert("Poizusi ponovno :|");
        }
    }
    y.innerText = "Uganil se!!";
}
function tretja__tretja(){
    let a = Number(prompt("Vnesi stevilko"))
    let b = document.getElementById("tretja__tretja")
    for (let y = 0; y < a; y++) {
        for (let x = 0; x < a; x++) {
            alert("&")
        }
    }
}
function  tretja__cetrta(){

}

function tretja__peta(){
    let x = document.getElementById("tretja__peta");
    let besedilo = prompt("Vnesi besedilo:");
    let vsota = 0;
    for (let i = 0; i < besedilo.length; i++) {
        if(besedilo[i] == " "){
            vsota += 1;
        }
    }
    vsota = vsota + 1;
    x.innerText = `Besidilo ima ${vsota} besed`
}

function tretja__sesta(){
    let x = document.getElementById("tretja__sesta");
    let besedilo = prompt("Vnesi povedi:")
    vsota = 0;
    for (let i = 0; i < besedilo.length; i++) {
        if (besedilo[i] == "."){
            vsota += 1;
        }
    }
    if(vsota = 1){
        x.innerText = `V besedilu je ${vsota} poved.`;
    }
    else if(vsota = 2){x.innerText = `V besedilu sta ${vsota} povedi.`;
    }

}
function tretja__sedma(){
    let x = document.getElementById("tretja__sedma");
    let besedilo = prompt("vnesi besedilo");
    let vsota = 0;
    for (let i = 0; i < besedilo.length; i++) {
        if(besedilo[i] > "a" && besedilo[i] < "z")
            vsota += 1;
        if(besedilo[i] > "A" && besedilo[i] < "Z")
            vsota += 1;
    }
    x.innerText = `V besedilu je ${vsota} crk`
}

function tretja__osma(){
    let x = document.getElementById("tretja__osma");
    let besedilo = prompt("Vnesi besedilo:")
    let vsota = 0;
    for (let i = 0; i < besedilo.length; i++) {
        if(besedilo[i] > "!" && besedilo[i] < "/"){
            vsota += 1;
        }
        else if(besedilo[i] > ":" && besedilo[i] < "@"){
            vsota += 1;
        }
        else if(besedilo[i] > "[" && besedilo[i] < "_"){
            vsota += 1;
        }
    }
    x.innerText = `V besedilu je ${vsota} znakov.`
}

