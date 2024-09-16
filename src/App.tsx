import Header from './components/Header'
import Banner from './components/Banner'
import { GlobalCSS } from './styles'

function App() {
  return (
    <>
      <GlobalCSS />
      <div>
        <Header />
      </div>
      <Banner />
    </>
  )
}

export default App
