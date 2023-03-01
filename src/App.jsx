import Title from './components/Title'
import Counter from './components/Counter'

import useContdown from './hooks/useCountdown'

import israel from './assets/israel.jpg'

import './App.css'

function App() {
  const [day, hour, minute, second] = useContdown("Mar 8, 2023 12:00:00")
  const [day2, hour2, minute2, second2] = useContdown("Sep 8, 2023 12:00:00")
  const [day3, hour3, minute3, second3] = useContdown("Nov 8, 2023 12:00:00")

  return (
    <div className="App" style={{ backgroundImage: `url(${israel}` }} >
      <div className="container">
        <Title title='Israel' />
        <div className="countdown-container">
          <Counter title='Dias' number={day} />
          <Counter title='Horas' number={hour} />
          <Counter title='Minutos' number={minute} />
          <Counter title='Segundos' number={second} />
        </div>
        <Title title='Selichot' />
        <div className="countdown-container">
          <Counter title='Dias' number={day2} />
          <Counter title='Horas' number={hour2} />
          <Counter title='Minutos' number={minute2} />
          <Counter title='Segundos' number={second2} />
        </div>
        <Title title='Polônia' />
        <div className="countdown-container">
          <Counter title='Dias' number={day3} />
          <Counter title='Horas' number={hour3} />
          <Counter title='Minutos' number={minute3} />
          <Counter title='Segundos' number={second3} />
        </div>
      </div>
    </ div>
  )
}

export default App
