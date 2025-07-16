import './App.css'
import { AllProductsList } from './components/AllProducts'
import { Filters } from './components/Filters'


function App() {

  return (
    <>
      <div className='flex flex-col md:flex-row'>
        <div className='w-[100%] md:w-[30%] '>
          <Filters />
        </div>
        <div className='w-[100%]'>
          <AllProductsList />
        </div>


      </div>

    </>
  )
}

export default App
