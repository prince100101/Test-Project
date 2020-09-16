const celciusinput= document.querySelector("#celcius > input");
const fahrenheitinput= document.querySelector("#fahrenheit > input");
const kelvininput= document.querySelector("#kelvin > input");

function roundnum(num){
    return Math.round(num*100)/100;
}

function ctofk(){
    const ctemp= parseFloat(celciusinput.value);
    const ftemp= ctemp*(9/5)+32;
    const ktemp= ctemp+273.15;
    fahrenheitinput.value=roundnum(ftemp);
    kelvininput.value=roundnum(ktemp);

}
function ftock(){
    const ftemp= parseFloat(fahrenheitinput.value);
    const ctemp= (ftemp-32)*(5/9);
    const ktemp= (ftemp+459.67)*(5/9);
    celciusinput.value=roundnum(ctemp);
    kelvininput.value=roundnum(ktemp);

}
function ktocf(){
    const ktemp= parseFloat(kelvininput.value);
    const ctemp= ktemp-273.15;
    const ftemp= (ktemp-273.15)*(9/5)+32;
    fahrenheitinput.value=roundnum(ftemp);
    celciusinput.value=roundnum(ctemp);

}
celciusinput.addEventListener('input',ctofk);
fahrenheitinput.addEventListener('input',ftock);
kelvininput.addEventListener('input',ktocf);
