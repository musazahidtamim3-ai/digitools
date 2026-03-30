import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Status from './components/Status'
import { ToastContainer } from 'react-toastify'
import Cart from './components/Cart'

const productPromise = fetch("produci.json")
  .then(res=> res.json())


function App() {
  const [active, setActive] = useState("products")
  const [selected,setSelected]=useState([])

  return (
    <>
      <header>
        <Navbar selected={selected}></Navbar>
      </header>

      <section>
        <Banner></Banner>
      </section>

      <section>
        <Status></Status>
      </section>

      <section>
      <div className='text-center space-y-3 mb-8'>
        <h1 className='text-4xl font-extrabold'>Premium Digital Tools</h1>
        <p className='max-w-135 mx-auto text-gray-500'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box bg-white justify-center mb-8">
          <input onClick={() => setActive("products")} type="radio" name="my_tabs_1" className={`tab w-40 rounded-full font-semibold ${active === "products" && "bg-linear-to-r from-[#9514FA] to-[#4F39F6] text-white"}`} aria-label="Products" defaultChecked/>
          <input onClick={() => setActive("cart")} type="radio" name="my_tabs_1" className={`tab w-40 rounded-full font-semibold ${active === "cart" && "bg-linear-to-r from-[#9514FA] to-[#4F39F6] text-white"}`} aria-label={`Cart (${selected.length})`} />
      </div>

      
        <Suspense >
          {active==="products" && <Products productPromise={productPromise} selected={selected} setSelected={setSelected}></Products>}
        </Suspense>
      </section>

      {active==="cart" && <Cart selected={selected} setSelected={setSelected}></Cart>}
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
