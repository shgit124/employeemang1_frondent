import React,{useState} from 'react'
import { addEmployeeApi } from './services/allApi'
import { useNavigate } from 'react-router-dom'

function AddEmp() {

  const navigate = useNavigate()
  const [collectemp,setcollectemp]=useState({name:"",department:"",phone:"",empid:""})


  const addEmp=async()=>{
  
    try{
       
        const { name, empid, phone, department } = collectemp;
        if(!name ||!empid || !phone || !department){
           alert("Please fill all fields");
        return;
        }
        else{
  const response = await addEmployeeApi(collectemp)
      console.log(response.data)
      if(response.status === 200 || response.status === 201){
 alert("employee added succesfully")
 navigate('/Listemp')
   window.location.reload();
      }
     
        }
    

    }catch(err){
      console.log(err)
      alert("something went wrong")
    }
  }
  
  // const collectdata=()=>{
  //   console.log(collectemp)

  // }
  return (
  <>
  <div className='d-flex justify-content-center align-items-center' style={{height:"80vh"}}>
    <div className='w-75 border border-3 border-black '>
    <h1 className='text-center'>add employe</h1>
    <div className='p-4'>
        <input type="text" className='form-control mb-3' onChange={(e)=>{setcollectemp({...collectemp,name:e.target.value})}}  placeholder='enter your name' />
        <input type="text" className='form-control mb-3' onChange={(e)=>{setcollectemp({...collectemp,department:e.target.value})}} placeholder='enter your Department' />
        <input type="text" className='form-control mb-3' onChange={(e)=>{setcollectemp({...collectemp,phone:e.target.value})}} placeholder='enter your phone number' />
        <input type="text" className='form-control mb-3' onChange={(e)=>{setcollectemp({...collectemp,empid:e.target.value})}} placeholder='enter your emp ID' />
        <div className='text-center'>
         <button className='btn btn-success' onClick={addEmp}>submit</button>
        </div>
    </div>
    </div>
  </div>
  </>
  )
}

export default AddEmp