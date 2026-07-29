"use client"
import Heading from '../../components/Heading'


export default function Register() {
  function submitForm(e) {
    e.preventDefault();
  }


  return (
    <div className="auth register-page">
        <Heading title="Register" color="#111" />


        <form onSubmit={submitForm}>

        </form>
    </div>
  )
}
