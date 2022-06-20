console.log('JS file have been loaded') //

const SECONDS = 1000
const MINUTES = SECONDS * 60
const HOURS = MINUTES * 60

const POMODORO_MINUTES = 30 * MINUTES
const SHORT_BREAK_MINUTES = 5 * MINUTES
const LONG_BREAK_MINUTES = 15 * MINUTES

var dateTimeWhenThePomodoroStart = new Date().getTime()
var dateTimeWhenPomodoroShouldEnd = new Date(dateTimeWhenThePomodoroStart + POMODORO_MINUTES) 

const pausePomodoro = () => {
    console.log('pause have not be implemented')
}

const finishPomodoro = () => {
    console.log('finish have not be implemented')
}

const startPomodoro = () => {

    setInterval(() => {
        var now = new Date().getTime()

        var currentTimeLeftInMilisec = dateTimeWhenPomodoroShouldEnd - now

        var countDownMinutes = convertTimeLeftInMinutes(currentTimeLeftInMilisec)
        var countDownSeconds = convertTimeLeftInSeconds(currentTimeLeftInMilisec)

        if (currentTimeLeftInMilisec <= 0) {
            //TODO: Render the message on the UI
            console.log('Time Up!')
        }

        document.querySelector('#countDown').innerHTML = `${countDownMinutes}:${countDownSeconds}`
    
    }, 1000) 
}

const convertTimeLeftInMinutes = (timeInMilisec) => {
    return Math.trunc((timeInMilisec % HOURS) / MINUTES);
}

const convertTimeLeftInSeconds = (timeInMilisec) => {
    return Math.trunc((timeInMilisec % MINUTES) / SECONDS)
}




