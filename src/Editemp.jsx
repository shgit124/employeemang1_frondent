import React,{ useState,useEffect } from 'react'
import { empupdateApi,editEmployeeByidApi } from './services/allApi'
import { useParams ,useNavigate} from 'react-router-dom'

function Editemp() {

   const navigate = useNavigate()
    const { id } = useParams()

  const [Employee,setEmployee]=useState({
    name: '',
    department: '',
    phone: '',
    empid: ''
  })

  //fetch existing employee

  const fetchEmployee=async(id)=>{
    try{

      const response=await editEmployeeByidApi(id)
      console.log(response.data)
      setEmployee(response.data)
    }catch(err){
      console.log(err)
      alert("failed to fetching data")
    }
  }

useEffect(() => {
  if (id) {
    fetchEmployee(id)
  }
}, [id])

// upadatefunction

const handleupdate=async()=>{

  try{
  const update=await empupdateApi({
    id,
    ...Employee
  })

  if(update.status===200){
    alert("employee updated successfully")
      navigate('/Listemp')
  }
  }catch(err){
    console.log(err)
    alert("update failed")
  }

}
  return (
   <>
   <div className='d-flex justify-content-center align-items-center' style={{height:"80vh"}}>
    <div className='w-75 border border-3'>
      <h2 className='text-center'>update Employee Details</h2>
      <div className='p-4'>
      <input type="text" className='form-control mb-3' placeholder='your name'   value={Employee.name}   onChange={(e) =>
    setEmployee({ ...Employee, name: e.target.value })
  } />
     <input type="text" className='form-control mb-3' placeholder='your phone'   value={Employee.phone}   onChange={(e) =>
    setEmployee({ ...Employee, phone: e.target.value })
  } />
    <input type="text" className='form-control mb-3' placeholder='emp id'   value={Employee.empid}  onChange={(e) =>
    setEmployee({ ...Employee, empid: e.target.value })
  } />
     <input type="text" className='form-control mb-3' placeholder='department'   value={Employee.department}   onChange={(e) =>
    setEmployee({ ...Employee, department: e.target.value })
  } />
     <div className='text-center'>
        <button className='btn btn-success' onClick={handleupdate}>update</button>
     </div>

      </div>
    </div>

   </div>
   </>
  )
}

export default Editemp