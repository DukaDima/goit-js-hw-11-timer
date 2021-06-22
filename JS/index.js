console.log('goit-js-hw-11-timer');

// обїявление класса----------------
class CountdownTimer {
  constructor({ refs, targetDate }) {
    this.refs = refs; 
      this.targetDate = targetDate;
      this.intervalID = null;
  }


  start() {
      this.intervalID =  setInterval(() => {
      const currentDate = Date.now();
      const deltaTime = this.targetDate - currentDate;
          if (deltaTime <= 0) {
              this.stop();
              return;
              
          } else {
                this.timeLeft = this.getTimeComponents(deltaTime);
               this.updateView(this.timeLeft);
                  }

    
    }, 1000);
  }


  getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    return { days, hours, mins, secs };
  }

  updateView({ days, hours, mins, secs }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
  }
    stop() {
        refs.days.textContent = '00';
        refs.hours.textContent ='00';
        refs.mins.textContent = '00';
        refs.secs.textContent = '00';
        
        clearInterval(this.intervalID);
        
        // console.log('Лето кончилось')
    }
    
}
  // массив ссылок -----------------------------
const refs = {
  timer: document.getElementById('timer-1'),
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]')
};

// вызов єкземпляра --------------------------------
const timer1 = new CountdownTimer({
  refs,
  targetDate: new Date('Sep 01, 2021')
});

timer1.start();
// раскрасил таймер ------------------------------

refs.timer.style.backgroundColor = 'red'
refs.timer.style.display = 'flex'
refs.timer.style.padding = '20px'

refs.days.style.color = `yellow`
refs.days.style.fontSize = `25px`
refs.days.style.marginLeft = `10px`
refs.days.style.marginRight = `3px`

refs.hours.style.color = `yellow`
refs.hours.style.fontSize = `25px`
refs.hours.style.marginLeft = `10px`
refs.hours.style.marginRight = `3px`

refs.mins.style.color = `yellow`
refs.mins.style.fontSize = `25px`
refs.mins.style.marginLeft = `10px`
refs.mins.style.marginRight = `3px`

refs.secs.style.color = `yellow`
refs.secs.style.fontSize = `25px`
refs.secs.style.marginLeft = `10px`
refs.secs.style.marginRight = `3px`
