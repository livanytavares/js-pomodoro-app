const SECONDS = 1000
const MINUTES = SECONDS * 60
const HOURS = MINUTES * 60

const POMODORO_MINUTES = 30 * MINUTES
const SHORT_BREAK_MINUTES = 5 * MINUTES
const LONG_BREAK_MINUTES = 15 * MINUTES

var timerId;
var isTimerRunning = false;
const pauseTimer = () => {return isTimerRunning = false}
const startTimer = () => {return isTimerRunning = true}
var countDownMinutes = 30
var countDownSeconds = 60

timerId = setInterval(() => {
    if(isTimerRunning){
        if(countDownSeconds == 0 && countDownMinutes >= 0){
            countDownSeconds = 60
            countDownMinutes-- 
        }
        countDownSeconds--

        if (countDownMinutes == 0 && countDownSeconds == 0) {
            //TODO: Render the message on the UI
            console.log('Time Up!')

        }
        document.querySelector('#countDown').innerHTML = `${countDownMinutes}:${countDownSeconds}`
    }
}, 1000) 


const startPomodoro = () => {
    startTimer()
}

const pausePomodoro = () => {
    pauseTimer()
}

const finishPomodoro = () => {
    clearInterval(timerId)
    document.querySelector('#countDown').innerHTML = `0`
}





