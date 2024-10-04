import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalCSS } from './styles'

import Home from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <GlobalCSS />
      <div></div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
