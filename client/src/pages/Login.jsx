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
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" value={formData.email} name="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" value={formData.password} name="password" onChange={handleChange} />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    )
}
