import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'
import { GlobalCSS } from './styles'
import Rotas from './routes'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'
import Entrega from './components/Entrega'

function App() {
  return (
    <Provider store={store}>
      <GlobalCSS />
      <BrowserRouter>
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
