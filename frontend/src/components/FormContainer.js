import React from 'react'

const FormContainer = ({ children }) => {
  return (
    <div className='container mt-5 pt-5'>
      <div className='row  d-flex justify-content-center '>
        <div className='col-12 col-md-6 my-auto'>{children}</div>
      </div>
    </div>
  )
}

export default FormContainer
