/* --------------------------
 * GLOBAL VARS
 * -------------------------- */
// The date you want to count down to
var targetDate = new Date("2024/04/15 23:59:59");   

// Other date related variables
var days; 
var hrs; 
var min; 
var sec; 

/* --------------------------
 * ON DOCUMENT LOAD
 * -------------------------- */
function timeToLaunch(){
    var currentDate = new Date();
    var diff = (targetDate - currentDate) / 1000; // Segundos hasta la meta

    if(diff <= 0){
        // Si la fecha ya pasó
        days = hrs = min = sec = 0;
    } else {
        days = Math.floor(diff / (24 * 60 * 60));
        sec = diff - days * 24 * 60 * 60;

        hrs = Math.floor(sec / (60 * 60));
        sec -= hrs * 60 * 60;

        min = Math.floor(sec / 60);
        sec = Math.floor(sec - min * 60);
    }
}

/* --------------------------
 * DISPLAY THE CURRENT 
   COUNT TO LAUNCH
 * -------------------------- */
   function countDownTimer(){
    timeToLaunch();

    document.getElementById('days').querySelector('.number').textContent = days;
    document.getElementById('hours').querySelector('.number').textContent = hrs;
    document.getElementById('minutes').querySelector('.number').textContent = min;
    document.getElementById('seconds').querySelector('.number').textContent = sec;

    setTimeout(countDownTimer, 1000);
}

document.addEventListener('DOMContentLoaded', function(){
    countDownTimer();
});

/* --------------------------
 * TRANSITION NUMBERS FROM 0
   TO CURRENT TIME UNTIL LAUNCH
 * -------------------------- */
function numberTransition(id, endPoint, transitionDuration, transitionEase){
  // Transition numbers from 0 to the final number
  $({numberCount: $(id).text()}).animate({numberCount: endPoint}, {
      duration: transitionDuration,
      easing:transitionEase,
      step: function() {
        $(id).text(Math.floor(this.numberCount));
      },
      complete: function() {
        $(id).text(this.numberCount);
      }
   }); 
};

function updateFundingStatus(amountRaised, goalAmount, participants) {
  const percentageRaised = (amountRaised / goalAmount) * 100;

  document.getElementById('amount-raised').textContent = `$${amountRaised.toLocaleString()}`;
  document.getElementById('percentage').textContent = percentageRaised.toFixed(2) + '%';

  document.getElementById('progress-bar').style.width = percentageRaised + '%';

  document.getElementById('participants-count').textContent = participants.toLocaleString();
}

updateFundingStatus(2448894.41, 3000000, 12917);


