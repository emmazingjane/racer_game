var car1 = document.getElementById("car1");
var car2 = document.getElementById("car2");
car1.position = 0;
car2.position = 0;

function move (car){
	// document.getElementById("car1").addEventListener('keyup',function(event){
	// car1.style.left = lastPosition + 100 + "px";
	// turn it into a number so we can math

	var newPosition = car.position + 40;
	car.position = newPosition;
	car.style.left = newPosition + 'px'; 

	// each time the car moves to new position it loops to move again from the spot

};

	document.body.addEventListener('keyup',function(event){
	  if(event.key === 'ArrowRight'){
	    console.log('car1');
	    move(car1);
	  } else if(event.key === "ArrowLeft"){
	    console.log('car2')
	    move(car2);
	  }
	  checkWinner();

	  // how to control the car with a keyboard
});
	

function checkWinner(){
  if (car1.position >= 1000) {
    setWinState('car1');
  };
  if (car2.position >= 1000) {
    setWinState('car2');
  };
};
 
function setWinState(car){
	alert(car + 'is the winner!');
}

// when the page selects a winner, how far along the page

function countdown(minutes) {
    var seconds = 60;
    var mins = minutes
    function tick() {
        //This script expects an element with an ID = "counter". You can change that to what ever you want. 
        var counter = document.getElementById("counter");
        var current_minutes = mins-1
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            if(mins > 1){
                countdown(mins-1);           
            }
        }
    }
    tick();
}

countdown(1);

// added counter to start  button




	// document.getElementById("car2").addEventListener('keyup',function(event){

	// var lastPosition = parseInt(car2.style.left, 10);
	// // turn it into a number so we can math
	// console.log(lastPosition);

	// var newPosition = lastPosition + 40;
	// // 
	// document.getElementById("car2").style.left = newPosition + "px"; 

	// // logging the last position its in
	// console.log(car2.style.left);
	
	// };






