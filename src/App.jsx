import Title from './components/Title'
import Counter from './components/Counter'

import useContdown from './hooks/useCountdown'

import israel from './assets/israel.jpg'

import './App.css'

function App() {
  const [day, hour, minute, second] = useContdown("Mar 8, 2023 12:00:00")

  return (
    <div className="App" style={{ backgroundImage: `url(${israel}` }} >
      <div className="container">
        <Title title='Contagem regressiva para viagem' />
        <div className="countdown-container">
          <Counter title='Dias' number={day} />
          <Counter title='Horas' number={hour} />
          <Counter title='Minutos' number={minute} />
          <Counter title='Segundos' number={second} />
        </div>
      </div>
    </ div>
  )
}

export default App
