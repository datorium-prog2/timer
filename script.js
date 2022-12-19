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

    // intervāla identifikators, lai varētu viņu vēlāk apturēt
    this.intervalId = null

    // sākumā uz lapas ielādi ir 10min, jeb 600s
    this.cuurentTimeInSeconds = 600

    // aizpildam HTML ar MM un SS vērtībām
    this.setMinutesAndSeconds()

    // izsaucam metodi, kura pieliek pogām click eventu
    this.addStartEvent()
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
      // samazinam laiku par vienu sekundi
      this.cuurentTimeInSeconds = this.cuurentTimeInSeconds - 1
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
const timer = new Timer('.js-timer')


// Kas notiek, kad timeris sasniedz 0 sekundes
// Var atkārtoti spaidīt start pogu
// Reset opciju ieviest
// ievadīt savu laiku
// kaut kāds paziņojums, tad kad laiks ir beidzies
//