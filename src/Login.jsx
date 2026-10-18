import React from 'react'

function Login() {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{height:"80vh"}}>
        <div className='w-50 border border-black border-2'>
            <h2 className='text-center'>SignUp for MOre!!!!</h2>
            <div className='p-3'>
            <input type="text" className=' form-control mb-3' placeholder='enter your user name' />
             <input type="text" className=' form-control mb-3' placeholder='enter your user email' />

            <input type="password" className=' form-control mb-3' placeholder='enter your user paswword' />

            <div className='text-center'>
             <button className='btn btn-success'>submit</button>
            </div>

            <div className='d-flex justify-content-between' style={{color:"blue"}}>
             <p style={{color:"blue"}}>forgotpassword?</p>
             <p>already a user then click here</p>
            </div>

            </div>

        </div>

    </div>
    </>
  )
}

export default Login