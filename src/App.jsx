import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Status from './components/Status'

function App() {
  

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <section>
        <Banner></Banner>
      </section>

      <section>
        <Status></Status>
      </section>

      <section>
        <Products></Products>
      </section>
    </>
  )
}

export default App
