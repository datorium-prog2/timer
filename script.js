class Timer {
  secondsInOneMinute = 60

  constructor(containerSelector) {
    // paņemsim wrapper elementu no dokumenta objekta
    this.timerWrapper = document.querySelector(containerSelector)

    // paņemsim pārējos elementus no wrapper
    this.startButton = this.timerWrapper.querySelector('.js-start')
    this.stopButton = this.timerWrapper.querySelector('.js-stop')
    this.minutesLeftElement = this.timerWrapper.querySelector('.js-minutes')
    this.secondsLeftElement = this.timerWrapper.querySelector('.js-seconds')

    this.intervalId = null

    // sākumā uz lapas ielādi ir 10min, jeb 600s
    this.cuurentTimeInSeconds = 600

    // aizpildam HTML ar MM un SS vērtībām
    this.setMinutesAndSeconds()

    // pasakam uzreiz, kad nospiežam pogu tad kaut ko darām
    this.startButton.addEventListener('click', () => {
      this.intervalId = setInterval(() => {
        this.cuurentTimeInSeconds = this.cuurentTimeInSeconds - 1
        this.setMinutesAndSeconds()
      }, 1000)   
    })

    this.stopButton.addEventListener('click', () => {
      clearInterval(this.intervalId)
      this.intervalId = null
    })
  }
  
  setMinutesAndSeconds() {
    this.minutesLeftElement.innerHTML = this.wholeMinutes()
    this.secondsLeftElement.innerHTML = this.wholeSeconds()
  }

  timeInSecondsDivideByOneMin() {
    return (this.cuurentTimeInSeconds / this.secondsInOneMinute) 
  }

  wholeMinutes() {
    return Math.floor(this.timeInSecondsDivideByOneMin());
  }

  wholeSeconds() {
    return this.cuurentTimeInSeconds % this.secondsInOneMinute
  }
}

// Enkapsukēsim visu timeri zem viena wrappera
const timer = new Timer('.js-timer')
