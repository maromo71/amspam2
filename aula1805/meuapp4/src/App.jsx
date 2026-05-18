import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

export default function App(){
  return(
    <BrowserRouter>
       <NavBar/>
       <div className='container'>
         <Routes>
           <Route path='/' element={<HomePage/>}/>
           <Route path='/about' element={<AboutPage/>}/>
         </Routes>
       </div>
    </BrowserRouter>
  )
}
