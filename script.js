// console.log("Hello!")
function CtoF(Cel){
    let Fal = ((9/5)*Cel) + 32;
    return Math.round(Fal);
}

function FtoC(Fal){
    let Cel = (5/9)*(Fal-32);
    return Math.round(Cel);
}

const highBox = document.querySelectorAll(".high");
const lowBox = document.querySelectorAll(".low")


function degreeswitch(element){
    if(element.value == "C") {
        for(let i = 0; i < highBox.length; i++){
            highBox[i].innerText = FtoC(highBox[i].innerText)
        }
        for(let i = 0; i < lowBox.length; i++){
            lowBox[i].innerText = FtoC(lowBox[i].innerText)
        }

    }   
    else if(element.value == "F"){
        for(let i = 0; i < highBox.length; i++){
            highBox[i].innerText = CtoF(highBox[i].innerText)
        }
        for(let i = 0; i < lowBox.length; i++){
            lowBox[i].innerText = CtoF(lowBox[i].innerText)
            console.log(lowBox[0].innerText + "F")
        }
    }
}

