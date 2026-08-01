"use client"
import Heading from '../../components/Heading'
import { useState } from 'react'
import '../styles.scss'
import { possibleUsers } from "../../../store/data.js"


const USERNAME_PATTERN = /^[a-zA-Z0-9$_-]+$/
const PASSWORD_PATTERN = /^[a-zA-Z0-9$_-]*$/

const initialValue = {
  username: "",
  password: "",
}


export default function Login() {
  const [formData, setFormData] = useState(initialValue)
  const [formErrors, setFormErrors] = useState({
    username: "",
    password: "",
  })


  function submitForm(e) {
    e.preventDefault();
    if (Object.values(formErrors).some(error => { error !== "" })) {
      alert("Form is invalid")
      return
    }
    const USER = possibleUsers.find(user => {
      return user.username === formData.username && user.password === formData.password
    })
    if (USER) {
      alert("Login successful")
      localStorage.setItem("logged-in", true)
    } else {
      alert("Login failed")
      localStorage.setItem("logged-in", false)
    }
    window.location.reload()
  }

  function handleChange(e) {
    const { name, value } = e.target
    if (name === "username") {
      if (USERNAME_PATTERN.test(value)) {
        setFormErrors({ ...formErrors, [name]: "" })
      } else {
        setFormErrors({ ...formErrors, [name]: "Username is invalid" })
      }
    } else {
      if (PASSWORD_PATTERN.test(value)) {
        setFormErrors({ ...formErrors, [name]: "" })
      } else {
        setFormErrors({ ...formErrors, [name]: "Password is invalid" })
      }
    }
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="auth login-page">
      <Heading title="Login" color="#111" />


      <form onSubmit={submitForm}>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input id='username' type="text" name='username' value={formData.username} onChange={handleChange} />

          {
            formErrors.username && <p className="error">{formErrors.username}</p>
          }
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input id='password' type="password" name='password' value={formData.password} onChange={handleChange} />
          {
            formErrors.password && <p className="error">{formErrors.password}</p>
          }
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
