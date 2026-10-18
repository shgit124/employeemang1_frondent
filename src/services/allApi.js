import baseUrl from "./baseUrl";
import commonApi from "./commonApi";

// add user


export const addEmployeeApi=async(data)=>{
  return await commonApi("POST",`${baseUrl}/addemployee`,data)
}

// list user

export const emplistApi=async()=>{
 return await commonApi("GET",`${baseUrl}/employeeList`,{})
}

// delete emp

export const empdeleteApi=async(id)=>{
  return await commonApi("DELETE",`${baseUrl}/empdelete`,{id})
}

// update emp

export const empupdateApi=async(data)=>{
  return await commonApi("PUT",`${baseUrl}/updateEmp`,data)
}

// GET: Fetch one employee
export const editEmployeeByidApi = async (id) => {
  return await commonApi(
    "GET",
    `${baseUrl}/getemployee/${id}`,
    ""
  )
}

// 