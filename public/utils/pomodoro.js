const SECONDS = 1000
const MINUTES = SECONDS * 60
const HOURS = MINUTES * 60

const POMODORO_MINUTES = 30 * MINUTES
const SHORT_BREAK_MINUTES = 5 * MINUTES
const LONG_BREAK_MINUTES = 15 * MINUTES

class Timer {
    seconds = 60
    isRunning = false
    timerID = null

    constructor(minutes){
        this.minutes = minutes
    }

    countDown = () => {
        return setInterval(() => {
        
            if(this.isRunning){
                if(this.seconds == 0 && this.minutes >= 0){
                    this.seconds = 60
                    this.minutes-- 
                }
                this.seconds--
        
                if (this.minutes == 0 && this.seconds == 0) {
                    //TODO: Render the message on the UI
                    console.log('Time Up!')
        
                }
                document.querySelector('#countDown').innerHTML = `${this.minutes}:${this.seconds}`
            }}, 1000)
    }

    start = () => {
        this.startTimer()
        
        if(!this.timerID){
            this.timerID = this.countDown() 
        }
    }

    pause = () => {
        this.pauseTimer()
    }

    reset = () => {
        clearInterval(this.timerID)
        this.timerID = null
        this.minutes = 29 //?
        this.seconds = 60
        document.querySelector('#countDown').innerHTML = `0`
    }

    startTimer = () => {return this.isRunning = true}
    pauseTimer = () => {return this.isRunning = false}
}

const timer = new Timer(29)

const startPomodoro = () => {
    timer.start()
}

const pausePomodoro = () => {
    timer.pause()
}

const resetPomodoro = () => {
    timer.reset()
}