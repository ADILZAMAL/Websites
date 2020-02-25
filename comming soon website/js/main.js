const countdown = document.querySelector('.countdown');
// set launch date
const launchDate= new Date('dec 1,2020 10:00:00').getTime();

//update every second
const intvl=setInterval(() => {
 //get today time in milli second
    const now = new Date().getTime();
    //Distance from now to lanunch date
    const distance = launchDate-now;
    //calculation to get days hour min and second
    const day=Math.floor(distance/(1000*60*60*24));
    const hour=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    const min=Math.floor((distance%(1000*60*60))/(1000*60));
    const sec=Math.floor((distance%(1000*60)) / 1000);
//display result
countdown.innerHTML = `
<div>${day}<span>Days</span></div>
<div>${hour}<span>Hours</span></div>
<div>${min}<span>Minutes</span></div>
<div>${sec}<span>Seconds</span></div>
`;
if(distance<0){
    clearInterval(intvl);
    countdown.style.color='#17a2b8';
    countdown.innerHTML='Launched!';
}
},1000);
