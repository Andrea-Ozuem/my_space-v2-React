import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>Go back to <Link to="/">Home page</Link></p>
        </div>
    )
}