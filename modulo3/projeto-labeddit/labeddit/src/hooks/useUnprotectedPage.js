import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { goToPostsFeedPage } from "../router/coordinator"

const useUnprotectedPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token) {
            goToPostsFeedPage(navigate)
        }
    }, [navigate])
}

export default useUnprotectedPage