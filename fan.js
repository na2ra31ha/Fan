let power = 50;
let charge = 50;
let duration = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let initialDuration = duration.length + 's';

const fanBattery = document.getElementById("fan-battery");
const barCharge = document.getElementById("bar-charge");
const startFan = document.getElementById("startUp-btn");
const powerBtn = document.getElementById("power-btn");
const chargeBtn = document.getElementById("charge-btn");
const aFan = document.getElementById("FAN");
const text = document.getElementById("text-input");

function bootFan(){
    duration = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    initialDuration = duration.length + 's';
     aFan.style.animationDuration = initialDuration;
     startFan.style.display = "none";
     powerBtn.classList.remove('hide');
     chargeBtn.classList.remove('hide');
     powerBtn.classList.add('move-up');
     chargeBtn.classList.add('move-up');
   text.innerHTML = `~Click the <strong>Power button</strong> to increase the <em>fan</em> speed`; 
}
function increaseSpeed(){
   if(power > 0){
    duration.pop();
    if(duration.length == 1){
        resetFan();
        text.innerHTML = `~You've reached the <strong>highest</strong> the fan can go <em>enjoy the breeze</em> or Start-Again`;
    }
    initialDuration = duration.length + 's';
    aFan.style.animationDuration = initialDuration;
    power -= 5;
    fanBattery.innerText = power + "%";
   } 
   else if(power <= 0){
    text.innerHTML = `~Your fan battery is <strong>Finish</strong> click charge to <em>boost up</em>`;
    if(power <= 0 && charge <= 0){
        duration = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        resetFan();
        text.innerHTML = `~<strong>Out of Charge!! Fan Reset</strong>`;
    }
   }
    
}
function chargeUp(){
    if(charge > 0){
        charge -= 8;
        power += 10;
        barCharge.innerText = charge + "%";
        fanBattery.innerText = power + "%";
    }
   
}
function resetFan(){
    power = 55;
    charge = 50;
    fanBattery.innerText = power + '%';
    barCharge.innerText = charge + '%';
    startFan.style.display = "block";
    powerBtn.classList.add('hide');
    chargeBtn.classList.add('hide');
    powerBtn.classList.remove('move-up');
    chargeBtn.classList.remove('move-up');
}







startFan.addEventListener('click', bootFan);
powerBtn.addEventListener('click', increaseSpeed);
chargeBtn.addEventListener('click', chargeUp);