import { Link } from 'react-router-dom'
import './Materia.sass'

const Materia = (props) => {

    const { materia, url } = props

    return (
        <div className="materia">
            <div className="materia-titulo">
                <p>{materia}</p>
            </div>
            <div className="materia-url">
                <Link
                    className="materia-url-link"
                    to={url}
                >Ir a Materia</Link>
            </div>
        </div>
    )
}

export default Materia
