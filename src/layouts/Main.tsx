import React from 'react'
import ReactIcon from "../assets/react.svg"

const Main = (): React.JSX.Element => {
  return (
    <main className='bg-dark flex-grow-1 flex-center flex-column text-white-50'>
      <img
        src={ReactIcon}
        alt="logo"
        width={250}
        height={250}
      />

      <h1>Start Coding now</h1>
      <span>BScript Language is one of strongest programming languages ever, for mobile, desktop, AI, web, and more...</span>
    </main>
  )
}

export default Main