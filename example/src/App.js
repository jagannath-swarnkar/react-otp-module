import './index.css'
import React, { useState } from 'react'
import OtpInput from 'react-otp-module'

const App = () => {
  const [otp, setOtp] = useState()
  const [numInputs, setNumInputs] = useState(4)
  const [numInputType, setNumInputType] = useState(true)
  const [error, setError] = useState('')
  const handleClear = () => {
    setOtp('')
    setError('')
  }
  const handleSubmit = () => {
    if (String(otp)?.length != numInputs) {
      return setError('Please enter missing OTP fileds!')
    } else {
      setError('')
    }
    alert(otp)
  }
  const handleChange = (e) => {
    const count = e.target.value
    setNumInputs(count < 1 ? 1 : count)
  }
  return (
    <div className='App'>
      <div className='card shadow p-3'>
        <form className=''>
          <label className='font-weight-bold' htmlFor='otp'>
            Enter your OTP here
          </label>
          <br />
          <OtpInput
            id='otp'
            value={otp}
            onChange={setOtp}
            numInputs={numInputs}
            // separator={<span className='px-2'></span>}
            inputStyle='otp__input'
            placeholder={''}
            isInputNum={numInputType}
          />
        </form>

        <div className='pt-3'>
          <label className='error text-danger'>{error}</label>
        </div>
        <div>
          <input
            onChange={() => setNumInputType(!numInputType)}
            checked={numInputType}
            type={'checkbox'}
            id='inputType'
          />
          <label className='pl-2' htmlFor='inputType'>
            Number input
          </label>
        </div>
        <div>
          <label className='pr-2' htmlFor='inputType'>
            Number of OTP fields
          </label>
          <input
            value={numInputs}
            onChange={handleChange}
            type={'number'}
            style={{ width: '50px' }}
            id='numInput'
          />
        </div>

        <div className='pt-2'>
          <button onClick={handleClear} className='btn btn-info mr-3'>
            Clear
          </button>
          <button onClick={handleSubmit} className='btn btn-danger'>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
