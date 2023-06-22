/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let value = 0;
const convertbtn = document.getElementById("convert-btn");
const distance = document.getElementById("length-conversions") ;
const volume = document.getElementById("volume-conversions");
const mass = document.getElementById("mass-conversions");


convertbtn.addEventListener("click", function()
    {
        console.log("BUtton Clicked!");
        value = document.getElementById("number-fld").value;
        updateValues();
    }
)



function updateValues(){
    distance.textContent =`${value} meters = ${convertDistanceUSA(value)} feet | ${value} feet = ${convertDistanceUk(value)} meters`;
    volume.textContent =`${value} liters = ${convertVolumeUSA(value)} gallons | ${value} gallons = ${convertVolumeUk(value)} liters`;
    mass.textContent =`${value} kilos = ${convertMassUSA(value)} pounds | ${value} pounds = ${convertMassUk(value)} kilos`;
}


function convertDistanceUSA(num){
    return (num * 3.281).toFixed(3);

}

function convertVolumeUSA(num){
    return (num * 0.2641).toFixed(3);

}

function convertMassUSA(num){
    return (num * 2.204).toFixed(3);
    
}

function convertDistanceUk(num){
    return (num / 3.281).toFixed(3);

}

function convertVolumeUk(num){
    return (num / 0.2641).toFixed(3);

}

function convertMassUk(num){
    return (num / 2.204).toFixed(3);
}

