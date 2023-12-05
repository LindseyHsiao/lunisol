import { useState } from "react"
import { createUser } from "../utils/API"

export default function SignUp() {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.prventDefault()

    try {
      const response = await createUser(formData)
      if (!response.ok) {
        throw new Error('wrong imputs')
      }

      console.log(user)

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="login">
        <h2>Sign Up</h2>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input className="email-input" type="email" placeholder="Enter your email" value={formData.email} name="email" onChange={handleChange} />
        </div>
        <div className="email">
          <label htmlFor="password">Password</label>
          <input className="email-input" type="password" placeholder="Enter your password" value={formData.password} name="password" onChange={handleChange} />
        </div>
        <button className="sign-up-button" type="submit">Sign Up</button>
      </form>
    </>
  )
}
