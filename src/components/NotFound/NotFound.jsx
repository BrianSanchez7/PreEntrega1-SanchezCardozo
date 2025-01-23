import { Link } from "react-router-dom"
import "./notfound.css"

const NotFound = () => {
  return (
    <div className="notfound-container">
        <h1>El producto no fue encontrado 🙁</h1>
        <Link to="/" className="button-detail">Volver al inicio</Link>
    </div>
  )
}

export default NotFound