var ms=0,s=0,m=0;
var timer;
// var button = document.getElementById("controls");
var stopwatch = document.querySelector(".stopwatch");
function start(){
	// if(!timer){
		timer = setInterval(run , 10);
	// }
}
function run(){
	stopwatch = m + ":" + s +":" + ms;
	ms++;
	if(ms = 100){
		ms = 0;
		s++;
	}
	if(s = 60){
		s = 0;
		m++;
	}
}
// function pause(){
// 	clearInterval(timer);
// 	timer = false;
// }
// function stop(){
// 	ms = 0;
// 	s = 0;
// 	m = 0;
// 	stopwatch = m + ":" + s +":" + ms;
// }
// function restart(){
// 	stop();
// 	start();
// }