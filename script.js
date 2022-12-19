class Timer {
  // iesetojam konstanti
  secondsInOneMinute = 60

  // constructor izpildīsies vienu reizi sākumā
  constructor(containerSelector, time) {
    // paņemsim wrapper elementu no dokumenta objekta
    this.timerWrapper = document.querySelector(containerSelector)

    // paņemsim pārējos elementus no wrapper
    this.startButton = this.timerWrapper.querySelector('.js-start')
    this.stopButton = this.timerWrapper.querySelector('.js-stop')
    this.minutesLeftElement = this.timerWrapper.querySelector('.js-minutes')
    this.secondsLeftElement = this.timerWrapper.querySelector('.js-seconds')
    this.audioAlarm = this.timerWrapper.querySelector('.js-audio')
    this.resetButton = this.timerWrapper.querySelector('.js-reset')

    // intervāla identifikators, lai varētu viņu vēlāk apturēt
    this.intervalId = null
    // izveidosim mainīgo, kas glabā orģinālo sekunžu skaitu, kuru nemainīsim
    this.timerLength = time

    // izveidojam mainīgo, kurā būs esošais laiks, kuru var mainīt
    this.cuurentTimeInSeconds = this.timerLength

    // aizpildam HTML ar MM un SS vērtībām
    this.setMinutesAndSeconds()

    // izsaucam metodi, kura pieliek start pogai click eventu
    this.addStartEvent()
    // izsaucam metodi, kura pieliek klāt pogai click eventu
    this.addResetEvent()
  }

  addResetEvent() {
    this.resetButton.addEventListener('click', () => {
        this.resetTimerTime()
        this.clearCurrentInterval()
        this.setMinutesAndSeconds()
        this.audioAlarm.pause()
    })
  }

  resetTimerTime() {
    // uzliekam laiku uz orģināli klasei padoto laiku
    this.cuurentTimeInSeconds = this.timerLength
  }

  playAlarm() {
    // spēlējam alarmu
    this.audioAlarm.play()
  }

  addStartEvent() {
    // pasakam uzreiz, kad nospiežam pogu tad kaut ko darām
    this.startButton.addEventListener('click', () => {
      // ja intervāls jau ir aktīvs tad apturam, ja nē tad sākam
      if(this.intervalId) {
        // iztīram esošo intervālu
        this.clearCurrentInterval()
      } else {
        // izveidojam jaunu intervālu
        this.setCurrentInterval()
      }
    })
  }

  setCurrentInterval() {
    // izveidojam intervālu, kurš skaita katras 1000ms jeb sekundi
    this.intervalId = setInterval(() => {

      // ja timeris ir nulle tad
      if(this.cuurentTimeInSeconds === 0) {
        // spēlējam alarmu
        this.playAlarm()
        // apturam intervālu
        this.clearCurrentInterval()
        // atjaunojam laiku taimerim uz sākuma
        this.resetTimerTime()
      } else {
        // samazinam laiku par vienu sekundi
        this.cuurentTimeInSeconds = this.cuurentTimeInSeconds - 1
      }
      // liekam klasei atkal iesetot aktuālās sekundes
      this.setMinutesAndSeconds()
    }, 1000)   

    // nomainam pogas tekstu
    this.addtextToButton('Stop Timer')

  }

  clearCurrentInterval() {
    // apturam intervālu pēc identifikatora, kuru iesetojam tad kad izveidojam intervalu
    clearInterval(this.intervalId)
    // ja mēs iztīram intervālu tad atgriežam intervalId uz null
    this.intervalId = null

    this.addtextToButton('Start Timer')
  }

  addtextToButton(text) {
    this.startButton.innerHTML = text
  }
  
  setMinutesAndSeconds() {
    // iesetojam vērtības mūsu HTMLā
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
const timer = new Timer('.js-timer', 600)


// Reset opciju ieviest
// ievadīt savu laiku
