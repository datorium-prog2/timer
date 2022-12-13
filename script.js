class Timer {
  constructor(containerSelector) {
    // paņemsim wrapper elementu no dokumenta objekta
    this.timerWrapper = document.querySelector(containerSelector)
    // paņemsim pārējos elementus no wrapper
    this.startButton = this.timerWrapper.querySelector('.js-start')
    this.minutesLeft = this.timerWrapper.querySelector('.js-minutes')
    this.secondsLeft = this.timerWrapper.querySelector('.js-seconds')

    // sākumā uz lapas ielādi ir 10min, jeb 600s
    this.cuurentTimeInSeconds = 600
    
    // pasakam uzreiz, kad nospiežam pogu tad kaut ko darām
    this.startButton.addEventListener('click', () => {
      console.log(`clicked and current time is ${this.cuurentTimeInSeconds}`)
    })

    console.log(this);
  }

}

// Enkapsukēsim visu timeri zem viena wrappera
const timer = new Timer('.js-timer')