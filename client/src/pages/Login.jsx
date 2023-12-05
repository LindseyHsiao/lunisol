import { useState } from "react"
import { loginUser } from "../utils/API";
import Auth from '../utils/auth'

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await loginUser(formData)
            if (!response.ok) {
                throw new Error('wrong inputs')
            }

            const { token, user } = response.json();

            console.log(user);
            Auth.login(token)

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="login">
                <h2>Login</h2>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input className="email-input" type="email" placeholder="Enter your email" value={formData.email} name="email" onChange={handleChange} />
                </div>
                <div className="email">
                    <label htmlFor="password">Password</label>
                    <input className="email-input" type="password" placeholder="Enter your password" value={formData.password} name="password" onChange={handleChange} />
                </div>
                <button className="sign-up-button" type="submit">Login</button>
            </form>
        </>
    )
}
