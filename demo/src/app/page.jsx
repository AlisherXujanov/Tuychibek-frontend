"use client"

import Heading from "./components/Heading";
import { useState } from "react"
// useState   =>   memory of the component

export default function Home() {
  const [theme, setTheme] = useState('light')


  // Hook MUST be called before anything else in the component
  // We import them from React itself
  // ...

  const LIGHT = {
    backgroundColor: 'white',
    color: 'black'
  }
  const DARK = {
    backgroundColor: 'black',
    color: 'white'
  }
  return (
    <div style={theme==='light' ?  LIGHT : DARK}>
      <Heading title="Hello Tuychibek" color="red" />

      <button onClick={(e) => {theme==="light" ? setTheme("dark") : setTheme("light")}}>
        Toggle Theme
      </button>
    </div>
  )
}


// JSX  =>  JavaScript XML

// export {}
// export default