import { BrowserRouter } from 'react-router-dom'
import { Globalstyle } from './styles'

import Header from './components/Header'

import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Globalstyle />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
