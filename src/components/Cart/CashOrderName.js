import React from 'react'

const CashOrderName = ({ handleHideName }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }

  const handleChange = (e) => {
    // const name = e.target.name
    // const value = e.target.value
  }
  return (
    <div>
      <form className='form' onClick={handleSubmit}>
        <label className='form-label' htmlFor='name'>
          Name
        </label>
        <input
          type='text'
          id='name'
          name='name'
          value='name'
          onChange={handleChange}
        />
        <button className='btn' type='submit'>
          submit
        </button>
        <button className='btn' type='button' onClick={handleHideName}>
          Go Back to menu
        </button>
      </form>
    </div>
  )
}

export default CashOrderName
