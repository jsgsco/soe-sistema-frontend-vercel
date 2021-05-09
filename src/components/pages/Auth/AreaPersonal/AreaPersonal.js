import Materias from '../../../Materias'
import Sidebar from '../../../Sidebar'
import './AreaPersonal.sass'

const AreaPersonal = () => {
    return (
        <div className="area-personal">
            <Sidebar />
            <Materias />
        </div>
    )
}

export default AreaPersonal
