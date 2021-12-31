import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

function App() {
  const cards = data.map((item, index) => {
    return (
      <Card
        key={index}
        item={item}
      />
    )
  })
  
  return (
    <div className="app">
      <header className="app-header">
        <Navbar />
      </header>
      <div className="cards__container">{cards}</div>
    </div>
  )
}

export default App
