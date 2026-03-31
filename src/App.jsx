import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Status from './components/Status'
import { ToastContainer } from 'react-toastify'
import Cart from './components/Cart'
import Steps from './components/Steps'
import Pricing from './components/Pricing'
import Workflow from './components/Workflow'
import Footer from './components/Footer'

const productPromise = fetch("produci.json")
  .then(res=> res.json())


function App() {
  const [active, setActive] = useState("products")
  const [selected,setSelected]=useState([])

  return (
    <>
      <header className='sticky top-0 z-50'>
        <Navbar selected={selected}></Navbar>
      </header>

      <section>
        <Banner></Banner>
      </section>

      <section>
        <Status></Status>
      </section>

      <section id="products" className='px-5 lg:px-0'>
      <div className='text-center space-y-3 mb-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>Premium Digital <span className='bg-linear-to-r from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent'>Tools</span></h1>
        <p className='max-w-135 mx-auto text-gray-500 text-sm md:text-md'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
      </div>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box bg-white justify-center mb-8">
          <input onClick={() => setActive("products")} type="radio" name="my_tabs_1" className={`tab w-40 rounded-full font-semibold ${active === "products" && "bg-linear-to-r from-[#9514FA] to-[#4F39F6] hover:from-[#9614fa92] hover:to-[#4f39f686] text-white"}`} aria-label="Products" defaultChecked/>
          <input onClick={() => setActive("cart")} type="radio" name="my_tabs_1" className={`tab w-40 rounded-full font-semibold ${active === "cart" && "bg-linear-to-r from-[#9514FA] to-[#4F39F6] hover:from-[#9614fa92] hover:to-[#4f39f686] text-white"}`} aria-label={`Cart (${selected.length})`} />
      </div>

      
        <Suspense >
          {active==="products" && <Products productPromise={productPromise} selected={selected} setSelected={setSelected}></Products>}
        </Suspense>
      </section>

      {active === "cart" && <Cart selected={selected} setSelected={setSelected}></Cart>}
      
      <Steps></Steps>
       
      <section id="price">
        <Pricing></Pricing>
      </section>
      
      <Workflow></Workflow>

      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
