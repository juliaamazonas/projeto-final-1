import { BrowserRouter } from 'react-router-dom'
import { GlobalCSS } from './styles'
import Rotas from './routes'

function App() {
  return (
    <>
      <GlobalCSS />
      <BrowserRouter>
        <Rotas />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
