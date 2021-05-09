import { Link } from 'react-router-dom'

import './Cursos.sass'


const Cursos = () => {
    return (
        <div className="cursos">
            <h2 className="cursos_titulo">Cursos Principales</h2>
            <div className="cursos_cursos">
                <div className="cursos_cursos-curso">
                    <div className="cursos_cursos-curso-grado">
                        <p>11º ONCE</p>
                    </div>
                    <div className="cursos_cursos-curso-ir">
                        <Link
                            className="cursos_cursos-curso-ir-btn"
                            to="/mis-materias"
                        >Ir al Curso</Link>
                    </div>
                </div>
                <div className="cursos_cursos-curso">
                    <div className="cursos_cursos-curso-grado">
                        <p>11º ONCE</p>
                    </div>
                    <div className="cursos_cursos-curso-ir">
                        <Link
                            className="cursos_cursos-curso-ir-btn"
                            to="/mis-materias"
                        >Ir al Curso</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cursos
