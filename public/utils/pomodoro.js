console.log('JS file have been loaded') //

const SECONDS = 1000
const MINUTES = SECONDS * 60
const HOURS = MINUTES * 60

const POMODORO_MINUTES = 30 * MINUTES
const SHORT_BREAK_MINUTES = 5 * MINUTES
const LONG_BREAK_MINUTES = 15 * MINUTES

var dateTimeWhenThePomodoroStart = new Date().getTime()
var dateTimeWhenPomodoroShouldEnd = new Date(dateTimeWhenThePomodoroStart + POMODORO_MINUTES) 

var counterId;
var isCounterRunning = false;
const pauseCounter = () => {return isCounterRunning = false}
const startCounter = () => {return isCounterRunning = true}
var countDownMinutes = 30
var countDownSeconds = 60

counterId = setInterval(() => {
    if(isCounterRunning){
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

const pausePomodoro = () => {
    pauseCounter()
}

const finishPomodoro = () => {
    document.querySelector('#countDown').innerHTML = `0`
}

const startPomodoro = () => {
    startCounter()
}

const convertTimeLeftInMinutes = (timeInMilisec) => {
    return Math.trunc((timeInMilisec % HOURS) / MINUTES);
}

const convertTimeLeftInSeconds = (timeInMilisec) => {
    return Math.trunc((timeInMilisec % MINUTES) / SECONDS)
}




