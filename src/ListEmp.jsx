import React,{useState,useEffect} from 'react'
import { emplistApi,empdeleteApi } from './services/allApi'
import { useNavigate,useParams } from 'react-router-dom'


function ListEmp() {

  const [search, setSearch] = useState('')

 



    const { id } = useParams()
    console.log(id)

  const navigate = useNavigate()

  const [editId,setEditId]=useState(null)

  const [employee,setemployee]=useState([])

  const collectempdata=async()=>{
    try{
  const res = await emplistApi()
      console.log(res.data)
     setemployee(res.data)
    }catch(err){

    console.log(err)
    }
   
  }

 useEffect(()=>{
  collectempdata()
 },[])

  const filteredEmployees = employee.filter((item) =>
  item.name?.toLowerCase().includes(search.toLowerCase()) ||
  item.empid?.toString().toLowerCase().includes(search.toLowerCase()) ||
  item.department?.toLowerCase().includes(search.toLowerCase()) ||
  item.phone?.toString().includes(search)
)

   // Delete employee
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this employee?'
    )

    if (!confirmDelete) return

    try {
      await empdeleteApi(id)
      alert('Employee deleted successfully')
      collectempdata()
    } catch (error) {
      console.log(error)
      alert('Failed to delete employee')
    }
  }
  return (
   <>
   <div className='container' style={{height:"100%vh"}}>
    <h3 className='text-center'>Employee list</h3>

    <input
  type="text"
  className="form-control mb-3"
  placeholder="Search by name, ID, department or phone..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

    
    <div className='table-responsive'>
 <table className='table table-bordered table-hover'>
     <thead className='table-dark'>
    <tr>
  <th>name</th>
   <th>Department</th>
     <th>Phone</th>
     <th>empId</th>
       <th>Action</th>
    </tr>
     </thead>
     <tbody>
      {
        filteredEmployees.map(item=>(
<tr key={item._id}>
        <td>{item.name}</td>
        <td>{item.department}</td>
        <td>{item.phone}</td>
        <td>{item.empid}</td>
        <td>
                  <div className="d-flex flex-wrap gap-2">
                    <button className="btn btn-success btn-sm"  onClick={() => navigate(`/editEmp/${item._id}`)}>
                      Edit
                    </button>

                    <button className="btn btn-danger btn-sm"   onClick={() => handleDelete(item._id)}>
                      Delete
                    </button>
                  </div>
                </td>
      </tr>

        ))
      }
     
     </tbody>
   </table>
    </div>
  
   </div>
   </>
  )
}

export default ListEmp