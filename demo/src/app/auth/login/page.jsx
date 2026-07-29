"use client"
import Heading from '../../components/Heading'
import { useState } from 'react'


const initialValue = {
  username: "",
  password: "",
}


export default function Login() {
  const [formData, setFormData] = useState(initialValue)


  function submitForm(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }



  return (
    <div className="auth login-page">
      <Heading title="Login" color="#111" />


      <form onSubmit={submitForm}>
        <input type="text" name='username' value={formData.username} onChange={handleChange} />
        <input type="password" name='password' value={formData.password} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
