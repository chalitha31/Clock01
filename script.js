var creg;
var dsRreg = 0;
var dsLreg = 0;
var cStatus = 0;
var Minit = 0;
var Hoverr = 0;
var Mreg;
var Hreg;
var sec;
var Hor;


var h;
var m;
var s;

var second;
var minits;
var hover;

function Secondpin() {
    // if (cStatus == 0) {
    //     setInterval(cRotate, 1000);
    //     cStatus = 1;
    // }

    var today = new Date();

    h = today.getHours();

    m = today.getMinutes();

    s = today.getSeconds();
    hover = ((h + 11) % 12 + 1);

    creg = s * 6;
    Mreg = m * 6;
    Hreg = hover * 30;



    second = document.getElementById("second");
    minits = document.getElementById("minits");
    hover = document.getElementById("hover");

    Hor = Hreg + m * 0.5;


    second.style.transform = "rotate(" + creg + "deg";
    minits.style.transform = "rotate(" + Mreg + "deg";
    hover.style.transform = "rotate(" + Hor + "deg";

    sbi.style.transform = "translate(-50%, -50%) rotate(" + creg + "deg";
    ")"
    mbi.style.transform = "translate(-50%, 50%) rotate(" + Mreg + "deg";
    ")"
    hbi.style.transform = "translate(-50%, 50%) rotate(" + Hor + "deg";

    if (cStatus == 0) {
        setInterval(cRotate, 1000);
        cStatus = 1;
    }



}

// function cRotate() {


//     var second = document.getElementById("second");
//     var minits = document.getElementById("minits");
//     var hover = document.getElementById("hover");

//     second.style.transform = "rotate(" + s * 6 + "deg";
//     minits.style.transform = "rotate(" + m * 6 + "deg";
//     hover.style.transform = "rotate(" + hours * 30 + "deg";

// }

function cRotate() {
    // var dsr = document.getElementById("dsr");
    // var dsl = document.getElementById("dsl");
    // var circlewrapid = document.getElementById("circlewrapid");

    dsRreg = dsRreg + 6;

    // alert(creg + "a")
    // alert(dsreg + "b")

    if (dsRreg >= 0 && dsRreg <= 180) {
        // circlewrapid.style.backgroundColor = "red";
        // maskl.style.backgroundColor = " #e5eee6";
        // dsr.style.transform = "rotate(" + dsRreg + "deg";
        // ")"


    }

    if (dsRreg > 180 && dsRreg <= 360) {
        // document.write(dsRreg);
        dsLreg = dsLreg + 6;
        //    dsl.style.backgroundColor = "blue";
        if (dsLreg == 180) {
            // dsl.style.transform = "rotate(0deg)";
            dsLreg = 0;
        }
        dsl.style.transform = "rotate(" + dsLreg + "deg";
        ")"

        if (dsRreg == 360) {
            dsRreg = 0;
            // circlewrapid.style.backgroundColor = " #e5eee6";
        }

    }



    // document.getElementById("stext").innerHTML = dsRreg / 6;


    // kalim////////////////

    var today = new Date();

    h = today.getHours();

    m = today.getMinutes();

    s = today.getSeconds();

    var hh = h < 10 ? "0" + h : h;
    var mm = m < 10 ? "0" + m : m;
    var ss = s < 10 ? "0" + s : s;

    // document.getElementById("hh").innerHTML = hh + "&nbsp;&nbsp;&nbsp;" + mm + "&nbsp;&nbsp;&nbsp;" + ss;
    //   background-image: linear-gradient(10deg, transparent 50%, rgb(211, 0, 0) 50%), linear-gradient(0deg, rgb(211, 0, 0) 50%, transparent 50%); 

    document.getElementById("hh").innerHTML = hh;
    document.getElementById("mm").innerHTML = mm;
    document.getElementById("ss").innerHTML = ss;

    var second = document.getElementById("second");
    var minits = document.getElementById("minits");
    var hover = document.getElementById("hover");



    var sbi = document.getElementById("sbi");
    var mbi = document.getElementById("mbi");
    var hbi = document.getElementById("hbi");

    creg = creg + 6;
    second.style.transform = "rotate(" + creg + "deg";
    ")"

    sbi.style.transform = "translate(-50%, -50%) rotate(" + creg + "deg";
    ")"

    dh.style.backgroundImage = "linear-gradient(" + creg + "deg, transparent 50%, rgb(211, 0, 0) 50%), linear-gradient(0deg, rgb(211, 0, 0) 50%, transparent 50%)";

    if (creg == 360) {
        creg = 0;
        Minit = 0;
        Mreg = Mreg + 6;

        minits.style.transform = "rotate(" + Mreg + "deg";
        ")"
        mbi.style.transform = "translate(-50%, 50%) rotate(" + Mreg + "deg";
        ")"
        Hor = Hor + 0.5;

        hover.style.transform = "rotate(" + Hor + "deg";
        hbi.style.transform = "translate(-50%, 50%) rotate(" + Hor + "deg";

        // if (Mreg == 360) {
        //     Mreg = 0;
        //     Hoverr = 0;
        //     Hreg = Hreg + 6;
        //     hover.style.transform = "rotate(" + Hreg + "deg";
        //     ")"
        // }
    }
}



// function three() {
//     var t = 1;

//     for (var i = 0; i < 10; i++) {

//         if (t == 0) {
//             alert(t);
//         }

//     }

//     alert("fuck").document.print;
// }