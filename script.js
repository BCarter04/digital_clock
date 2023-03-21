let mt;
let t;
let d;
let h;
let c;
let ap;
const Options ={weekday: 'long',year: 'numeric', month: 'long', day: 'numeric'}
// update time
setInterval(() => {
    mt=new Date();
    d=mt.toLocaleDateString(undefined,Options);
    h=mt.toLocaleTimeString();

    ap = h>=12?'PM':'AM';
    c=(h%12)||12;

    document.getElementById('time').innerHTML = h;
    document.getElementById('date').innerHTML = "Today : " +d;

},1000);// updates time in every second (1000ms=1s)