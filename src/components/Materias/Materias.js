import Navbar from '../Navbar'
import Materia from './Materia'

import './Materias.sass'

const Materias = () => {

    const materias = [
        {
            materia: 'Matematicas',
            id: 1,
            url: '/mis-materias' 
        },
        {
            materia: 'ED. Fisica',
            id: 2,
            url: '/mis-materias'  
        },
        {
            materia: 'Ingles',
            id: 3,
            url: '/mis-materias'  
        },
        {
            materia: 'Sociales',
            id: 4,
            url: '/mis-materias' 
        },
        {
            materia: 'Quimica',
            id: 5,
            url: '/mis-materias' 
        },
        {
            materia: 'Informatica',
            id: 6,
            url: '/mis-materias'  
        },
        {
            materia: 'Artes',
            id: 7,
            url: '/mis-materias'  
        },
        {
            materia: 'Religion',
            id: 8,
            url: '/mis-materias'  
        },
        {
            materia: 'Español',
            id: 9,
            url: '/mis-materias'  
        }
    ]

    return (
        <div className="materias">
            <div className="materias_container">
                <Navbar />
                <h2 className="materias_container-titulo">Mis Materias</h2>
                <div className="materias_container-materias">
                    {
                        materias.map(materia => (
                            <Materia 
                                key={materia.id}
                                {...materia}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Materias
