class Timer {
  constructor(containerSelector) {
    this.timerWrapper = document.querySelector(containerSelector)
    this.startButton = this.timerWrapper.querySelector('.js-start')
    this.minutesLeft = this.timerWrapper.querySelector('.js-minutes')
    this.secondsLeft = this.timerWrapper.querySelector('.js-seconds')

    this.cuurentTimeInSeconds = 600
    

    this.startButton.addEventListener('click', () => {
      console.log(`clicked and current time is ${this.cuurentTimeInSeconds}`)
    })

    console.log(this);
  }

}


const timer = new Timer('.js-timer')