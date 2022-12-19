class Timer {
  secondsInOneMinute = 60

  constructor(containerSelector) {
    // paņemsim wrapper elementu no dokumenta objekta
    this.timerWrapper = document.querySelector(containerSelector)

    // paņemsim pārējos elementus no wrapper
    this.startButton = this.timerWrapper.querySelector('.js-start')
    this.minutesLeftElement = this.timerWrapper.querySelector('.js-minutes')
    this.secondsLeftElement = this.timerWrapper.querySelector('.js-seconds')

    // sākumā uz lapas ielādi ir 10min, jeb 600s
    this.cuurentTimeInSeconds = 599
    
    // pasakam uzreiz, kad nospiežam pogu tad kaut ko darām
    this.startButton.addEventListener('click', () => {
      console.log(`clicked and current time is ${this.cuurentTimeInSeconds}`)
    })

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