import React, { useState } from 'react'
import OtpInput from 'react-otp-module'

const App = () => {
  const [otp, setOtp] = useState()
  return (
    <form>
      <label htmlFor='otp'>Enter your OTP here</label>
      <OtpInput
        id="otp"
        value={otp}
        onChange={setOtp}
        numInputs={6}
        // separator={<span className='px-2'></span>}
        inputStyle='otp__input'
        placeholder='------'
        isInputNum={true}
      />
    </form>
  )
}

export default App
