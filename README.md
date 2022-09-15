# react-otp-module

[![npm version](https://badge.fury.io/js/react-otp-module.svg)](https://badge.fury.io/js/react-otp-module) [![npm](https://img.shields.io/npm/dw/react-otp-module.svg?logo=npm)](https://www.npmjs.com/package/react-otp-module) [![npm](https://img.shields.io/bundlephobia/minzip/react-otp-module)](https://www.npmjs.com/package/react-otp-module)
[![All Contributors](https://img.shields.io/badge/all_contributors-7-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

A fully customizable, one-time password input component for the web built with React.

![see here](https://media.giphy.com/media/lN98dFU6h3oP0wWS5x/giphy.gif)

[Live Demo](https://5xixc0.csb.app/)

[CodeSandbox](https://codesandbox.io/s/react-opt-module-5xixc0)


## Installation

[![NPM](https://nodei.co/npm/react-otp-module.png?compact=true)](https://nodei.co/npm/react-otp-module/)

#### To install the latest stable version:

```
npm install --save react-otp-module
```

#### Basic usage:

```jsx
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
        separator={<span className='px-2'></span>}
        inputStyle='otp__input'
        placeholder='------'
        isInputNum={true}
      />
    </form>
  )
}

export default App
```

## Props

<table>
  <tr>
    <th>Name<br/></th>
    <th>Type</th>
    <th>Required</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>numInputs</td>
    <td>number</td>
    <td>true</td>
    <td>4</td>
    <td>Number of OTP inputs to be rendered.</td>
  </tr>
  <tr>
    <td>onChange</td>
    <td>function</td>
    <td>true</td>
    <td>console.log</td>
    <td>Returns OTP code typed in inputs.</td>
  </tr>
  <tr>
    <td>value</td>
    <td>string / number</td>
    <td>true</td>
    <td>''</td>
    <td>The value of the OTP passed into the component.</td>
  </tr>
    <tr>
     <td>placeholder</td>
     <td>string</td>
     <td>false</td>
     <td>none</td>
     <td>Specify an expected value of each input. The length of this string should be equal to <code>numInputs</code>.</td>
   </tr>
  <tr>
    <td>separator</td>
    <td>component<br/></td>
    <td>false</td>
    <td>none</td>
    <td>Provide a custom separator between inputs by passing a component. For instance, <code>&lt;span&gt;-&lt;/span&gt;</code> would add <code>-</code> between each input.</td>
  </tr>
  <tr>
    <td>containerStyle</td>
    <td>style (object) / className (string)</td>
    <td>false</td>
    <td>none</td>
    <td>Style applied or class passed to container of inputs.</td>
  </tr>
  <tr>
    <td>inputStyle</td>
    <td>style (object) / className (string)</td>
    <td>false</td>
    <td>none</td>
    <td>Style applied or class passed to each input.</td>
  </tr>
  <tr>
    <td>focusStyle</td>
    <td>style (object) / className (string)</td>
    <td>false</td>
    <td>none</td>
    <td>Style applied or class passed to inputs on focus.</td>
  </tr>
  <tr>
    <td>isDisabled</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>Disables all the inputs.</td>
  </tr>
  <tr>
    <td>disabledStyle</td>
    <td>style (object) / className (string)</td>
    <td>false</td>
    <td>none</td>
    <td>Style applied or class passed to each input when disabled.</td>
  </tr>
  <tr>
    <td>hasErrored</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>Indicates there is an error in the inputs.</td>
  </tr>
  <tr>
    <td>errorStyle</td>
    <td>style (object) / className (string)</td>
    <td>false</td>
    <td>none</td>
    <td>Style applied or class passed to each input when errored.</td>
  </tr>
  <tr>
    <td>shouldAutoFocus</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>Auto focuses input on initial page load.</td>
  </tr>
  <tr>
    <td>isInputNum</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>Restrict input to only numbers.</td>
  </tr>
  <tr>
    <td>isInputSecure</td>
    <td>boolean</td>
    <td>false</td>
    <td>false</td>
    <td>Masks input characters.</td>
  </tr>
  <tr>
    <td>data-cy</td>
    <td>string</td>
    <td>false</td>
    <td>-</td>
    <td>Test attribute passed to the inputs.</td>
  </tr>
  <tr>
    <td>data-testid</td>
    <td>string</td>
    <td>false</td>
    <td>-</td>
    <td>Test attribute passed to the inputs.</td>
  </tr>
</table>


## License

[![NPM](https://img.shields.io/npm/l/react-otp-module)](https://github.com/devfolioco/react-otp-module/blob/master/LICENSE)

## Contributors ✨

<table>
  <tr>
    <td align="center"><a href="https://jagan.pro"><img src="https://avatars.githubusercontent.com/u/43448819?v=4?s=100" width="100px;" alt=""/><br /><sub><b> Jagannath Swarnkar</b></sub></a><br /><a href="https://github.com/jagannath-swarnkar/react-otp-module/commits?author=apollonian" title="Code">💻</a> <a href="#design-apollonian" title="Design">🎨</a> <a href="#maintenance-apollonian" title="Maintenance">🚧</a> <a href="#ideas-apollonian" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/jagannath-swarnkar/react-otp-module/pulls?q=is%3Apr+reviewed-by%3Aapollonian" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/paritoshmaurya"><img src="https://avatars.githubusercontent.com/u/76396349?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Paritosh Maurya</b></sub></a><br /><a href="https://github.com/devfolioco/react-otp-module/commits?author=causztic" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [jagannath-swarnkar](https://github.com/jagannath-swarnkar)
