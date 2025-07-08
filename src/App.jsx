import reviews from './data'
import './App.css'
import Testimonal from './Components/Testimonal'

function App() {

  return (
    <div className='bg-gray-200 flex flex-col w-[100vw] h-[100vh] justify-center items-center'>
      <div className='text-center'>
        <h1 className='font-bold  text-4xl mb-5'>Our Testimonials</h1>
        {/* <div className='bg-violet-400 h-[4px] w-1/3 mt-1 flex items-center'></div> */}
      <Testimonal reviews={reviews}/>
      </div>
    </div>
  )
}

export default App
