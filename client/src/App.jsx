
import { BrowserRouter , Link , Route , Routes } from 'react-router-dom'
import { logo } from './assets'
import Home from './pages/Home'
import CreatePost from './pages/CreatePost'

export default function App() {

  return (
    <BrowserRouter>
      <header className='py-6 px-8 bg-white border-b border-gray-50 shadow-md flex justify-between items-center'>
        <div className="logo">
            <img className='h-8' src={logo} alt="" />
        </div>
        <div className="button">
            <Link to='/create' className='bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md'>Create</Link>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<CreatePost/>} />
      </Routes>
    </BrowserRouter>
  )
}