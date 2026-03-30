import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Status from './components/Status'
import { ToastContainer } from 'react-toastify'

const productPromise = fetch("produci.json")
  .then(res=> res.json())


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
        <Suspense >
          <Products productPromise={productPromise}></Products>
        </Suspense>
      </section>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
