import { useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import './App.css'
import AddEmp from './AddEmp'
import ListEmp from './ListEmp'
import Editemp from './Editemp'
import Home from './Home'
import Login from './Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className='p-4 bg-success' >
       <h2 className='text-center'>Employee managment</h2>
       <nav className='d-flex justify-content-center gap-3'>
        <Link to={'/Addemp'} className='nav-link'>addEmployee</Link>
         <Link to={'/Listemp'} className='nav-link'>ListEmployee</Link>


       </nav>
      </div>

      <Routes>
        <Route path='/' element={<Home/>} />
         <Route path='/Addemp' element={<AddEmp/>} />
         <Route path='/Listemp' element={<ListEmp/>} />
         <Route path='/editEmp/:id' element={<Editemp/>} />

          
         <Route path='/login' element={<Login/>} />

      </Routes>

 {/* Footer */}
      <div className="p-4 bg-success text-white">
        <h2 className="text-center">Footer</h2>
      </div>

    </>
  )
}

export default App
